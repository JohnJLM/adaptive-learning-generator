## Resultados para evaluación A/B/C

### Payload enviado al orquestador desde el frontend para el caso B2:

```
{
  "requestId": "a621cfbf-566b-45d3-8cac-99b273633794",
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

### De dicho payload hemos obtenido esta respuesta del orquestador n8n para B2:

```
{
    "requestId": "a621cfbf-566b-45d3-8cac-99b273633794",
    "generationId": "GEN-MVKT0CB6",
    "mode": "live",
    "generatedAt": "2026-10-23T10:05:10.866Z",
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
            "generationId": "GEN-MVKT0CB6",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para acceso inicial (1.º ESO): lenguaje muy accesible, explicaciones guiadas paso a paso con datos explícitos del movimiento, sin fórmulas complejas, enfocándose en la distinción cualitativa entre trayectoria y posición final.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación Guiada: El Viaje del Móvil en Línea Recta",
                    "introduction": "Vamos a estudiar cómo se mueve un objeto en línea recta. Imagina una línea recta orientada hacia el este. Todo lo medimos desde un punto de partida llamado origen (0 metros).",
                    "sections": [
                        {
                            "heading": "Paso 1: Qué significan las posiciones y los tiempos",
                            "content": "Tenemos un móvil que se registra en tres momentos: \n- A los 0 segundos, está en el origen (x = 0 m).\n- A los 60 segundos, avanza hacia el este y llega hasta la posición x = +120 m.\n- A los 90 segundos, regresa hacia atrás y se sitúa en la posición x = +60 m."
                        },
                        {
                            "heading": "Paso 2: Distancia recorrida frente a desplazamiento",
                            "content": "La distancia recorrida es la longitud total del camino que recorren las ruedas o el objeto, sin importar si va o viene (primero va de 0 a 120 metros, y luego regresa 60 metros). El desplazamiento, en cambio, solo mira dónde empezó y dónde terminó: posición final menos posición inicial."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller Práctico: Describiendo el Viaje",
                    "instructions": [
                        "Lee atentamente los datos de las posiciones: a los 0 s está en 0 m; a los 60 s está en +120 m; a los 90 s está en +60 m.",
                        "Responde por escrito: ¿En qué dirección se mueve el móvil durante los primeros 60 segundos?",
                        "Responde por escrito: ¿Qué ocurre con la posición del móvil entre el segundo 60 y el segundo 90?",
                        "Explica con tus propias palabras qué diferencia hay entre el camino total que recorre el móvil y su posición final al terminar el viaje a los 90 segundos."
                    ],
                    "expectedEvidence": "Respuestas redactadas describiendo correctamente el avance y retroceso del móvil a partir de los datos numéricos proporcionados.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de Evaluación - Acceso Inicial",
                    "criteria": [
                        {
                            "criterion": "Comprensión de los datos temporales y espaciales",
                            "description": "Interpreta correctamente las posiciones del móvil asociadas a cada instante de tiempo indicado en el texto."
                        },
                        {
                            "criterion": "Distinción cualitativa de trayectoria y posición final",
                            "description": "Diferencia de forma intuitiva el camino total recorrido respecto a la ubicación final del objeto."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de Evaluación - P01",
                    "evidenceExpected": "Descripción escrita de los tramos del movimiento y diferenciación básica de distancia y posición final.",
                    "criteria": [
                        {
                            "criterion": "Lectura e interpretación de posiciones",
                            "description": "Capacidad para identificar dónde está el móvil en cada instante.",
                            "levels": [
                                {
                                    "label": "Logrado",
                                    "description": "Identifica claramente las posiciones para 0 s, 60 s y 90 s."
                                },
                                {
                                    "label": "En proceso",
                                    "description": "Confunde algún valor de posición o tiempo."
                                },
                                {
                                    "label": "No logrado",
                                    "description": "No logra relacionar los tiempos con sus respectivas posiciones."
                                }
                            ]
                        },
                        {
                            "criterion": "Distinción de distancia y posición final",
                            "description": "Diferencia el camino recorrido del punto final.",
                            "levels": [
                                {
                                    "label": "Logrado",
                                    "description": "Explica correctamente que el móvil fue y volvió, distinguiendo el trayecto de la posición final."
                                },
                                {
                                    "label": "En proceso",
                                    "description": "Confunde distancia recorrida con desplazamiento final."
                                },
                                {
                                    "label": "No logrado",
                                    "description": "No muestra comprensión de la trayectoria ni del desplazamiento."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía del Docente - P01",
                    "overview": "Paquete diseñado para estudiantes de 1.º ESO con nivel inicial. Se centra en la lectura guiada de datos numéricos y conceptos cualitativos de cinemática sin uso de fórmulas avanzadas.",
                    "sequence": [
                        {
                            "step": "Introducción",
                            "description": "Presentar el escenario horizontal y explicar el convenio del eje hacia el este."
                        },
                        {
                            "step": "Desarrollo",
                            "description": "Guiar a los alumnos en la lectura de los tres instantes de tiempo y sus posiciones."
                        },
                        {
                            "step": "Cierre",
                            "description": "Resolver colectivamente las dudas sobre el cambio de sentido del móvil en t = 60 s."
                        }
                    ],
                    "reviewNotes": "Verificar que el alumnado no confunda los signos ni requiera herramientas gráficas complejas."
                }
            }
        },
        {
            "profileId": "P02",
            "profileName": "Consolidación",
            "generationId": "GEN-MVKT0CB6",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para consolidación (4.º ESO): inclusión de cálculos numéricos con unidades, distinción clara entre magnitudes escalares (distancia, rapidez media) y vectoriales (desplazamiento, velocidad media), estableciendo explícitamente el convenio del eje.",
            "artifacts": {
                "explanation": {
                    "title": "Magnitudes Cinemáticas en el Movimiento Rectilíneo",
                    "introduction": "Analizamos un movimiento sobre un eje horizontal donde el sentido positivo apunta hacia el este. Las posiciones se miden respecto al origen x = 0 m.",
                    "sections": [
                        {
                            "heading": "Definiciones y Cálculos Fundamentales",
                            "content": "Datos del recorrido:\n- En t = 0 s, x = 0 m.\n- En t = 60 s, x = +120 m (movimiento uniforme hacia el este).\n- En t = 90 s, x = +60 m (regreso uniforme hacia el oeste).\n\nDistancia total: Suma de la longitud de todos los tramos recorridos (120 m de ida y 60 m de vuelta = 180 m).\nDesplazamiento total: Posición final menos posición inicial (60 m - 0 m = +60 m)."
                        },
                        {
                            "heading": "Rapidez Media y Velocidad Media",
                            "content": "La rapidez media se calcula como la distancia total dividida entre el tiempo total (180 m / 90 s = 2 m/s). La velocidad media es el desplazamiento total dividido entre el tiempo total (+60 m / 90 s = +0,67 m/s). El signo positivo de la velocidad media indica que el resultado neto del desplazamiento apunta hacia el este."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de Cálculo Cinemático",
                    "instructions": [
                        "Calcula la distancia total recorrida por el móvil durante los 90 segundos de viaje, justificando cada tramo.",
                        "Calcula el desplazamiento total del móvil entre el instante inicial y los 90 segundos.",
                        "Determina la rapidez media del móvil para todo el intervalo de tiempo, indicando las unidades correctas.",
                        "Determina la velocidad media del móvil para todo el intervalo, explicando qué significa el signo obtenido según el convenio del eje."
                    ],
                    "expectedEvidence": "Cálculos numéricos detallados con unidades correctas para distancia, desplazamiento, rapidez media y velocidad media, acompañados de una breve interpretación de los resultados.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de Evaluación - Consolidación",
                    "criteria": [
                        {
                            "criterion": "Cálculo de magnitudes escalares y vectoriales",
                            "description": "Calcula correctamente distancia y desplazamiento aplicando las definiciones correspondientes."
                        },
                        {
                            "criterion": "Determinación de rapidez y velocidad medias",
                            "description": "Opera de forma adecuada para hallar la rapidez media y la velocidad media, interpretando el significado físico del signo."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de Evaluación - P02",
                    "evidenceExpected": "Resolución numérica de distancia, desplazamiento, rapidez media y velocidad media con unidades y justificación del signo.",
                    "criteria": [
                        {
                            "criterion": "Cálculo de Distancia y Desplazamiento",
                            "description": "Exactitud en la obtención de distancia total y desplazamiento.",
                            "levels": [
                                {
                                    "label": "Logrado",
                                    "description": "Calcula correctamente 180 m de distancia y +60 m de desplazamiento."
                                },
                                {
                                    "label": "En proceso",
                                    "description": "Comete errores en la suma de tramos o confusión en los signos del desplazamiento."
                                },
                                {
                                    "label": "No logrado",
                                    "description": "No calcula adecuadamente las magnitudes espaciales."
                                }
                            ]
                        },
                        {
                            "criterion": "Rapidez y Velocidad Medias",
                            "description": "Diferenciación y cálculo correcto de rapidez y velocidad medias.",
                            "levels": [
                                {
                                    "label": "Logrado",
                                    "description": "Distingue ambas magnitudes, calcula sus valores numéricos e interpreta el signo de la velocidad media."
                                },
                                {
                                    "label": "En proceso",
                                    "description": "Calcula los valores pero confunde los conceptos o no explica el significado del signo."
                                },
                                {
                                    "label": "No logrado",
                                    "description": "No logra plantear ni resolver las expresiones de rapidez o velocidad media."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía del Docente - P02",
                    "overview": "Paquete para 4.º ESO enfocado en la consolidación de cálculos cinemáticos y la distinción rigurosa entre magnitudes escalares y vectoriales.",
                    "sequence": [
                        {
                            "step": "Revisión conceptual",
                            "description": "Recordar las definiciones operativas de distancia, desplazamiento, rapidez y velocidad."
                        },
                        {
                            "step": "Resolución guiada",
                            "description": "Trabajar en el cálculo de los tramos (0-60 s y 60-90 s)."
                        },
                        {
                            "step": "Discusión de resultados",
                            "description": "Contrastar por qué la rapidez media y la velocidad media difieren numéricamente y en su naturaleza vectorial."
                        }
                    ],
                    "reviewNotes": "Asegurar que los estudiantes incluyan unidades en todos los pasos intermedios y finales."
                }
            }
        },
        {
            "profileId": "P03",
            "profileName": "Análisis y transferencia",
            "generationId": "GEN-MVKT0CB6",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para análisis y transferencia (2.º Bachillerato): modelización mediante funciones a trozos, análisis de pendientes, discusión sobre la idealización física de la inversión instantánea de velocidad y contraste con situaciones reales.",
            "artifacts": {
                "explanation": {
                    "title": "Análisis Avanzado del Movimiento Rectilíneo por Tramos",
                    "introduction": "Modelizamos la cinemática del móvil en un eje horizontal (sentido positivo hacia el este) mediante una función de posición x(t) definida por tramos temporales.",
                    "sections": [
                        {
                            "heading": "Formulación de la Posición por Tramos",
                            "content": "Definimos el movimiento en dos intervalos:\n1. Tramo 1 [0 s, 60 s]: Movimiento rectilíneo uniforme con posición inicial x(0)=0 m y posición final x(60)=+120 m. La velocidad en este tramo es v1 = (120 - 0)/(60 - 0) = +2 m/s.\n2. Tramo 2 [60 s, 90 s]: Movimiento rectilíneo uniforme de retorno con x(60)=+120 m y x(90)=+60 m. La velocidad en este tramo es v2 = (60 - 120)/(90 - 60) = -60 / 30 = -2 m/s."
                        },
                        {
                            "heading": "Discusión Crítica del Modelo y Límites Físicos",
                            "content": "El cambio de sentido en t = 60 s se modeliza como una inversión instantánea, lo cual implica una discontinuidad matemática en la velocidad (salta instantáneamente de +2 m/s a -2 m/s). En la realidad física, esto requeriría una aceleración infinita en un intervalo temporal nulo. Por tanto, el modelo es una idealización útil para calcular medias globales pero representa una aproximación limitada frente a la inercia y dinámica reales de un cuerpo."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de Análisis y Modelización Cinemática",
                    "instructions": [
                        "Formula analíticamente la función de posición x(t) para cada uno de los dos tramos del movimiento especificados en el enunciado.",
                        "Calcula la velocidad escalar media (rapidez media) y la velocidad vectorial media del sistema para el intervalo completo [0 s, 90 s], justificando el uso de distancia total versus desplazamiento neto.",
                        "Analiza el comportamiento de la velocidad en t = 60 s: explica por qué la inversión instantánea de sentido constituye una idealización matemática y discute las implicaciones físicas de asumir una transición sin intervalo de frenado."
                    ],
                    "expectedEvidence": "Desarrollo algebraico completo de las funciones por tramos, cálculo formal de las velocidades medias con rigor dimensional, y argumentación física crítica sobre las limitaciones del modelo idealizado.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de Evaluación - Análisis y Transferencia",
                    "criteria": [
                        {
                            "criterion": "Modelización matemática por tramos",
                            "description": "Formula correctamente la función de posición y determina las velocidades en cada intervalo."
                        },
                        {
                            "criterion": "Rigor en magnitudes medias y análisis crítico",
                            "description": "Calcula con precisión rapidez y velocidad medias, argumentando las limitaciones físicas de la idealización instantánea."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de Evaluación - P03",
                    "evidenceExpected": "Funciones x(t) por tramos, cálculo riguroso de rapidez y velocidad medias, y ensayo crítico sobre la discontinuidad del modelo.",
                    "criteria": [
                        {
                            "criterion": "Formulación y cálculo de pendientes por tramos",
                            "description": "Precisión en la obtención de las ecuaciones de movimiento y velocidades parciales.",
                            "levels": [
                                {
                                    "label": "Logrado",
                                    "description": "Plantea correctamente x(t) para ambos tramos y calcula v1 = +2 m/s y v2 = -2 m/s."
                                },
                                {
                                    "label": "En proceso",
                                    "description": "Comete errores en el cálculo de las pendientes o en la definición de los dominios temporales."
                                },
                                {
                                    "label": "No logrado",
                                    "description": "No logra modelizar algebraicamente el movimiento por tramos."
                                }
                            ]
                        },
                        {
                            "criterion": "Análisis crítico y límites del modelo",
                            "description": "Discusión física sobre la inversión instantánea de sentido y el contraste con la realidad.",
                            "levels": [
                                {
                                    "label": "Logrado",
                                    "description": "Argumenta sólidamente sobre la imposibilidad física de aceleración infinita y la idealización del modelo."
                                },
                                {
                                    "label": "En proceso",
                                    "description": "Menciona la idealización pero sin profundizar en las implicaciones dinámicas o de aceleración."
                                },
                                {
                                    "label": "No logrado",
                                    "description": "No identifica las limitaciones del modelo ni discute la discontinuidad."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía del Docente - P03",
                    "overview": "Paquete avanzado para 2.º Bachillerato enfocado en la modelización matemática, el cálculo de pendientes por tramos y el análisis crítico de las hipótesis de los modelos cinemáticos ideales.",
                    "sequence": [
                        {
                            "step": "Planteamiento analítico",
                            "description": "Revisar la construcción de funciones a trozos a partir de los datos de posición y tiempo."
                        },
                        {
                            "step": "Cálculos globales",
                            "description": "Diferenciar el tratamiento algebraico de la rapidez media frente a la velocidad media."
                        },
                        {
                            "step": "Debate físico",
                            "description": "Analizar la transición en t = 60 s y debatir sobre las diferencias entre modelos matemáticos ideales y la realidad física."
                        }
                    ],
                    "reviewNotes": "Evaluar la profundidad del razonamiento crítico en torno a la discontinuidad de la velocidad y el concepto de aceleración implícita."
                }
            }
        }
    ]
}
```
