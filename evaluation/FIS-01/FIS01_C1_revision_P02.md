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

### Payload enviado al orquestador desde el frontend para el caso C1 a partir de B1-P02:

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
    }
  ],
  "revision": {
    "previousGenerationId": "GEN-MVKQ03D2",
    "globalFeedback": "",
    "profiles": [
      {
        "profileId": "P02",
        "previousVersion": 1,
        "feedback": "Amplía el material del perfil P02 — Consolidación.\n\n1. Incorpora un ejemplo numérico completamente resuelto del recorrido, mostrando el cálculo de la distancia total, el desplazamiento, la rapidez media y la velocidad media, con unidades y convenio de signos.\n2. Explica claramente por qué la rapidez media es 2 m/s y la velocidad media es aproximadamente +0,67 m/s.\n3. Amplía la rúbrica para evaluar explícitamente la distinción entre ambas magnitudes y la justificación de los cálculos.\n4. Mantén la coherencia entre explicación, taller, criterios de evaluación, rúbrica y guía docente.\n5. Conserva el nivel intermedio y los objetivos pedagógicos originales del perfil.\n\nLa revisión debe afectar exclusivamente a P02. No solicito modificaciones a P01 ni P03.",
        "previousArtifacts": {
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
      }
    ]
  }
}

```

### De dicho payload hemos obtenido esta respuesta del orquestador n8n para C1:

```
{
    "requestId": "136ca9ee-3156-43ee-a0f0-ba897d9e8e19",
    "generationId": "GEN-MVKSEENP",
    "mode": "live",
    "generatedAt": "2026-10-23T09:48:07.477Z",
    "title": "Interpretación y cálculo en el movimiento rectilíneo",
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
            "profileId": "P02",
            "profileName": "Consolidación",
            "generationId": "GEN-MVKSEENP",
            "version": 2,
            "status": "generated",
            "adaptationSummary": "Paquete adaptado para el perfil de consolidación (4.º ESO), que incluye explicaciones detalladas con un ejemplo numérico completo y resuelto paso a paso para distinguir entre rapidez media y velocidad media, un taller aplicado, criterios específicos y rúbrica ampliada.",
            "artifacts": {
                "explanation": {
                    "title": "Magnitudes cinemáticas en un movimiento rectilíneo: Rapidez y Velocidad",
                    "introduction": "Para caracterizar cuantitativamente un movimiento rectilíneo, es fundamental distinguir entre aquellas magnitudes que solo consideran la longitud del camino recorrido y aquellas que tienen en cuenta la posición inicial y final mediante un convenio de signos.",
                    "sections": [
                        {
                            "heading": "Convenio de signos y posiciones en el eje horizontal",
                            "content": "Tomamos un eje horizontal donde el sentido hacia el este es positivo. Las posiciones del móvil son: en t = 0 s, x = 0 m; en t = 60 s, x = +120 m; y en t = 90 s, x = +60 m. Durante el intervalo de 0 a 60 s el movimiento es uniforme hacia el este, y de 60 a 90 s regresa uniformemente hacia el oeste."
                        },
                        {
                            "heading": "Ejemplo numérico resuelto del recorrido completo",
                            "content": "Para el intervalo total de 0 a 90 s, realizamos los siguientes cálculos:\n1. Distancia total recorrida (d): El móvil avanza 120 m hacia el este y luego retrocede 60 m hacia el oeste. La distancia total es la suma de los tramos: d = 120 m + 60 m = 180 m.\n2. Desplazamiento total (Δx): Es la posición final menos la posición inicial: Δx = x_final - x_inicial = 60 m - 0 m = +60 m (el signo positivo indica que globalmente se encuentra al este del origen).\n3. Rapidez media (v_m): Se define como la distancia total dividida entre el tiempo total. v_m = 180 m / 90 s = 2 m/s.\n4. Velocidad media (v_vect_m): Se define como el desplazamiento total dividido entre el tiempo total, conservando el signo del desplazamiento. v_vect_m = +60 m / 90 s = +0,67 m/s."
                        },
                        {
                            "heading": "Diferencia fundamental entre rapidez media y velocidad media",
                            "content": "La rapidez media es una magnitud escalar (2 m/s) que mide cuán rápido se movió el objeto sin importar la dirección. La velocidad media es una magnitud con componente vectorial (+0,67 m/s), donde el signo positivo refleja que el resultado neto del desplazamiento apunta hacia el este a pesar de haber retrocedido."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de cálculo y análisis cinemático",
                    "instructions": [
                        "Revisa los datos del enunciado: posiciones x=0 m en t=0 s, x=+120 m en t=60 s y x=+60 m en t=90 s.",
                        "Determina el desplazamiento total del móvil entre t=0 s y t=90 s aplicando la fórmula de posición final menos inicial.",
                        "Calcula la distancia total recorrida considerando la suma de los tramos de ida y de regreso.",
                        "Calcula la rapidez media y la velocidad media para el intervalo completo de 0 a 90 segundos, expresando los resultados con sus respectivas unidades y justificando el uso del signo en la velocidad media."
                    ],
                    "expectedEvidence": "Memoria de cálculo detallada que incluya por separado la obtención de la distancia total, el desplazamiento, la rapidez media (2 m/s) y la velocidad media (+0,67 m/s), con uso correcto de unidades y explicación de los signos.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Consolidación)",
                    "criteria": [
                        {
                            "criterion": "Cálculo e interpretación de magnitudes cinemáticas",
                            "description": "Calcula de forma correcta y justificada la distancia total, el desplazamiento, la rapidez media y la velocidad media a partir de los datos de posición y tiempo."
                        },
                        {
                            "criterion": "Uso riguroso de unidades y convenio de signos",
                            "description": "Aplica adecuadamente las unidades del Sistema Internacional y utiliza correctamente el signo algebraico para diferenciar el carácter escalar de la rapidez y vectorial de la velocidad."
                        },
                        {
                            "criterion": "Distinción conceptual",
                            "description": "Explica con claridad la diferencia entre distancia y desplazamiento, así como entre rapidez media y velocidad media."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P02",
                    "evidenceExpected": "Memoria de cálculo detallada con resultados de rapidez y velocidad medias, acompañada de una breve justificación conceptual.",
                    "criteria": [
                        {
                            "criterion": "Cálculos cinemáticos y numéricos",
                            "description": "Precisión en el cálculo de distancias (180 m), desplazamientos (+60 m), rapidez media (2 m/s) y velocidad media (+0,67 m/s).",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Calcula erróneamente alguna de las magnitudes o comete errores aritméticos en los tramos de ida y vuelta."
                                },
                                {
                                    "label": "Consolidado",
                                    "description": "Resuelve correctamente todos los cálculos numéricos mostrando claramente el proceso seguido."
                                }
                            ]
                        },
                        {
                            "criterion": "Uso de unidades y convenio de signos",
                            "description": "Aplicación correcta de unidades métricas y temporales, y justificación del signo positivo en la velocidad media.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Omiten unidades o no justifican el uso del signo positivo/negativo en las magnitudes cinemáticas."
                                },
                                {
                                    "label": "Consolidado",
                                    "description": "Utiliza consistentemente las unidades del SI y explica de manera lógica el significado del signo en la velocidad media."
                                }
                            ]
                        },
                        {
                            "criterion": "Distinción conceptual entre rapidez y velocidad",
                            "description": "Diferenciación explícita entre la rapidez media (magnitud escalar) y la velocidad media.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Confunde rapidez media con el módulo de la velocidad media o considera que son conceptos sinónimos."
                                },
                                {
                                    "label": "Consolidado",
                                    "description": "Distingue claramente ambas magnitudes, argumentando por qué difieren numéricamente en este recorrido."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para P02",
                    "overview": "Enfoque intermedio orientado a la aplicación rigurosa de fórmulas cinemáticas, el cálculo justificado de tramos y la diferenciación conceptual entre magnitudes escalares (rapidez) y vectoriales (velocidad con signo).",
                    "sequence": [
                        {
                            "step": "Paso 1",
                            "description": "Revisar los conceptos de posición, distancia total y desplazamiento utilizando los datos del enunciado y el convenio de ejes."
                        },
                        {
                            "step": "Paso 2",
                            "description": "Analizar en plenaria el ejemplo numérico resuelto, enfatizando por qué la distancia es 180 m y el desplazamiento es +60 m."
                        },
                        {
                            "step": "Paso 3",
                            "description": "Guiar al alumnado en la resolución del taller, supervisando el cálculo de la rapidez media (2 m/s) y la velocidad media (+0,67 m/s)."
                        },
                        {
                            "step": "Paso 4",
                            "description": "Evaluar mediante la rúbrica, verificando que el alumnado justifique adecuadamente los resultados y evite confundir rapidez con velocidad."
                        }
                    ],
                    "reviewNotes": "Asegurar que el alumnado no confunda rapidez media con el valor absoluto de la velocidad media y comprobar que se detallen las unidades en cada paso del cálculo."
                }
            }
        }
    ]
}
```
