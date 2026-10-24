## Resultados para evaluación A/B/C

### Payload enviado al orquestador desde el frontend para el caso B1:

```
{
  "requestId": "136ca9ee-3156-43ee-a0f0-ba897d9e8e19",
  "subject": "Física y Química",
  "topicKey": "motion",
  "topic": "Movimiento rectilíneo: distancia, desplazamiento, rapidez y velocidad medias",
  "generalObjective": "Interpretar un movimiento rectilíneo mediante posiciones, tiempos y magnitudes cinemáticas, adaptando el razonamiento, los apoyos y la evaluación al perfil pedagógico.",
  "durationMinutes": 45,
  "preset": "workshop",
  "requestedMaterials": [
    "explanation",
    "workshop",
    "evaluation_criteria",
    "rubric",
    "teacher_guide"
  ],
  "sourceContext": "FICHA DIDÁCTICA EXPERIMENTAL FIS-01 (elaboración propia, no fuente curricular externa). Situación única para todos los perfiles: un móvil se desplaza en línea recta sobre un eje horizontal. El sentido positivo del eje apunta hacia el este. Posiciones medidas respecto del origen: a los 0 s, x=0 m; a los 60 s, x=+120 m; a los 90 s, x=+60 m. Durante el intervalo 0-60 s el movimiento es uniforme; durante 60-90 s regresa con movimiento uniforme. El cambio de sentido en t=60 s se considera instantáneo únicamente como idealización del modelo. La distancia recorrida es la longitud total del camino; el desplazamiento es posición final menos inicial. La rapidez media se define como distancia total/tiempo total. La velocidad media en el eje se define como desplazamiento/tiempo total; su signo expresa el sentido. Cuando se soliciten representaciones, facilitar una descripción textual suficiente y no remitir a gráficas, tablas, imágenes, enunciados o ejemplos que no estén realmente incluidos. No atribuir al móvil aceleración constante en los tramos, ni confundir rapidez media con velocidad media.",
  "generalInstructions": "Cada actividad debe ser autosuficiente: todos los datos, esquemas descritos y materiales necesarios aparecen en el paquete. Mantener consistencia entre explicación, taller, criterios, rúbrica y guía.",
  "profiles": [
    {
      "id": "P01",
      "name": "Acceso inicial",
      "course": "1.º ESO · progresión experimental",
      "knowledgeLevel": "Inicial",
      "priorKnowledge": "Lee números enteros sencillos, interpreta segundos y metros; no se presuponen fórmulas de cinemática.",
      "specificObjective": "Describir con palabras los dos tramos y distinguir trayectoria recorrida y posición final con ayuda explícita.",
      "expectedComplexity": "introductory",
      "accessibilitySupportIds": ["visual_access"],
      "considerations": "Lenguaje claro, consignas breves y numeradas, referencias textuales completas a las posiciones y un ejemplo resuelto de lectura de datos; nunca exigir leer una imagen o un código de color.",
      "additionalInstructions": "Evitar derivadas, gráficas imprescindibles y cálculos avanzados. No inferir diagnósticos del curso."
    },
    {
      "id": "P02",
      "name": "Consolidación",
      "course": "4.º ESO · progresión experimental",
      "knowledgeLevel": "Intermedio",
      "priorKnowledge": "Maneja divisiones sencillas, unidades de longitud y tiempo, y entiende signos positivo y negativo.",
      "specificObjective": "Calcular e interpretar la distancia total, el desplazamiento, la rapidez media y la velocidad media del recorrido.",
      "expectedComplexity": "intermediate",
      "accessibilitySupportIds": [],
      "considerations": "Incluir cálculos justificados con unidades y una comparación explícita entre rapidez media y velocidad media; reducir el andamiaje respecto a P01.",
      "additionalInstructions": "Diferenciar magnitud escalar y velocidad con signo, y declarar el convenio del eje."
    },
    {
      "id": "P03",
      "name": "Análisis y transferencia",
      "course": "2.º Bachillerato · progresión experimental",
      "knowledgeLevel": "Avanzado",
      "priorKnowledge": "Dominio de álgebra elemental, funciones a trozos y significado de pendiente en un gráfico posición-tiempo.",
      "specificObjective": "Formular e interpretar la función de posición por tramos, comparar pendientes y discutir límites de la inversión instantánea de sentido.",
      "expectedComplexity": "advanced",
      "accessibilitySupportIds": [],
      "considerations": "Exigir argumentación matemática y física, signos y unidades, explicación de la discontinuidad idealizada de velocidad al cambiar de sentido y contraste con el movimiento real.",
      "additionalInstructions": "No exigir aceleración uniforme en cada tramo ni tratar como físicamente realista una inversión instantánea del sentido."
    }
  ]
}
```

### De dicho payload hemos obtenido esta respuesta del orquestador n8n para B1:

```
{
    "requestId": "136ca9ee-3156-43ee-a0f0-ba897d9e8e19",
    "generationId": "GEN-MVKQ03D2",
    "mode": "live",
    "generatedAt": "2026-10-23T08:41:00.422Z",
    "title": "Movimiento rectilíneo: distancia, desplazamiento, rapidez y velocidad medias",
    "generalObjective": "Interpretar un movimiento rectilíneo mediante posiciones, tiempos y magnitudes cinemáticas, adaptando el razonamiento, los apoyos y la evaluación al perfil pedagógico.",
    "preset": "workshop",
    "requestedMaterials": [
        "explanation",
        "workshop",
        "evaluation_criteria",
        "rubric",
        "teacher_guide"
    ],
    "materials": [
        {
            "profileId": "P01",
            "profileName": "Acceso inicial",
            "generationId": "GEN-MVKQ03D2",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para acceso inicial: lenguaje muy sencillo, explicaciones paso a paso sin fórmulas complejas, uso de descripciones textuales de las posiciones y un ejemplo resuelto completo.",
            "artifacts": {
                "explanation": {
                    "title": "Entendiendo el movimiento y las posiciones",
                    "introduction": "Imagina que un objeto se mueve sobre una línea recta. Vamos a estudiar dónde está, cuánto camino recorre y cuánto tiempo tarda en hacerlo.",
                    "sections": [
                        {
                            "heading": "Los datos del viaje",
                            "content": "Supongamos una línea recta donde el punto de salida es el cero (0 m). El este es la dirección positiva. Los datos del movimiento son: a los 0 segundos, el objeto está en el origen (0 m); a los 60 segundos, avanza hacia el este y llega hasta la marca de 120 metros; a los 90 segundos, retrocede y se sitúa en la marca de 60 metros."
                        },
                        {
                            "heading": "Distancia y desplazamiento",
                            "content": "La distancia recorrida es todo el camino que recorre el objeto sumando la ida y la vuelta. El desplazamiento es simplemente mirar dónde empezó y dónde terminó, sin importar el camino que haya dado."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller guiado de movimiento",
                    "instructions": [
                        "Lee atentamente los datos del texto: salida en 0 metros, llegada a 120 metros en el minuto 60, y retroceso hasta 60 metros en el minuto 90.",
                        "Responde con tus propias palabras: ¿hacia dónde se movió el objeto en el primer tramo y hacia dónde en el segundo?",
                        "Calcula la distancia total sumando los metros recorridos al avanzar y los metros recorridos al retroceder."
                    ],
                    "expectedEvidence": "Identificación correcta de las posiciones inicial y final, y descripción en texto de los dos tramos del movimiento.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Acceso inicial)",
                    "criteria": [
                        {
                            "criterion": "Identificación de posiciones",
                            "description": "Reconoce correctamente los datos de posición y tiempo dados en el texto."
                        },
                        {
                            "criterion": "Distinción básica",
                            "description": "Diferencia con ayuda el avance del retroceso en la línea recta."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P01",
                    "evidenceExpected": "Respuestas claras sobre los tramos y la distancia total descrita.",
                    "criteria": [
                        {
                            "criterion": "Comprensión del movimiento",
                            "description": "Capacidad para describir los cambios de posición a lo largo del tiempo.",
                            "levels": [
                                {
                                    "label": "Inicial",
                                    "description": "Identifica con dificultad los datos de posición y tiempo."
                                },
                                {
                                    "label": "Adecuado",
                                    "description": "Describe correctamente los tramos y las posiciones descritas."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para P01",
                    "overview": "Guía introductoria centrada en la comprensión lectora de datos cinemáticos sencillos y diferenciación cualitativa.",
                    "sequence": [
                        {
                            "step": "Paso 1",
                            "description": "Leer en conjunto los datos de posición y tiempo."
                        },
                        {
                            "step": "Paso 2",
                            "description": "Realizar la actividad de descripción de tramos de forma guiada."
                        }
                    ],
                    "reviewNotes": "Verificar que el estudiante comprende qué significa un avance y un retroceso sobre la línea."
                }
            }
        },
        {
            "profileId": "P02",
            "profileName": "Consolidación",
            "generationId": "GEN-MVKQ03D2",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para consolidación: cálculo de magnitudes cinemáticas (rapidez media y velocidad media), uso explícito de unidades, y distinción clara entre magnitudes escalares y vectoriales.",
            "artifacts": {
                "explanation": {
                    "title": "Magnitudes cinemáticas en un movimiento rectilíneo",
                    "introduction": "Para caracterizar cuantitativamente un movimiento, utilizamos el espacio recorrido, el tiempo transcurrido y las magnitudes derivadas como la rapidez y la velocidad medias.",
                    "sections": [
                        {
                            "heading": "Convenio de signos y posiciones",
                            "content": "Tomamos un eje horizontal donde el sentido hacia el este es positivo. Las posiciones son: t=0 s, x=0 m; t=60 s, x=+120 m; t=90 s, x=+60 m."
                        },
                        {
                            "heading": "Rapidez media versus velocidad media",
                            "content": "La rapidez media se calcula como la distancia total dividida entre el tiempo total (magnitud escalar). La velocidad media es el cociente entre el desplazamiento total (posición final menos inicial) y el tiempo total, incluyendo el signo que indica la dirección."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de cálculo cinemático",
                    "instructions": [
                        "Determina el desplazamiento total del móvil entre t=0 s y t=90 s.",
                        "Calcula la distancia total recorrida considerando la ida hasta +120 m y el regreso hasta +60 m.",
                        "Calcula la rapidez media y la velocidad media para el intervalo completo de 0 a 90 segundos, indicando unidades y justificando los signos."
                    ],
                    "expectedEvidence": "Resolución numérica correcta de distancia, desplazamiento, rapidez media y velocidad media con sus respectivas unidades.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Consolidación)",
                    "criteria": [
                        {
                            "criterion": "Cálculo de magnitudes",
                            "description": "Calcula correctamente distancia, desplazamiento, rapidez media y velocidad media."
                        },
                        {
                            "criterion": "Uso de unidades y signos",
                            "description": "Aplica adecuadamente las unidades del SI y el convenio de signos para la dirección."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P02",
                    "evidenceExpected": "Memoria de cálculo detallada con resultados de rapidez y velocidad medias.",
                    "criteria": [
                        {
                            "criterion": "Cálculos cinemáticos",
                            "description": "Precisión en el cálculo de distancias, desplazamientos y velocidades medias.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Calcula erróneamente alguna de las magnitudes o confunde rapidez y velocidad."
                                },
                                {
                                    "label": "Consolidado",
                                    "description": "Resuelve correctamente todos los cálculos y distingue claramente rapidez y velocidad."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para P02",
                    "overview": "Enfoque intermedio orientado a la aplicación de fórmulas cinemáticas y diferenciación entre magnitudes escalares y vectoriales.",
                    "sequence": [
                        {
                            "step": "Paso 1",
                            "description": "Revisar el concepto de desplazamiento y distancia total con los datos del enunciado."
                        },
                        {
                            "step": "Paso 2",
                            "description": "Resolver los cálculos de rapidez y velocidad media guiando en el uso del signo."
                        }
                    ],
                    "reviewNotes": "Asegurar que el alumnado no confunda rapidez media con el módulo de la velocidad media."
                }
            }
        },
        {
            "profileId": "P03",
            "profileName": "Análisis y transferencia",
            "generationId": "GEN-MVKQ03D2",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para análisis y transferencia: formulación por tramos, discusión de la idealización del cambio instantáneo de sentido y análisis crítico de los límites del modelo.",
            "artifacts": {
                "explanation": {
                    "title": "Análisis avanzado del movimiento rectilíneo por tramos",
                    "introduction": "El estudio riguroso de la cinemática requiere la formalización matemática del movimiento mediante funciones de posición y la evaluación crítica de las idealizaciones del modelo físico.",
                    "sections": [
                        {
                            "heading": "Función de posición por tramos",
                            "content": "Definimos x(t) para los intervalos [0, 60] s y [60, 90] s. En el primer tramo, la velocidad es constante y positiva. En el segundo tramo, el objeto regresa con velocidad constante negativa."
                        },
                        {
                            "heading": "Limitaciones del modelo idealizado",
                            "content": "El cambio instantáneo de sentido en t=60 s implica una discontinuidad matemática en la velocidad que requeriría una aceleración infinita. En la realidad física, este cambio requiere un intervalo de frenado y aceleración."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de análisis y modelización",
                    "instructions": [
                        "Escribe las expresiones analíticas de la posición x(t) para cada uno de los dos tramos del movimiento.",
                        "Calcula las velocidades instantáneas (o las pendientes) en cada tramo y contrasta su significado con la velocidad media global del recorrido.",
                        "Discute de forma razonada por qué la hipótesis de un cambio de sentido instantáneo es una idealización matemática y cuáles serían las implicaciones físicas reales."
                    ],
                    "expectedEvidence": "Funciones de posición por tramos, cálculo formal de velocidades y argumentación crítica sobre las limitaciones del modelo idealizado.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Análisis y transferencia)",
                    "criteria": [
                        {
                            "criterion": "Formalización matemática",
                            "description": "Modela correctamente el movimiento mediante funciones de posición por tramos."
                        },
                        {
                            "criterion": "Discusión crítica",
                            "description": "Argumenta sobre las limitaciones del modelo idealizado y el significado de la inversión instantánea."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P03",
                    "evidenceExpected": "Informe analítico con ecuaciones de posición, cálculo de pendientes y discusión crítica.",
                    "criteria": [
                        {
                            "criterion": "Modelización y análisis",
                            "description": "Rigurosidad en la formulación matemática y profundidad en la discusión física del modelo.",
                            "levels": [
                                {
                                    "label": "Parcial",
                                    "description": "Plantea las ecuaciones pero omite la discusión crítica sobre las limitaciones del modelo."
                                },
                                {
                                    "label": "Avanzado",
                                    "description": "Modela con precisión y analiza críticamente las idealizaciones físicas del movimiento."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para P03",
                    "overview": "Enfoque avanzado para bachillerato que vincula la cinemática experimental con el análisis funcional y la reflexión epistemológica sobre los modelos físicos.",
                    "sequence": [
                        {
                            "step": "Paso 1",
                            "description": "Plantear la construcción de las funciones de posición a partir de los datos."
                        },
                        {
                            "step": "Paso 2",
                            "description": "Debatir las implicaciones de la discontinuidad de velocidad en t=60 s frente a situaciones reales."
                        }
                    ],
                    "reviewNotes": "Evaluar la capacidad crítica del alumnado más allá del cálculo puramente algorítmico."
                }
            }
        }
    ]
}
```
