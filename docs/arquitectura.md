# Arquitectura y estados

## Implementado localmente

```text
React 19 + Material UI → formulario y perfiles editables → contrato interno → generador simulado → tarjetas por perfil → impresión/PDF del navegador
```

El modo actual no envía datos fuera del navegador. La interfaz se compone con estado React y componentes Material UI; sirve para validar el flujo de solicitud, hacer visibles diferencias en el ejemplo y guardar la vista de resultados como PDF mediante la impresión nativa. La exportación solo presenta el material generado, no el formulario de trabajo.

## Arquitectura objetivo

```text
Frontend estático
  → POST autenticado a n8n
  → validar/normalizar contrato
  → cargar reglas y contexto versionados
  → construir prompt por perfil
  → Gemini API
  → validar JSON o devolver error controlado
  → persistir solicitud, versiones, feedback y aprobaciones
  → responder resultado estructurado al frontend
```

El frontend no tendrá claves de Gemini. n8n conserva las credenciales y aplica validación de entrada/salida. La tecnología de persistencia se elegirá después de probar recuperación, versiones, reintentos y límites de tamaño.

## Estados previstos por perfil

```text
draft → generated → needs_revision → approved
```

- `draft`: perfil creado o modificado sin salida vigente.
- `generated`: existe una versión generada que puede revisarse.
- `needs_revision`: hay feedback pendiente de aplicar.
- `approved`: versión aceptada por el docente; no se regenera salvo orden explícita.

Los estados se documentan aquí, pero aún no están implementados ni persistidos.

## Principios

- Contenido estructurado separado de la presentación React/Material UI.
- IDs estables para solicitudes, perfiles, generaciones y versiones.
- Trazabilidad de reglas, modelo, parámetros, prompts y resultados.
- Mensajes de error explícitos; no completar salidas inválidas de forma silenciosa.
- Sin datos identificativos de alumnado en los perfiles de prueba.
