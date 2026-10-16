# Apoyos de accesibilidad v1

## Propósito y límite

Este catálogo permite que el docente seleccione **apoyos de accesibilidad para un material**. No registra una discapacidad, un diagnóstico, una necesidad médica ni una identidad del estudiante. No debe utilizarse para inferir condiciones personales ni para sustituir una valoración profesional o la decisión docente.

La selección se envía como identificadores técnicos por perfil y el workflow n8n los convierte en reglas de generación. La vista de resultados muestra los apoyos **solicitados** con la petición original; esa trazabilidad no demuestra por sí sola que el modelo haya seguido cada regla. El historial operativo no debe guardar nombres de estudiantes, informes ni explicaciones clínicas.

## Catálogo

| ID | Apoyo seleccionado | Reglas de generación |
|---|---|---|
| `plain_language` | Lenguaje claro y fragmentado | Usar frases directas, una idea principal por bloque, vocabulario definido antes de utilizarlo y evitar ambigüedades innecesarias. |
| `reading_support` | Apoyo a lectura y decodificación | Mantener estructura predecible, títulos informativos, términos definidos, instrucciones breves y ejemplos antes de la práctica autónoma. |
| `visual_access` | Acceso visual no dependiente de imágenes | Expresar en texto la información esencial de diagramas, gráficas, colores, iconos, posición o relación espacial. No decir solo “observa la imagen”. |
| `hearing_access` | Acceso sin depender de audio | Presentar por escrito toda información esencial y no requerir escuchar una explicación, señal o recurso sonoro para completar la actividad. |
| `motor_keyboard_access` | Acceso motor y por teclado | No exigir escritura extensa, arrastre, precisión manual, copia repetitiva o velocidad si no son el objetivo de aprendizaje. Proponer una alternativa equivalente. |
| `executive_function_support` | Apoyo a planificación y atención | Separar la tarea en pasos numerados, indicar tiempo orientativo, materiales necesarios, criterio de finalización y una comprobación al cerrar cada paso. |
| `multiple_expression_options` | Opciones de expresión de la respuesta | Cuando sea compatible con el objetivo, permitir alternativas equivalentes: respuesta breve, selección razonada, esquema estructurado o explicación oral registrada por un adulto autorizado. |

## Cómo se combinan

- Los apoyos se acumulan, pero el modelo debe resolver conflictos con la instrucción más accesible que mantenga el objetivo didáctico.
- No se reduce el rigor conceptual solo por seleccionar un apoyo. Se ajusta la presentación, el andamiaje, el modo de acceso o de respuesta.
- Si el objetivo evalúa específicamente una habilidad, por ejemplo redactar o interpretar una gráfica, no se elimina esa habilidad: se aclara qué parte es el objetivo y qué apoyos son compatibles.
- La solicitud visible debe conservar los apoyos seleccionados y la salida debe explicar brevemente los ajustes realizados para que el docente pueda contrastarlos. La revisión humana sigue siendo necesaria.

## Uso responsable

- Seleccionar solo apoyos conocidos y pertinentes para ese material, no etiquetas clínicas.
- Revisar el resultado antes de entregarlo: una regla textual no garantiza accesibilidad efectiva en todos los formatos o para todas las personas.
- No afirmar que el material cumple una norma, un plan individualizado o una adaptación curricular sin revisión competente.
- Antes de evaluar el sistema, contrastar el catálogo con una persona con experiencia docente y de accesibilidad.

## Referencias de orientación

- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/): referencia para accesibilidad de contenido web; no certifica por sí sola la adecuación didáctica del material.
- CAST, [Universal Design for Learning Guidelines](https://udlguidelines.cast.org/): marco para diseñar múltiples medios de implicación, representación y acción/expresión.
