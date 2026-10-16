# Adaptive Learning Generator

MVP académico para el TFM **Generación de material educativo adaptativo**. No es un formulario que pide texto a un modelo: organiza el trabajo docente en paquetes educativos adaptativos, modulares, revisables y trazables.

El valor del sistema está en la entrada estructurada, los perfiles, la coherencia entre artefactos, la revisión docente y el historial de versiones. Gemini es la primera implementación del proveedor de generación, no una dependencia del frontend.

## Qué implementa el MVP

- Paquetes para `Sesión de clase`, `Taller`, `Evaluación`, `Repaso` o `Personalizado`.
- Catálogo extensible de módulos para alumnado y docente.
- Perfiles con curso, conocimientos previos, nivel de conocimientos, objetivo específico, **complejidad esperada**, consideraciones e instrucciones adicionales.
- Generación diferenciada por perfil, manteniendo tema, contexto y objetivo general.
- Explicación, actividad/taller, ejercicios/cuestionario/evaluación breve, solucionario, criterios, rúbrica y guía docente según la selección.
- Coherencia explícita: el solucionario usa los IDs de los ítems generados; la rúbrica deriva de objetivo, perfil y evidencia solicitada.
- Feedback global y por perfil, aprobación individual y regeneración selectiva sin alterar perfiles aprobados salvo confirmación explícita.
- Historial identificable de generaciones dentro de la sesión del navegador.
- Renderizado React desde JSON tipado e impresión del navegador como PDF. El modelo no genera HTML ni PDF.
- Modo local determinista para comprobar el flujo y los contratos sin usar un proveedor.

## Arquitectura

```text
Frontend React/MUI
  -> JSON request autenticado
  -> webhook n8n
  -> validación + reglas de accesibilidad
  -> una generación coherente de paquete con Gemini
  -> validación JSON + log limpio
  -> JSON response
  -> renderizado React / HTML semántico / impresión-PDF
```

El LLM permanece desacoplado del frontend. La plantilla n8n identifica el proveedor y el modelo en el log, pero el contrato de la aplicación no expone elementos específicos de Gemini.

## Desarrollo local

Requisitos: Node.js 24 o posterior y npm.

```bash
npm install
npm run dev
```

Visita la URL indicada por Vite, normalmente `http://localhost:4173`.

Sin `VITE_N8N_GENERATE_URL`, la aplicación usa generación simulada. No envía información fuera del navegador.

## Integración n8n

1. Importa `workflows/educational-package-gemini-sheets.template.json` en n8n Cloud.
2. Configura Header Auth con el nombre exacto `X-TFM-Access-Key`.
3. Configura la credencial de Gemini en `Call Gemini` y Google Sheets en los nodos de log.
4. Sustituye los valores `REPLACE_WITH_*` de los nodos de configuración.
5. Copia `.env.example` a `.env.local` y asigna únicamente la URL pública del webhook:

```bash
VITE_N8N_GENERATE_URL=https://your-n8n.example/webhook/adaptive-educational-package
```

La clave de acceso se introduce manualmente en la UI, viaja solo en `X-TFM-Access-Key` y no se persiste. No poner claves de Gemini, n8n ni Sheets en variables `VITE_`, Git o plantillas.

## Contratos y catálogo

- `schemas/generation-request.schema.json`: solicitud de paquete, perfiles y contexto de iteración opcional.
- `schemas/generation-response.schema.json`: paquetes por perfil con artefactos tipados, versión y estado.
- `schemas/finalization-*.schema.json`: cierre de una revisión con todos los perfiles aprobados.
- `src/package-catalog.ts`: catálogo declarativo de presets y módulos; es el punto para ampliar el MVP sin modificar el flujo de UI.

Un preset siempre se traduce a `requestedMaterials`, una lista explícita de IDs. La respuesta incluye sus artefactos bajo las mismas claves, por ejemplo `explanation`, `quiz`, `answer_key`, `rubric` y `teacher_guide`.

## Verificación

```bash
npm test
npm run build
```

Las pruebas cubren la expansión de presets, el generador determinista, la relación entre cuestionario y solucionario, el versionado selectivo y el cliente n8n. El build ejecuta TypeScript y genera `dist/`.

## Seguridad y límites

- El payload se limita y valida antes de llamar al proveedor.
- El contexto fuente se trata como contenido no confiable, no como instrucciones para el modelo.
- La salida del modelo se valida como JSON estructurado y React la escapa al renderizar; no se inyecta HTML del modelo.
- Google Sheets registra solo metadatos operativos, no prompts, fuentes, artefactos ni feedback.
- No introducir datos identificativos, diagnósticos ni información sensible de estudiantes.
- La trazabilidad de versiones y feedback se mantiene en la sesión de frontend. La persistencia de artefactos/versiones para análisis longitudinal es una extensión necesaria antes de un estudio con participantes.
- El material es un borrador para revisión docente; no debe utilizarse directamente para evaluar alumnado.

## Documentación

- [Alcance](docs/alcance.md)
- [Arquitectura](docs/arquitectura.md)
- [Decisiones de arquitectura](docs/decisiones-arquitectura.md)
- [Workflow n8n](docs/workflow-n8n.md)
- [Entorno](docs/entorno.md)
- [Apoyos de accesibilidad](docs/accessibility-supports.md)
- [Contratos](schemas/)
