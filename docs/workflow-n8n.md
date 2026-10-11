# Configurar el workflow de n8n

`workflows/generation-gemini-sheets.template.json` es una **plantilla no ejecutada**. Se importa en n8n Cloud y se configura antes de activarla. No contiene claves, URL de producción, identificadores reales de Google Sheets ni resultados de prueba.

## Flujo incluido

```text
POST webhook -> validacion -> Gemini -> validacion de salida -> Google Sheets -> respuesta HTTP
                    |                                      |
                    +-> error 400 + log                    +-> error 502/503 + log
```

- Valida el contrato de `schemas/generation-request.schema.json` antes de llamar al modelo.
- Llama a `models/{modelo}:generateContent` mediante el nodo HTTP Request y una credencial de cabecera.
- Exige JSON y rechaza una salida del modelo que no tenga exactamente un material completo por perfil.
- No registra el contenido, el prompt ni el contexto fuente en Google Sheets: solo metadatos operativos.
- Si Google Sheets falla, la respuesta de generación se mantiene; el fallo debe revisarse en las ejecuciones de n8n.

## Importar y configurar

1. En n8n Cloud, importar `workflows/generation-gemini-sheets.template.json` y conservarlo inactivo.
2. Abrir `Validate Request` y cambiar únicamente los valores de `config`:
   - `geminiModel`: el identificador confirmado en la cuenta, por ejemplo, un modelo Gemini disponible en la prueba real.
   - `googleSheetDocumentId`: el ID de la hoja, no una URL completa.
   - `googleSheetName`: nombre de la pestaña de logs; por defecto `generation_runs`.
   - Los límites de tamaño solo deben ampliarse con una decisión documentada.
3. En `Generation Webhook`, sustituir `http://localhost:4173` en **Allowed Origins** por el origen real del frontend. Para desarrollo local se mantiene `http://localhost:4173`; para Cloudflare Pages usar el origen HTTPS exacto, sin rutas.
4. En `Call Gemini`, crear una credencial **Header Auth** con:
   - Name: `x-goog-api-key`
   - Value: la clave de Gemini API
   - Asignar esa credencial al nodo. La clave no se pega en el workflow, Git, exportaciones ni capturas.
5. En los tres nodos `Log ...`, crear o seleccionar una credencial **Google Sheets OAuth2**. Debe tener acceso de edición a la hoja elegida.
6. Guardar y ejecutar con la **Test URL** mientras n8n está escuchando. Solo usar la **Production URL** después de activar/publicar el workflow y completar la prueba.

La URL que consumirá el frontend es la URL del webhook de n8n, no la URL del frontend. Más adelante se guardará como `VITE_N8N_GENERATE_URL` en `.env.local`; no se coloca ningún secreto en variables `VITE_`.

## Hoja de logs

Crear la pestaña indicada con esta primera fila, exactamente con estos encabezados:

```text
loggedAt,outcome,requestId,generationId,model,profileCount,httpStatus,providerStatus,latencyMs,errorCode,workflowVersion
```

`outcome` puede ser `success`, `failed` o `rejected`. La hoja registra identificadores, estados y latencia; no debe usarse como almacenamiento de perfiles, contexto didáctico, prompt, materiales o datos de estudiantes.

## Respuestas y errores

| Situación | HTTP | Código |
|---|---:|---|
| Solicitud válida y salida estructurada | 200 | respuesta `GenerationResponse` con `mode: live` |
| Contrato inválido | 400 | `INVALID_REQUEST` |
| Gemini rechaza o no completa la petición | 502 o 503 para cuota/rate limit | `GEMINI_REQUEST_FAILED` |
| Gemini no devuelve contenido | 502 | `GEMINI_EMPTY_RESPONSE` |
| Gemini devuelve JSON o estructura inválida | 502 | `INVALID_MODEL_OUTPUT` |

Los detalles internos del proveedor no se devuelven al navegador. Se revisan en el historial de ejecuciones de n8n.

## Prueba mínima

Con n8n en modo de escucha, enviar un `POST` JSON compatible con `schemas/generation-request.schema.json`. Debe incluir `topicKey` y perfiles con `id`, por ejemplo `P01`; no `profileId` en la solicitud. Confirmar, en este orden:

1. Recibir `200` y un material por cada perfil solicitado.
2. Verificar que el modelo, la versión del workflow y la latencia aparecieron en Google Sheets.
3. Enviar una solicitud sin `requestId` y comprobar `400` con `INVALID_REQUEST` y su registro.
4. Sustituir temporalmente el modelo por un valor inexistente y comprobar `502` con `GEMINI_REQUEST_FAILED` sin exponer la clave.
5. Restaurar el modelo real, desactivar cualquier dato de prueba no necesario y documentar la versión de n8n, modelo y resultado sanitizado.

## Límites de seguridad

Restringir CORS no autentica el endpoint ni impide llamadas directas. Antes de publicar un frontend abierto, revisar protección de abuso, cuota, límite de gasto y la arquitectura de acceso. Una aplicación estática no puede custodiar un secreto compartido. No enviar datos identificativos, diagnósticos ni información sensible de estudiantes al webhook.
