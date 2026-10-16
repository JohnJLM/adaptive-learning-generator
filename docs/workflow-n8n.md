# Configurar el workflow n8n

`workflows/educational-package-gemini-sheets.template.json` es la única plantilla importable del contrato v2. No contiene claves, URL de producción, IDs reales de Sheets ni ejecuciones acreditadas.

## Flujo

```text
POST + Header Auth
  -> finalize -> validar cierre -> log -> respuesta 202/400
  -> Validate Request -> Apply Accessibility Supports -> Build Gemini Request
  -> Call Gemini -> Parse Gemini Response -> log limpio -> respuesta HTTP
```

- Header Auth rechaza una llamada sin `X-TFM-Access-Key` válida antes de ejecutar el workflow. En n8n Cloud, la prueba realizada el 2026-10-12 devolvió `403`; tratar `401` o `403` como rechazo correcto de acceso según la respuesta de la instancia.
- `Validate Request` limita tamaños, perfiles, módulos y dependencias. `answer_key` requiere preguntas y `rubric` requiere evidencia observable.
- `Apply Accessibility Supports` convierte IDs de apoyos en reglas de presentación y no reenvía etiquetas de apoyo al modelo.
- `Build Gemini Request` realiza una llamada única por paquete y lote de perfiles; exige JSON y comunica las dependencias entre explicación, tarea, evaluación, solucionario, rúbrica y guía.
- `Parse Gemini Response` rechaza JSON inválido, perfiles repetidos, módulos extra/faltantes y solucionarios cuyos IDs no coinciden con las preguntas.
- Los nodos `Prepare ... Log` entregan a Google Sheets solo metadatos, no fuentes, prompts, feedback ni artefactos.
- El evento `finalize` no invoca Gemini y exige un ID aprobado por cada perfil del lote.

## Importar y configurar

1. Importar `educational-package-gemini-sheets.template.json` en n8n Cloud y mantenerlo inactivo.
2. En `Validate Request`, configurar `geminiModel`, `googleSheetDocumentId`, `googleSheetName` y `workflowVersion`.
3. En `Prepare Finalization Log`, asignar los mismos valores de Sheets y versión.
4. En `Generation Webhook`, crear Header Auth con nombre `X-TFM-Access-Key` y una clave larga aleatoria; marcar la cabecera como sensible.
5. En `Call Gemini`, crear Header Auth con nombre `x-goog-api-key` y el valor de una API key válida para `generativelanguage.googleapis.com`, sin prefijo `Bearer`, comillas ni espacios. Nunca incluir la clave en nodos, Git, capturas o el frontend. `API_KEY_INVALID` se corrige en esta credencial, no cambiando el modelo.
6. Asignar una credencial Google Sheets OAuth2 con permisos de edición a los nodos `Log ...`.
7. Revisar `Allowed Origins`. Añadir `http://localhost:4173` separado por coma para pruebas locales.
8. Probar con Test URL en escucha y usar Production URL solo tras activar el workflow.
9. Mantener los nodos `Code` en `Run Once for All Items`: la plantilla devuelve listas de items n8n. No usar `Run Once for Each Item`, que espera un objeto `json` por item y falla en `Validate Request`.

En producción, la variable pública de Vite contiene solo la URL de producción:

```bash
VITE_N8N_GENERATE_URL=https://your-n8n.example/webhook/adaptive-educational-package
```

La clave se introduce manualmente en la UI, viaja solo en `X-TFM-Access-Key` y no se guarda. Nunca crear una variable `VITE_` para secretos.

Para pruebas locales puede usarse una `.env.local` ignorada por Git con la Test URL. Esa URL solo funciona para una llamada después de pulsar `Execute workflow` en n8n; no debe desplegarse ni sustituir la URL de producción.

## Contrato de generación

El body sigue `schemas/generation-request.schema.json`:

```json
{
  "requestId": "REQ-001",
  "subject": "Biología",
  "topic": "Genética mendeliana",
  "generalObjective": "Comprender dominancia y recesividad.",
  "durationMinutes": 45,
  "preset": "workshop",
  "requestedMaterials": ["explanation", "workshop", "evaluation_criteria", "rubric", "teacher_guide"],
  "sourceContext": "Declarar supuestos y límites del modelo mendeliano.",
  "generalInstructions": "Usar ejemplos de plantas.",
  "profiles": [
    {
      "id": "P01",
      "name": "Introductorio",
      "course": "8 años",
      "knowledgeLevel": "Inicial",
      "priorKnowledge": "Distingue una característica observable.",
      "specificObjective": "Relacionar progenitores y descendencia en un modelo sencillo.",
      "expectedComplexity": "introductory",
      "accessibilitySupportIds": [],
      "considerations": "Usar pasos breves.",
      "additionalInstructions": ""
    }
  ]
}
```

`requestedMaterials` admite `explanation`, `summary`, `activity`, `workshop`, `exercises`, `quiz`, `short_assessment`, `answer_key`, `evaluation_criteria`, `rubric` y `teacher_guide`.

- Entre uno y seis perfiles y entre uno y seis módulos por llamada.
- Los perfiles usan `expectedComplexity`, nunca `difficulty`.
- `sourceContext` se limita a 12.000 caracteres; instrucciones, feedback y perfiles tienen límites menores.
- El contexto fuente se trata como contenido no confiable y no como instrucciones ejecutables.

## Iteración y cierre

Una iteración reutiliza el `requestId` y envía únicamente los perfiles seleccionados con su versión anterior:

```json
{
  "previousGenerationId": "GEN-001",
  "globalFeedback": "Aclarar la conexión entre actividad y rúbrica.",
  "profiles": [
    {
      "profileId": "P02",
      "previousVersion": 1,
      "feedback": "Añadir un ejemplo guiado.",
      "previousArtifacts": { "...": "versión JSON anterior del perfil" }
    }
  ]
}
```

El workflow asigna `version = previousVersion + 1`; el modelo no controla la versión. La respuesta sigue `schemas/generation-response.schema.json` y devuelve un paquete por perfil con `generationId`, `version`, `status`, `adaptationSummary` y `artifacts`.

El cierre usa el mismo endpoint con `X-TFM-Event: finalize`:

```json
{
  "requestId": "REQ-001",
  "generationId": "GEN-002",
  "profileCount": 3,
  "iterationCount": 1,
  "approvedProfileIds": ["P01", "P02", "P03"]
}
```

Devuelve `202` sin llamar al modelo si el número de IDs aprobados únicos coincide con `profileCount`.

## Hoja de logs

Crear la pestaña con estos encabezados exactos:

```text
loggedAt,outcome,requestId,generationId,profileId,version,provider,model,profileCount,requestedMaterials,preset,latencyMs,httpStatus,providerStatus,errorCode,workflowVersion,approved
```

`profileId` y `version` usan `|` cuando la llamada incluye varios perfiles. `outcome` puede ser `success`, `failed`, `rejected` o `finalized`. No guardar objetos de material, prompts, fuentes, perfiles completos ni feedback en la hoja.

## Respuestas y pruebas

| Situación | HTTP | Código |
|---|---:|---|
| Clave ausente o inválida | 401/403 | Header Auth de n8n; en la instancia de prueba actual se observó 403 |
| Paquete válido | 200 | `GenerationResponse` con `mode: live` |
| Cierre válido | 202 | `FinalizationResponse` |
| Solicitud inválida | 400 | `INVALID_REQUEST` |
| Cierre inválido | 400 | `INVALID_FINALIZATION` |
| Gemini falla o agota cuota | 502/503 | `GEMINI_REQUEST_FAILED` |
| Gemini no devuelve contenido | 502 | `GEMINI_EMPTY_RESPONSE` |
| JSON o dependencias inválidas | 502 | `INVALID_MODEL_OUTPUT` |

Prueba el caso de genética con tres perfiles y preset Taller. Comprueba paquetes diferenciados, rúbrica y guía, una fila de log sin contenido completo, una regeneración solo para un perfil, y un cierre `finalize` que no pase por `Call Gemini`.

Si `Call Gemini` devuelve `400` con `API_KEY_INVALID`, revisar la credencial Header Auth de ese nodo. Si devuelve `404` o un error de modelo no admitido, seleccionar un modelo disponible para esa API key/proyecto; no intercambiar modelos para resolver una clave inválida.

Si Gemini devuelve `503 UNAVAILABLE`, la clave y el modelo ya fueron aceptados, pero el proveedor está temporalmente saturado. Esperar antes de iniciar una nueva ejecución Test; no cambiar credenciales ni modelo por ese código. El workflow conserva la respuesta de error para registrar el intento de forma trazable.

## Límites de seguridad

Header Auth es una clave compartida; no sustituye identidad, rate limiting ni presupuesto. CORS no autentica el endpoint. Antes de abrir el sistema a más usuarios, añadir límites de peticiones, cuota, monitorización y control de acceso por identidad. No enviar datos identificativos, diagnósticos, salud u otra información sensible de estudiantes.
