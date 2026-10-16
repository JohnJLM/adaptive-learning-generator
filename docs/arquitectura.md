# Arquitectura y trazabilidad

## Flujo implementado

```text
React 19 + Material UI
  -> solicitud de paquete JSON
  -> generador simulado local o POST autenticado a n8n
  -> resultado JSON por perfil y artefacto
  -> revisión/aprobación/versiones en estado React
  -> impresión HTML/CSS del navegador
```

La UI no conoce credenciales de Gemini y no recibe HTML generado por el modelo. Los componentes React renderizan campos tipados; por tanto, el contenido del modelo se trata como texto y se escapa por defecto.

## Integración objetivo

```text
Frontend estático
  -> POST con X-TFM-Access-Key a n8n
  -> Validate Request
  -> Apply Accessibility Supports
  -> Build Gemini Request
  -> Call Gemini
  -> Parse Gemini Response
  -> logs de metadatos en Google Sheets
  -> JSON response al frontend
```

La plantilla v2 conserva webhook, Header Auth, CORS, validación, llamada a Gemini, parsing, logging y respuesta HTTP. Gemini se usa mediante HTTP Request, por lo que el proveedor puede cambiarse sin trasladar su API al navegador.

## Paquete y dependencias

Cada respuesta contiene un paquete por perfil:

```text
objetivo general + perfil + contexto
  -> explicación/resumen
  -> actividad, taller o preguntas
  -> solucionario y criterios
  -> rúbrica y guía docente
```

La generación es única por lote solicitado. El prompt exige que actividad y evaluación se apoyen en la explicación; que `answer_key` use exactamente los IDs de los ítems de ejercicios/cuestionario/prueba; y que la rúbrica derive del objetivo, perfil y evidencia realmente solicitada. La validación n8n rechaza una salida que no cumpla esas relaciones mínimas.

## Estados por perfil

```text
generated -> needs_revision -> generated
     \-> approved
```

- `generated`: existe una versión para revisar.
- `needs_revision`: el docente ha añadido feedback no vacío.
- `approved`: el docente acepta el perfil. Una iteración normal no puede seleccionarlo; una opción explícita permite hacerlo si se desea modificarlo.

El cierre del paquete requiere que todos los perfiles estén aprobados. No llama al LLM: solo registra los IDs aprobados y metadatos de cierre.

## Iteraciones y versiones

La primera solicitud genera un `requestId` estable y cada llamada del workflow crea un `generationId`. Un perfil incluye además `generationId` y `version` propios. Para una iteración el frontend conserva:

```text
solicitud original + perfil seleccionado + artefactos de la versión anterior
+ feedback global + feedback específico -> nueva versión del perfil
```

El historial mostrado corresponde a la sesión actual. El workflow registra eventos y metadatos, no el contenido completo. Para una evaluación longitudinal A/B/C deberá añadirse una persistencia protegida de inputs, outputs y feedback con retención documentada; Google Sheets no es el almacén de artefactos.

## Log operativo

Cada fila de la plantilla v2 contiene:

```text
loggedAt,outcome,requestId,generationId,profileId,version,provider,model,
profileCount,requestedMaterials,preset,latencyMs,httpStatus,providerStatus,
errorCode,workflowVersion,approved
```

Los campos de perfiles y versiones pueden contener IDs delimitados por `|` porque una llamada representa un lote. No se almacenan fuente, prompt, feedback ni material generado.

## Principios

- Adaptación por perfiles, no solo por curso o edad.
- Contratos JSON explícitos y validables entre capas.
- Catálogo de presets y módulos declarativo.
- Un artefacto de salida no se muestra si no supera validación estructural.
- Revisión humana y aprobación visibles antes de exportar.
- Sin datos identificativos ni diagnósticos de alumnado.
