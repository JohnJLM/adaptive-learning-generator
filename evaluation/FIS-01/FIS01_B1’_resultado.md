### Payload enviado al orquestador desde el frontend para el caso B1’ (caso workflow v 2.0.1):

```
{
  "requestId": "8a043928-de5c-418c-a9b3-b51be55f61ff",
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

### De dicho payload hemos obtenido esta respuesta del orquestador n8n para B1’ (version 2.0.1):

```
{
    "requestId": "8a043928-de5c-418c-a9b3-b51be55f61ff",
    "generationId": "GEN-MVPJGMPF",
    "mode": "live",
    "generatedAt": "2026-10-26T17:36:45.555Z",
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
            "generationId": "GEN-MVPJGMPF",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para acceso inicial: lenguaje sencillo, introducción paso a paso sin fórmulas complejas, uso de ejemplos guiados y descripciones textuales explícitas de los datos de posición.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación: Cómo se mueve un objeto en línea recta",
                    "introduction": "Imagina que un objeto se mueve sobre una línea recta, como una cinta métrica en el suelo. Vamos a estudiar dónde está en cada momento y cuánto le cuesta ir de un sitio a otro.",
                    "sections": [
                        {
                            "heading": "1. El eje y las posiciones en el tiempo",
                            "content": "Para medir el movimiento usamos una línea con un origen (el punto cero, que llamamos 0 m). Hacia la derecha consideramos que es el este (valores positivos, como +60 m o +120 m). Los datos de nuestro objeto son: En el segundo 0 (inicio), está en 0 m. En el segundo 60, ha avanzado y está en +120 m. En el segundo 90, ha retrocedido un poco y está en +60 m."
                        },
                        {
                            "heading": "2. Distancia recorrida y desplazamiento",
                            "content": "La distancia recorrida es toda la longitud que el objeto camina en total, sumando la ida y la vuelta. El desplazamiento solo mira dónde empezó y dónde terminó, restando la posición final menos la inicial. Por ejemplo, si vas a la tienda y vuelves, la distancia es grande, pero tu desplazamiento final respecto a casa puede ser cero."
                        },
                        {
                            "heading": "3. Rapidez media y velocidad media",
                            "content": "La rapidez media nos dice qué tan deprisa se ha recorrido el camino total en el tiempo transcurrido (distancia total entre tiempo total). La velocidad media relaciona el desplazamiento final con el tiempo total, indicando también hacia qué dirección se ha movido gracias al signo positivo o negativo."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller guiado: Leyendo nuestro movimiento paso a paso",
                    "instructions": [
                        "Paso 1: Lee atentamente los datos del movimiento del objeto. A los 0 s está en 0 m; a los 60 s está en +120 m; a los 90 s está en +60 m.",
                        "Paso 2: Responde con tus propias palabras qué hizo el objeto desde el segundo 0 hasta el segundo 60.",
                        "Paso 3: Explica qué ocurrió desde el segundo 60 hasta el segundo 90, teniendo en cuenta que su posición pasó de +120 m a +60 m.",
                        "Paso 4: Calcula o describe la distancia total que caminó el objeto (primero avanzó 120 metros y luego retrocedió 60 metros) y escribe cuánto vale esa suma."
                    ],
                    "expectedEvidence": "Identificación correcta de los dos tramos del movimiento, diferenciando la ida hacia adelante y el regreso, y cálculo sencillo de la distancia total caminada y la posición final.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Acceso inicial)",
                    "criteria": [
                        {
                            "criterion": "Comprensión de los tramos",
                            "description": "Describe correctamente con palabras qué ocurre en cada intervalo de tiempo según los datos proporcionados."
                        },
                        {
                            "criterion": "Diferencia entre distancia y posición",
                            "description": "Distingue de forma básica entre el camino total recorrido y la posición final en el eje."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación - P01",
                    "evidenceExpected": "Descripciones textuales coherentes de los tramos y cálculo básico de distancia y posición final.",
                    "criteria": [
                        {
                            "criterion": "Descripción de los tramos del movimiento",
                            "description": "Capacidad para explicar el avance y el retroceso del móvil usando los datos de tiempo y posición.",
                            "levels": [
                                {
                                    "label": "Inicial",
                                    "description": "Confunde los datos de tiempo y posición o no logra describir el movimiento."
                                },
                                {
                                    "label": "En desarrollo",
                                    "description": "Describe parcialmente los tramos con ayuda de los datos explícitos."
                                },
                                {
                                    "label": "Logrado",
                                    "description": "Explica claramente y sin errores el avance hasta +120 m y el retroceso hasta +60 m."
                                }
                            ]
                        },
                        {
                            "criterion": "Distancia y posición final",
                            "description": "Comprende qué es el camino total recorrido y la ubicación final del objeto.",
                            "levels": [
                                {
                                    "label": "Inicial",
                                    "description": "No logra calcular la distancia ni identificar la posición final."
                                },
                                {
                                    "label": "En desarrollo",
                                    "description": "Identifica la posición final pero comete errores al sumar la distancia recorrida."
                                },
                                {
                                    "label": "Logrado",
                                    "description": "Diferencia con claridad la distancia total recorrida y señala correctamente la posición final."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para el perfil de Acceso inicial (P01)",
                    "overview": "Este material introduce los conceptos cinemáticos básicos a estudiantes de 1.º ESO con progresión experimental, evitando fórmulas complejas y apoyándose en descripciones textuales claras.",
                    "sequence": [
                        {
                            "step": "1",
                            "description": "Presentar el texto explicativo y leer conjuntamente los datos de posición y tiempo."
                        },
                        {
                            "step": "2",
                            "description": "Guiar al estudiante en la resolución paso a paso de las instrucciones del taller."
                        },
                        {
                            "step": "3",
                            "description": "Revisar las respuestas utilizando los criterios de evaluación y la rúbrica asociada."
                        }
                    ],
                    "reviewNotes": "Verificar que el estudiante no confunda la posición con el tiempo y que entienda el significado físico de avanzar y retroceder en la línea recta."
                }
            }
        },
        {
            "profileId": "P02",
            "profileName": "Consolidación",
            "generationId": "GEN-MVPJGMPF",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación para consolidación: incluye cálculos justificados con unidades, comparación explícita entre rapidez media y velocidad media, y declaración formal del convenio del eje para 4.º ESO.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación: Magnitudes cinemáticas en el movimiento rectilíneo",
                    "introduction": "Para un móvil que se desplaza en línea recta sobre un eje horizontal (donde el sentido positivo apunta hacia el este), analizamos las posiciones medidas: t=0 s, x=0 m; t=60 s, x=+120 m; y t=90 s, x=+60 m. El movimiento es uniforme en cada tramo.",
                    "sections": [
                        {
                            "heading": "1. Distancia y Desplazamiento",
                            "content": "La distancia recorrida (d) es la longitud total del camino. En el tramo 1 (0 a 60 s) recorre 120 m; en el tramo 2 (60 a 90 s) regresa desde +120 m hasta +60 m, recorriendo 60 m más. Distancia total = 120 m + 60 m = 180 m. El desplazamiento (Δx) es la posición final menos la inicial: Δx = x_final - x_inicial = +60 m - 0 m = +60 m."
                        },
                        {
                            "heading": "2. Rapidez media y Velocidad media",
                            "content": "La rapidez media se define como la distancia total dividida entre el tiempo total: v_rapidez = 180 m / 90 s = 2 m/s. La velocidad media es el desplazamiento dividido entre el tiempo total: v_media = Δx / t_total = (+60 m) / 90 s = +0.67 m/s. El signo positivo de la velocidad media indica que el resultado neto del desplazamiento apunta hacia el este."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller de cálculo cinemático",
                    "instructions": [
                        "Instrucción 1: Define el convenio del eje horizontal, recordando que el este es positivo y el origen está en x=0 m.",
                        "Instrucción 2: Calcula la distancia total recorrida por el móvil sumando el trayecto de ida (0 a 60 s) y el de vuelta (60 a 90 s).",
                        "Instrucción 3: Calcula el desplazamiento total utilizando la fórmula Δx = x_f - x_i con los valores de t=0 s y t=90 s.",
                        "Instrucción 4: Calcula la rapidez media (distancia total entre tiempo total) y la velocidad media (desplazamiento entre tiempo total), explicando por qué sus valores numéricos y conceptuales difieren."
                    ],
                    "expectedEvidence": "Cálculos detallados y justificados de distancia, desplazamiento, rapidez media y velocidad media, acompañados de sus respectivas unidades y análisis de signos.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Consolidación)",
                    "criteria": [
                        {
                            "criterion": "Cálculo de magnitudes escalares y vectoriales",
                            "description": "Calcula correctamente distancia y desplazamiento utilizando los datos temporales y espaciales."
                        },
                        {
                            "criterion": "Interpretación de rapidez y velocidad media",
                            "description": "Diferencia con rigor matemático y conceptual la rapidez media de la velocidad media, interpretando adecuadamente el signo de esta última."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación - P02",
                    "evidenceExpected": "Resolución numérica correcta de los apartados de cinemática con justificación de unidades y signos.",
                    "criteria": [
                        {
                            "criterion": "Cálculos de distancia y desplazamiento",
                            "description": "Precisión en la determinación de la distancia total recorrida y del desplazamiento neto.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Calcula erróneamente el trayecto de vuelta o confunde distancia con desplazamiento."
                                },
                                {
                                    "label": "Logrado",
                                    "description": "Calcula de forma exacta la distancia total (180 m) y el desplazamiento (+60 m) con sus unidades."
                                }
                            ]
                        },
                        {
                            "criterion": "Rapidez media frente a velocidad media",
                            "description": "Comprende y calcula ambas magnitudes distinguiendo el carácter escalar y vectorial.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Calcula solo una de las magnitudes o no justifica el significado del signo en la velocidad media."
                                },
                                {
                                    "label": "Logrado",
                                    "description": "Calcula ambas magnitudes correctamente y explica la diferencia física entre rapidez y velocidad media."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para el perfil de Consolidación (P02)",
                    "overview": "Diseñado para estudiantes de 4.º ESO. Busca consolidar el uso de fórmulas cinemáticas básicas, la distinción entre magnitudes escalares y vectoriales, y el manejo del convenio de signos en el eje.",
                    "sequence": [
                        {
                            "step": "1",
                            "description": "Revisar los datos experimentales y el convenio del eje horizontal."
                        },
                        {
                            "step": "2",
                            "description": "Supervisar los cálculos de distancia y desplazamiento en los dos tramos."
                        },
                        {
                            "step": "3",
                            "description": "Debatir la diferencia conceptual entre rapidez media y velocidad media."
                        }
                    ],
                    "reviewNotes": "Comprobar que los alumnos justifican los pasos algebraicos y asignan correctamente las unidades del Sistema Internacional."
                }
            }
        },
        {
            "profileId": "P03",
            "profileName": "Análisis y transferencia",
            "generationId": "GEN-MVPJGMPF",
            "version": 1,
            "status": "generated",
            "adaptationSummary": "Adaptación avanzada para 2.º Bachillerato: formulación de funciones de posición por tramos, análisis de pendientes, discusión de la discontinuidad idealizada en la inversión instantánea de sentido y contraste con la realidad física.",
            "artifacts": {
                "explanation": {
                    "title": "Explicación avanzada: Modelización cinemática por tramos y límites del modelo",
                    "introduction": "Analizamos un movimiento rectilíneo sobre un eje horizontal (sentido positivo hacia el este) definido por las posiciones: t=0 s, x=0 m; t=60 s, x=+120 m; t=90 s, x=+60 m, con tramos de movimiento uniforme y un cambio de sentido instantáneo idealizado en t=60 s.",
                    "sections": [
                        {
                            "heading": "1. Función de posición por tramos x(t)",
                            "content": "Podemos expresar la posición analíticamente. Tramo 1 (0 ≤ t ≤ 60 s): x(t) = (120/60)·t = 2t (velocidad v1 = +2 m/s). Tramo 2 (60 < t ≤ 90 s): la posición parte de x(60) = 120 y llega a x(90) = 60 en un intervalo de 30 s, por lo que x(t) = 120 - 2(t - 60) = 240 - 2t (velocidad v2 = -2 m/s)."
                        },
                        {
                            "heading": "2. Análisis cinemático global y límites del modelo idealizado",
                            "content": "La distancia total es d = |120 - 0| + |60 - 120| = 120 + 60 = 180 m. El desplazamiento neto es Δx = 60 - 0 = +60 m. La rapidez media es 180 m / 90 s = 2 m/s, mientras que la velocidad media es 60 m / 90 s = +0.67 m/s. Respecto al cambio de sentido en t=60 s, el modelo asume una inversión instantánea de velocidad (de +2 m/s a -2 m/s), lo que implicaría una aceleración infinita en un diferencial de tiempo nulo. Físicamente, esto es una idealización matemática; en la realidad, el móvil requeriría un intervalo de tiempo finito de frenado y aceleración."
                        }
                    ]
                },
                "workshop": {
                    "title": "Taller avanzado: Modelización analítica y discusión crítica",
                    "instructions": [
                        "Instrucción 1: Escribe las expresiones analíticas de la función de posición x(t) para cada uno de los dos tramos del movimiento basándote en los datos dados.",
                        "Instrucción 2: Calcula formalmente la velocidad instantánea o de tramo en cada intervalo y contrástala con la velocidad media global y la rapidez media del recorrido completo.",
                        "Instrucción 3: Discute críticamente la hipótesis del modelo de un cambio de sentido instantáneo en t=60 s, analizando sus implicaciones sobre la aceleración y su validez frente a un movimiento real."
                    ],
                    "expectedEvidence": "Formulación matemática rigurosa de las funciones de posición por tramos, cálculo de magnitudes cinemáticas y argumentación física sobre las limitaciones del modelo idealizado.",
                    "estimatedMinutes": 45
                },
                "evaluation_criteria": {
                    "title": "Criterios de evaluación (Análisis y transferencia)",
                    "criteria": [
                        {
                            "criterion": "Modelización analítica por tramos",
                            "description": "Formula correctamente las ecuaciones de posición en función del tiempo para cada intervalo del movimiento."
                        },
                        {
                            "criterion": "Discusión crítica y rigor físico",
                            "description": "Analiza las limitaciones del modelo idealizado de cambio instantáneo de sentido y contrasta adecuadamente las magnitudes medias."
                        }
                    ]
                },
                "rubric": {
                    "title": "Rúbrica de evaluación - P03",
                    "evidenceExpected": "Ecuaciones de posición correctas, cálculos cinemáticos completos y argumentación crítica fundamentada sobre el modelo idealizado.",
                    "criteria": [
                        {
                            "criterion": "Formulación analítica y cálculo cinemático",
                            "description": "Dominio en la obtención de las funciones x(t) y determinación de velocidades por tramos, rapidez media y velocidad media.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "Comete errores al plantear las ecuaciones de posición por tramos o en el cálculo de las velocidades."
                                },
                                {
                                    "label": "Avanzado",
                                    "description": "Plantea con total precisión las funciones x(t), calcula correctamente las velocidades de tramo (+2 m/s y -2 m/s) y las medias."
                                }
                            ]
                        },
                        {
                            "criterion": "Discusión sobre los límites del modelo",
                            "description": "Capacidad para argumentar sobre la idealización matemática de la inversión instantánea de velocidad y su divergencia con la física real.",
                            "levels": [
                                {
                                    "label": "En desarrollo",
                                    "description": "No profundiza en el significado físico del cambio instantáneo de sentido ni menciona la aceleración infinita implícita."
                                },
                                {
                                    "label": "Avanzado",
                                    "description": "Discute críticamente la discontinuidad de velocidad, justificando por qué es una idealización irreal y qué implicaciones tendría en la práctica."
                                }
                            ]
                        }
                    ]
                },
                "teacher_guide": {
                    "title": "Guía docente para el perfil de Análisis y transferencia (P03)",
                    "overview": "Dirigido a alumnado de 2.º Bachillerato. Requiere un enfoque riguroso basado en funciones a trozos, análisis de pendientes y pensamiento crítico sobre los modelos físicos ideales frente a los sistemas reales.",
                    "sequence": [
                        {
                            "step": "1",
                            "description": "Plantear la formalización matemática del movimiento a partir de los puntos experimentales dados."
                        },
                        {
                            "step": "2",
                            "description": "Guiar la deducción de las funciones x(t) y el cálculo de distancias, desplazamientos y velocidades."
                        },
                        {
                            "step": "3",
                            "description": "Fomentar el debate en torno a la discontinuidad cinemática en t=60 s y la imposibilidad física de aceleraciones infinitas."
                        }
                    ],
                    "reviewNotes": "Evaluar la solidez del razonamiento matemático y la capacidad crítica del estudiante para separar los constructos ideales de la modelización física de la realidad."
                }
            }
        }
    ]
}
```
