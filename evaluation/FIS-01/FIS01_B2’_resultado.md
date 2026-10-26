### Payload enviado al orquestador desde el frontend para el caso B2’ con la v2.0.1 del workflow:

```
{
  "requestId": "70fed8d9-6619-4b0b-bf0c-dedca459ca95",
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

### De dicho payload hemos obtenido esta respuesta del orquestador n8n version 2.0.1:

```
{
    "requestId": "70fed8d9-6619-4b0b-bf0c-dedca459ca95",
    "generationId": "GEN-MVPKIFRS",
    "mode": "live",
    "generatedAt": "2026-10-26T18:06:09.496Z",
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
            "generationId": "GEN-MVPKIFRS",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptado para acceso inicial (1.º ESO): lenguaje muy sencillo, explicaciones paso a paso, datos completamente detallados en texto y actividades guiadas sin fórmulas complejas.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación: El viaje del móvil en línea recta",
                    "introduction": "Vamos a estudiar cómo se mueve un objeto en línea recta. Imagina una línea recta orientada hacia el este. Todo lo que se mueve hacia el este avanza por esta línea.",
                    "sections": [
                        {
                            "heading": "Los datos de nuestro viaje",
                            "content": "Supongamos que tenemos un objeto que se mueve y anotamos su posición exacta en tres momentos distintos:\n- Al empezar el cronómetro (tiempo en 0 segundos), el objeto está en el origen (posición 0 metros).\n- A los 60 segundos, el objeto ha avanzado hacia el este y se encuentra a +120 metros del origen.\n- A los 90 segundos, el objeto ha retrocedido y se encuentra a +60 metros del origen."
                        },
                        {
                            "heading": "Distancia y Desplazamiento",
                            "content": "La distancia recorrida es la longitud total del camino que recorre el objeto. Va desde 0 hasta 120 metros (avanza 120 m) y luego desde 120 hasta 60 metros (retrocede 60 m). En total, camina 120 + 60 = 180 metros.\nEl desplazamiento solo mira dónde empezamos y dónde terminamos. Empezamos en 0 metros y terminamos en 60 metros. El desplazamiento final es de +60 metros (el signo más indica que terminamos hacia el este respecto al inicio)."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller guiado de movimiento",
                    "instructions": [
                        "Lee atentamente el texto de la explicación sobre las posiciones a los 0 s, 60 s y 90 s.",
                        "Responde con tus propias palabras: ¿A qué distancia del origen se encuentra el móvil cuando el cronómetro marca 60 segundos?",
                        "Calcula la distancia total recorrida sumando lo que avanza en el primer tramo (120 metros) y lo que recorre al retroceder hasta los 60 metros.",
                        "Indica cuál es la posición inicial (en el segundo 0) y cuál es la posición final (en el segundo 90)."
                    ],
                    "expectedEvidence": "Respuestas escritas claras que identifiquen correctamente las posiciones del texto y calculen la distancia total sumando ambos tramos sin confundirla con el desplazamiento.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación para Acceso inicial",
                    "criteria": [
                        {
                            "criterion": "Identificación de posiciones",
                            "description": "Localiza correctamente en el texto las posiciones del móvil en los tiempos indicados."
                        },
                        {
                            "criterion": "Diferenciación básica",
                            "description": "Distingue entre el camino total recorrido (distancia) y la posición final."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P01",
                    "evidenceExpected": "Descripciones textuales correctas y resolución paso a paso del taller.",
                    "criteria": [
                        {
                            "criterion": "Comprensión de posiciones y tiempos",
                            "description": "Capacidad para extraer los datos de tiempo y posición del texto.",
                            "levels": [
                                {
                                    "label": "Iniciado",
                                    "description": "Confunde tiempos y posiciones o no logra extraer los datos del texto."
                                },
                                {
                                    "label": "Logrado",
                                    "description": "Extrae e identifica correctamente las posiciones y los tiempos indicados."
                                }
                            ]
                        },
                        {
                            "criterion": "Cálculo de distancia",
                            "description": "Suma correctamente la longitud total del trayecto.",
                            "levels": [
                                {
                                    "label": "Iniciado",
                                    "description": "No realiza la suma de ambos tramos."
                                },
                                {
                                    "label": "Logrado",
                                    "description": "Calcula de forma acertada la distancia total sumando los tramos recorridos."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía del docente - P01",
                    "overview": "Orientado a estudiantes de 1.º ESO con nivel inicial. Se prioriza el contacto intuitivo con el movimiento rectilíneo mediante descripciones textuales explícitas.",
                    "sequence": [
                        {
                            "step": "Introducción guiada",
                            "description": "Leer conjuntamente los datos de la situación experimental y aclarar el significado del eje horizontal orientado al este."
                        },
                        {
                            "step": "Resolución del taller",
                            "description": "Acompañar al alumnado en la identificación de los tramos y la suma de distancias."
                        }
                    ],
                    "reviewNotes": "Verificar que el alumnado comprenda que el objeto cambia de sentido en el segundo 60."
                }
            }
        },
        {
            "profileId": "P02",
            "profileName": "Consolidación",
            "generationId": "GEN-MVPKIFRS",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptado para consolidación (4.º ESO): cálculo formal de rapidez y velocidad medias, uso riguroso de unidades y distinción clara entre magnitudes escalares y vectoriales con signo.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación: Rapidez y velocidad medias en un eje horizontal",
                    "introduction": "En este nivel analizaremos cuantitativamente el movimiento rectilíneo utilizando definiciones formales de rapidez media y velocidad media, empleando un eje horizontal donde el sentido positivo apunta hacia el este.",
                    "sections": [
                        {
                            "heading": "Datos del movimiento experimental",
                            "content": "Un móvil se desplaza en línea recta sobre el eje horizontal con los siguientes datos registrados:\n- En t = 0 s, la posición es x = 0 m.\n- En t = 60 s, la posición es x = +120 m (movimiento uniforme en este primer tramo).\n- En t = 90 s, la posición es x = +60 m (regresa con movimiento uniforme en este segundo tramo)."
                        },
                        {
                            "heading": "Distancia, Desplazamiento, Rapidez y Velocidad",
                            "content": "- Distancia total (d): Longitud recorrida. En el tramo 1 avanza 120 m; en el tramo 2 regresa 60 m. Distancia total = 120 + 60 = 180 m.\n- Desplazamiento (Δx): Posición final menos inicial = 60 m - 0 m = +60 m.\n- Rapidez media: Distancia total / tiempo total = 180 m / 90 s = 2 m/s.\n- Velocidad media: Desplazamiento / tiempo total = (+60 m) / 90 s = +0.67 m/s (el signo positivo indica que el resultado neto apunta hacia el este)."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de cálculo cinemático",
                    "instructions": [
                        "Con base en los datos (t=0 s a x=0 m; t=60 s a x=+120 m; t=90 s a x=+60 m), calcula la distancia total recorrida en todo el trayecto.",
                        "Calcula el desplazamiento total considerando la posición final y la inicial.",
                        "Determina la rapidez media del móvil para los 90 segundos totales, expresando el resultado en m/s con unidades justificadas.",
                        "Determina la velocidad media en el eje para los 90 segundos totales, indicando el significado físico del signo obtenido."
                    ],
                    "expectedEvidence": "Memoria de cálculo detallada con fórmulas, sustitución numérica, unidades correctas y explicación de la diferencia entre rapidez media y velocidad media.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación para Consolidación",
                    "criteria": [
                        {
                            "criterion": "Cálculo correcto de magnitudes",
                            "description": "Calcula adecuadamente distancia, desplazamiento, rapidez media y velocidad media."
                        },
                        {
                            "criterion": "Interpretación de signos y unidades",
                            "description": "Interpreta correctamente el significado del signo en la velocidad media y utiliza unidades físicas válidas."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P02",
                    "evidenceExpected": "Cálculos matemáticos con unidades y justificación conceptual.",
                    "criteria": [
                        {
                            "criterion": "Procedimiento de cálculo",
                            "description": "Uso de las fórmulas de rapidez y velocidad media.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Confunde las fórmulas de rapidez media y velocidad media."
                                },
                                {
                                    "label": "Competente",
                                    "description": "Aplica correctamente las fórmulas y diferencia magnitud escalar de vectorial."
                                }
                            ]
                        },
                        {
                            "criterion": "Unidades y signos",
                            "description": "Empleo riguroso de unidades (m/s) y signos del eje.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Omite unidades o interpreta erróneamente el signo."
                                },
                                {
                                    "label": "Competente",
                                    "description": "Incluye unidades en cada paso y explica el significado del signo positivo."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía del docente - P02",
                    "overview": "Diseñado para 4.º de ESO. Se centra en el cálculo numérico y la distinción analítica entre magnitudes escalares (rapidez) y vectoriales (velocidad).",
                    "sequence": [
                        {
                            "step": "Revisión conceptual",
                            "description": "Repasar las definiciones de distancia y desplazamiento antes de abordar las tasas medias."
                        },
                        {
                            "step": "Resolución autónoma guiada",
                            "description": "El alumnado resuelve los cálculos de rapidez y velocidad media, supervisando el uso de unidades."
                        }
                    ],
                    "reviewNotes": "Comprobar que el alumnado no confunda la distancia recorrida (180 m) con el desplazamiento (60 m) al calcular las medias."
                }
            }
        },
        {
            "profileId": "P03",
            "profileName": "Análisis y transferencia",
            "generationId": "GEN-MVPKIFRS",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptado para análisis y transferencia (2.º Bachillerato): modelización mediante funciones a trozos, comparación de pendientes en un plano x-t conceptual, discusión sobre la idealización del cambio instantáneo de sentido y límites del modelo.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación avanzada: Modelización cinemática por tramos",
                    "introduction": "En este nivel analizamos el movimiento rectilíneo formulando funciones de posición a trozos, evaluando las pendientes como velocidades instantáneas por tramos y discutiendo las limitaciones físicas de las idealizaciones matemáticas.",
                    "sections": [
                        {
                            "heading": "Formulación analítica por tramos",
                            "content": "Definimos la posición x(t) en el eje horizontal (este positivo):\n- Tramo 1 (0 s ≤ t ≤ 60 s): Movimiento uniforme con velocidad constante v1 = (120 - 0) / (60 - 0) = +2.0 m/s. La función es x(t) = 2.0 t.\n- Tramo 2 (60 s < t ≤ 90 s): Movimiento uniforme de regreso. Posición inicial x(60) = +120 m, posición final x(90) = +60 m. Velocidad v2 = (60 - 120) / (90 - 60) = -60 / 30 = -2.0 m/s. La función es x(t) = 120 - 2.0(t - 60)."
                        },
                        {
                            "heading": "Tasas medias globales y limitaciones del modelo",
                            "content": "- Distancia total: d = |120 - 0| + |60 - 120| = 120 + 60 = 180 m.\n- Desplazamiento total: Δx = x(90) - x(0) = 60 - 0 = +60 m.\n- Rapidez media global: 180 m / 90 s = 2.0 m/s.\n- Velocidad media global: 60 m / 90 s = +0.67 m/s.\nNota crítica: El cambio de sentido instantáneo en t = 60 s implica una discontinuidad matemática en la velocidad (salta bruscamente de +2 m/s a -2 m/s), lo que requeriría una aceleración infinita (infinitesimal de tiempo con salto finito de velocidad). En la física real, cualquier inversión de sentido es un proceso continuo donde la aceleración toma valores altos pero finitos."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de análisis avanzado y transferencia",
                    "instructions": [
                        "Formula las expresiones analíticas de la posición x(t) para cada uno de los dos tramos descritos (0-60 s y 60-90 s).",
                        "Calcula analíticamente las velocidades instantáneas (o pendientes) de cada tramo y contrástalas con la rapidez media y la velocidad media global del intervalo de 90 s.",
                        "Redacta un argumento físico fundamentado sobre por qué el cambio instantáneo de sentido en t=60 s es una idealización matemática y qué implicaciones tendría en términos de aceleración en un sistema real."
                    ],
                    "expectedEvidence": "Desarrollo matemático completo de las funciones a trozos, cálculo riguroso de tasas medias y discusión crítica sobre las limitaciones del modelo idealizado de inversión instantánea.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación para Análisis y transferencia",
                    "criteria": [
                        {
                            "criterion": "Modelización matemática",
                            "description": "Formula correctamente las funciones de posición a trozos y calcula las velocidades por tramo."
                        },
                        {
                            "criterion": "Discusión crítica del modelo",
                            "description": "Razona sobre los límites físicos de la idealización del cambio instantáneo de sentido."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación P03",
                    "evidenceExpected": "Ecuaciones horarias a trozos, cálculos de tasas y argumentación crítica rigurosa.",
                    "criteria": [
                        {
                            "criterion": "Formulación y cálculo cinemático",
                            "description": "Precisión en la obtención de ecuaciones y tasas medias/instantáneas.",
                            "levels": [
                                {
                                    "label": "Avanzado inicial",
                                    "description": "Calcula correctamente las tasas pero omite la formulación de funciones a trozos."
                                },
                                {
                                    "label": "Experto",
                                    "description": "Modela perfectamente por tramos y diferencia con rigor rapidez y velocidad."
                                }
                            ]
                        },
                        {
                            "criterion": "Análisis crítico y físico",
                            "description": "Discusión sobre la discontinuidad de la velocidad y la realidad física.",
                            "levels": [
                                {
                                    "label": "Avanzado inicial",
                                    "description": "Menciona el cambio de sentido sin profundizar en las implicaciones de aceleración."
                                },
                                {
                                    "label": "Experto",
                                    "description": "Argumenta sólidamente sobre la imposibilidad física de aceleración infinita ante cambios instantáneos."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía del docente - P03",
                    "overview": "Dirigido a alumnado de 2.º de Bachillerato. Enfoque analítico y crítico, vinculando la cinemática experimental con la modelización matemática y la discusión de los límites de los modelos ideales.",
                    "sequence": [
                        {
                            "step": "Planteamiento analítico",
                            "description": "Guiar en la construcción de las ecuaciones de posición en función del tiempo para cada tramo."
                        },
                        {
                            "step": "Debate físico",
                            "description": "Discutir la implicación de la discontinuidad en t=60 s y contrastar el modelo teórico con la realidad experimental."
                        }
                    ],
                    "reviewNotes": "Asegurar que el alumnado distinga claramente entre el tratamiento idealizado del enunciado y las restricciones físicas del mundo real."
                }
            }
        }
    ]
}
```
