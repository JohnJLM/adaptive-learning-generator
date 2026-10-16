# Decisiones de arquitectura

## Una llamada coherente por paquete

Se elige una única llamada al LLM por paquete y lote de perfiles, en lugar de una llamada independiente por artefacto. Así explicación, actividad, preguntas, solucionario, rúbrica y guía reciben el mismo objetivo, contexto y perfiles. Reduce coste y coordinación en el MVP.

La plantilla limita el lote a seis perfiles y seis módulos para controlar tamaño y latencia. Si una evaluación real muestra cortes por límite de salida, la siguiente evolución será una generación por fases con contexto de artefactos previos, no llamadas independientes sin dependencias.

## Regeneración selectiva

Una iteración envía únicamente los perfiles seleccionados, con la versión anterior de sus artefactos y su feedback. Los perfiles aprobados están protegidos por defecto. Esto evita sobrescrituras silenciosas y permite atribuir una nueva versión a un perfil concreto.

## JSON, no HTML

El modelo produce JSON estructurado. React crea la presentación y el navegador genera el PDF desde HTML/CSS con `@media print`. La separación impide que una salida del modelo controle el marcado, facilita validar los contratos y permite cambiar el estilo sin cambiar prompts.

## Presets declarativos

`src/package-catalog.ts` contiene los presets y módulos iniciales. Los presets se expanden a una lista explícita de IDs antes de generar. Añadir un módulo exige ampliar el catálogo, los tipos, el schema, el renderer y la validación del workflow, sin reescribir el flujo principal.

## Google Sheets como log, no como repositorio

Sheets registra metadatos operativos y de trazabilidad, no objetos de contenido. Evita filas difíciles de analizar y minimiza exposición de contexto o feedback. La persistencia de artefactos para estudios A/B/C se mantiene fuera de este MVP hasta definir retención, acceso y protección de datos.
