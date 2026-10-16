# Registro E2E Sanitizado

Este registro conserva resultados y metadatos de pruebas manuales contra n8n Cloud Test. No contiene claves, prompts, fuentes ni artefactos educativos completos.

## Resultados Verificados

| Caso | Resultado | Evidencia sanitizada |
|---|---|---|
| Acceso sin clave | Correcto | Header Auth rechazo la peticion antes del workflow con HTTP 403. |
| Generacion live | Correcto | `E2E-AUTH-009` devolvio HTTP 200, `mode: live`, un perfil `P01` version 1 y los cinco artefactos del preset Taller. |
| Log de generacion | Correcto | Verificado manualmente en Google Sheets con metadatos, sin contenido completo. |
| Solicitud invalida | Correcto | `E2E-INVALID-001` devolvio HTTP 400 JSON con `INVALID_REQUEST`, sin invocar Gemini. |
| Log de rechazo | Correcto | Verificado manualmente en Google Sheets con metadatos. |
| Cierre | Correcto | `E2E-AUTH-009` / `GEN-MVB73F8B` devolvio HTTP 202, aprobo `P01` y no invoco Gemini. |
| Log de cierre | Correcto | Verificado manualmente en Google Sheets con metadatos. |
| Revision dirigida | Correcto | `E2E-REV-002` devolvio HTTP 200 con solo `P01`, version 2 y los cinco artefactos solicitados. |
| Generacion desde UI Cloudflare | Correcto | La solicitud `55145e1e-9be9-4e12-b1b3-929970ba4eac` genero `P01` y `P02` en version 1 con HTTP 200 y log de Google Sheets. |
| Revision selectiva desde UI | Correcto | La misma solicitud regenero solo `P02` como version 2 (`GEN-MVB94IT1`); `P01` no se regenero. |
| Cierre desde UI | Correcto | El cierre de `GEN-MVB94IT1` aprobo `P01|P02` con HTTP 202 y fila `finalized` en Google Sheets. |

## Diagnosticos Resueltos

- Code nodes: los nodos devolvian listas de items, por lo que se alinearon a `Run Once for All Items`.
- Header Auth de Gemini: `API_KEY_INVALID` se corrigio configurando `x-goog-api-key` con una API key valida para Gemini.
- Modelo Gemini: los modelos anteriores devolvieron saturacion temporal o indisponibilidad; la ejecucion live se valido con el modelo recomendado por el proveedor.

## Limites de la Evidencia

- La revision dirigida uso artefactos previos genericos y validos segun contrato para probar transporte, versionado y salida del workflow.
- La UI Cloudflare tambien se probo con artefactos reales: se selecciono `P02`, se envio feedback y solo ese perfil alcanzo la version 2.
- Cada Test URL de n8n requiere activar `Execute workflow` antes de una unica peticion.
