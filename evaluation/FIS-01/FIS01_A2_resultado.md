## Resultados para evaluación A/B/C

### Prompt usado en Gemini para casos A:

```
Actúa como asistente de elaboración de materiales educativos para Física y Química. Diseña un paquete didáctico completo para el MISMO caso y TRES perfiles distintos, utilizando toda la información facilitada. Redacta en español, con precisión disciplinar, secuencias utilizables en clase y sin presuponer recursos externos no adjuntos.

MATERIA: Física y Química
TEMA: Movimiento rectilíneo: distancia, desplazamiento, rapidez y velocidad medias
OBJETIVO GENERAL: Interpretar un movimiento rectilíneo mediante posiciones, tiempos y magnitudes cinemáticas, adaptando el razonamiento, los apoyos y la evaluación al perfil pedagógico.
TIPO DE PAQUETE: Taller
DURACIÓN ORIENTATIVA DE CADA PERFIL: 45 minutos.

FUENTE / CONTEXTO COMÚN (idéntico en todos los perfiles):
FICHA DIDÁCTICA EXPERIMENTAL FIS-01 (elaboración propia, no fuente curricular externa). Situación única para todos los perfiles: un móvil se desplaza en línea recta sobre un eje horizontal. El sentido positivo del eje apunta hacia el este. Posiciones medidas respecto del origen: a los 0 s, x=0 m; a los 60 s, x=+120 m; a los 90 s, x=+60 m. Durante el intervalo 0-60 s el movimiento es uniforme; durante 60-90 s regresa con movimiento uniforme. El cambio de sentido en t=60 s se considera instantáneo únicamente como idealización del modelo. La distancia recorrida es la longitud total del camino; el desplazamiento es posición final menos inicial. La rapidez media se define como distancia total/tiempo total. La velocidad media en el eje se define como desplazamiento/tiempo total; su signo expresa el sentido. Cuando se soliciten representaciones, facilitar una descripción textual suficiente y no remitir a gráficas, tablas, imágenes, enunciados o ejemplos que no estén realmente incluidos. No atribuir al móvil aceleración constante en los tramos, ni confundir rapidez media con velocidad media.

INSTRUCCIONES GENERALES:
Cada actividad debe ser autosuficiente: todos los datos, esquemas descritos y materiales necesarios aparecen en el paquete. Mantener consistencia entre explicación, taller, criterios, rúbrica y guía.

PARA CADA PERFIL ENTREGA EXACTAMENTE ESTOS CINCO MÓDULOS, EN ESTE ORDEN:
1) Explicación: conceptos y ejemplos adaptados, sin inventar datos.
2) Taller: instrucciones completas, actividad ejecutable con los datos proporcionados y evidencia esperada.
3) Criterios de evaluación: observables y relacionados con el objetivo del perfil.
4) Rúbrica: criterios, niveles y descriptores referidos a la evidencia del taller.
5) Guía docente: propósito, secuencia de aplicación y comprobaciones recomendadas.

Entrega primero P01, luego P02 y finalmente P03. No combines los perfiles ni omitas módulos. Utiliza etiquetas explícitas para identificar perfil y módulo.

PERFIL P01 — Acceso inicial
Curso de referencia: 1.º ESO · progresión experimental
Nivel de conocimientos: Inicial
Conocimientos previos: Lee números enteros sencillos, interpreta segundos y metros; no se presuponen fórmulas de cinemática.
Objetivo específico: Describir con palabras los dos tramos y distinguir trayectoria recorrida y posición final con ayuda explícita.
Complejidad esperada: introductory
Apoyos de accesibilidad: Acceso visual no dependiente de imágenes (visual_access)
Consideraciones: Lenguaje claro, consignas breves y numeradas, referencias textuales completas a las posiciones y un ejemplo resuelto de lectura de datos; nunca exigir leer una imagen o un código de color.
Instrucciones adicionales: Evitar derivadas, gráficas imprescindibles y cálculos avanzados. No inferir diagnósticos del curso.

PERFIL P02 — Consolidación
Curso de referencia: 4.º ESO · progresión experimental
Nivel de conocimientos: Intermedio
Conocimientos previos: Maneja divisiones sencillas, unidades de longitud y tiempo, y entiende signos positivo y negativo.
Objetivo específico: Calcular e interpretar la distancia total, el desplazamiento, la rapidez media y la velocidad media del recorrido.
Complejidad esperada: intermediate
Apoyos de accesibilidad: ninguno
Consideraciones: Incluir cálculos justificados con unidades y una comparación explícita entre rapidez media y velocidad media; reducir el andamiaje respecto a P01.
Instrucciones adicionales: Diferenciar magnitud escalar y velocidad con signo, y declarar el convenio del eje.

PERFIL P03 — Análisis y transferencia
Curso de referencia: 2.º Bachillerato · progresión experimental
Nivel de conocimientos: Avanzado
Conocimientos previos: Dominio de álgebra elemental, funciones a trozos y significado de pendiente en un gráfico posición-tiempo.
Objetivo específico: Formular e interpretar la función de posición por tramos, comparar pendientes y discutir límites de la inversión instantánea de sentido.
Complejidad esperada: advanced
Apoyos de accesibilidad: ninguno
Consideraciones: Exigir argumentación matemática y física, signos y unidades, explicación de la discontinuidad idealizada de velocidad al cambiar de sentido y contraste con el movimiento real.
Instrucciones adicionales: No exigir aceleración uniforme en cada tramo ni tratar como físicamente realista una inversión instantánea del sentido.

Comprueba que la explicación, taller, criterios, rúbrica y guía de cada perfil son coherentes entre sí. La solicitud de apoyo en P01 exige que la actividad sea comprensible y resoluble sin depender de una imagen, color o gráfico no descrito. No incluyas comentarios sobre cómo has elaborado la respuesta.
```

- Se realizó el mismo prompt en dos chats independientes.
- Se usó el modelo de Gemini 3.5 Flash-lite.
- Nivel de razonamiento bajo.

#### Resultado del caso A2:

```
PERFIL P01 — Acceso inicial
1) Explicación
Contexto de la situación: Imagina un objeto que se mueve en línea recta sobre un camino horizontal. Para orientarnos, acordamos que hacia el este es el sentido positivo (+). La posición se mide desde un punto de referencia que llamamos origen ($0\text{ m}$).

Lectura de los datos del recorrido:

Al empezar a contar el tiempo ($0\text{ s}$), el objeto está en el origen ($0\text{ m}$).

A los $60\text{ s}$, el objeto se encuentra en la posición $+120\text{ m}$ (ha avanzado hacia el este).

A los $90\text{ s}$, el objeto se encuentra en la posición $+60\text{ m}$ (ha regresado un poco hacia el oeste).

Conceptos clave:

Trayectoria y distancia recorrida: Es el camino total acumulado. Primero avanza $120\text{ m}$ y luego retrocede $60\text{ m}$. La distancia total es la suma de los tramos: $120\text{ m} + 60\text{ m} = 180\text{ m}$.

Posición final y desplazamiento: La posición final es el lugar exacto donde se detiene el objeto ($+60\text{ m}$), mientras que el punto de partida era $0\text{ m}$.

Ejemplo resuelto: Si un caminante sale de $0\text{ m}$ y llega a $+120\text{ m}$, su posición final es $+120\text{ m}$. Si luego camina hacia atrás hasta $+60\text{ m}$, su posición final es $+60\text{ m}$, aunque sus piernas hayan recorrido una distancia mayor.

2) Taller
Título: Siguiendo los pasos del móvil en línea recta.

Instrucciones completas:

Lee con atención los datos del recorrido proporcionados en el texto base. No necesitas mirar ninguna imagen ni gráfico.

Responde por escrito a las siguientes tres cuestiones en tu cuaderno:

Pregunta A: Describe con tus propias palabras qué hace el objeto desde el segundo $0$ hasta el segundo $60$, y desde el segundo $60$ hasta el segundo $90$.

Pregunta B: Explica cuál es la diferencia entre la posición final en el segundo $90$ y la distancia total que ha caminado el objeto durante todo el tiempo.

Pregunta C: Si tuvieras que explicarle a un compañero en qué momento el objeto cambia de dirección, ¿en qué segundo exacto dirías que ocurre y por qué?

Evidencia esperada: Respuestas redactadas de forma clara, diferenciando correctamente entre la distancia total acumulada y la ubicación final del objeto, identificando el cambio de sentido en el segundo $60$.

3) Criterios de evaluación
Identifica correctamente las posiciones del objeto en los tres instantes dados ($0\text{ s}$, $60\text{ s}$ y $90\text{ s}$).

Distingue con palabras sencillas entre la distancia total recorrida y la posición final.

Describe de forma coherente el cambio de sentido del movimiento a partir de los datos textuales.

4) Rúbrica
Criterio	Nivel Inicial (1)	Nivel En desarrollo (2)	Nivel Autónomo (3)
Identificación de posiciones	Confunde las posiciones o los tiempos dados en el texto.	Identifica los datos pero requiere guía para relacionarlos con el espacio.	Ubica con total precisión las posiciones del objeto en cada instante temporal.
Distancia vs. Posición	Confunde distancia recorrida con posición final.	Distingue parcialmente ambos conceptos pero duda en el cálculo de la distancia total.	Diferencia claramente la distancia total recorrida de la posición final del objeto.
Descripción del movimiento	No logra explicar los dos tramos del recorrido.	Describe los tramos de forma incompleta o confusa.	Explica con claridad el avance hacia el este y el posterior regreso.
5) Guía docente
Propósito: Introducir al alumnado de primer curso de la ESO en la lectura e interpretación de datos cinemáticos sencillos sin requerir fórmulas matemáticas ni soporte visual complejo.

Secuencia de aplicación:

Presentar el caso mediante lectura guiada en voz alta (10 min).

Resolver el ejemplo conjuntamente en la pizarra (10 min).

Trabajo individual o en parejas para responder las preguntas del taller (20 min).

Puesta en común rápida para unificar conceptos (5 min).

Comprobaciones recomendadas: Asegurarse de que ningún estudiante asuma que la posición final coincide siempre con la distancia recorrida total.

PERFIL P02 — Consolidación
1) Explicación
Convenio del eje y marco conceptual: Se estudia un movimiento rectilíneo sobre un eje horizontal donde el sentido positivo apunta hacia el este. Las posiciones se miden respecto al origen ($x = 0\text{ m}$).

Desglose temporal:

Intervalo $0 - 60\text{ s}$: Movimiento uniforme desde $x = 0\text{ m}$ hasta $x = +120\text{ m}$.

Intervalo $60 - 90\text{ s}$: Movimiento uniforme de regreso desde $x = +120\text{ m}$ hasta $x = +60\text{ m}$.

Definiciones operativas:

Distancia recorrida ($d$): Longitud total de la trayectoria acumulada. $d = \text{Tramo 1} + \text{Tramo 2} = 120\text{ m} + 60\text{ m} = 180\text{ m}$.

Desplazamiento ($\Delta x$): Variación de la posición, calculada como posición final menos inicial: $\Delta x = x_{\text{final}} - x_{\text{inicial}} = 60\text{ m} - 0\text{ m} = +60\text{ m}$.

Rapidez media ($v_m$): Magnitud escalar que relaciona la distancia total entre el tiempo total:

$$v_m = \frac{\text{Distancia total}}{\text{Tiempo total}} = \frac{180\text{ m}}{90\text{ s}} = 2\text{ m/s}$$
Velocidad media en el eje ($v_{x,\text{media}}$): Magnitud vectorial (con signo) que relaciona el desplazamiento total entre el tiempo total:

$$v_{x,\text{media}} = \frac{\text{Desplazamiento}}{\text{Tiempo total}} = \frac{+60\text{ m}}{90\text{ s}} \approx +0.67\text{ m/s}$$
El signo positivo de la velocidad media indica que, en conjunto, el desplazamiento neto se orienta hacia el este.

2) Taller
Título: Cálculo y distinción de magnitudes cinemáticas medias.

Instrucciones completas:

A partir de los datos experimentales de la ficha FIS-01 ($t = 0\text{ s}$ en $x = 0\text{ m}$; $t = 60\text{ s}$ en $x = +120\text{ m}$; $t = 90\text{ s}$ en $x = +60\text{ m}$), realiza los cálculos de forma justificada.

Apartado A: Calcula la distancia total recorrida por el móvil en todo el intervalo de $90\text{ s}$.

Apartado B: Calcula el desplazamiento neto del móvil entre el inicio y el final del recorrido, especificando su signo según el convenio del eje.

Apartado C: Determina la rapidez media y la velocidad media del recorrido completo, indicando las unidades en Sistema Internacional ($\text{m/s}$).

Apartado D: Redacta un párrafo breve explicando por qué la rapidez media y el valor absoluto de la velocidad media no coinciden en este caso.

Evidencia esperada: Memoria de cálculo estructurada con fórmulas explícitas, sustitución numérica correcta con unidades, y argumentación conceptual que contraste rapidez y velocidad media.

3) Criterios de evaluación
Calcula correctamente la distancia total y el desplazamiento aplicando el convenio del eje.

Resuelve con precisión matemática la rapidez media y la velocidad media utilizando el tiempo total ($90\text{ s}$).

Interpreta físicamente el significado del signo en la velocidad media y la diferencia cuantitativa con la rapidez media.

4) Rúbrica
Criterio	Nivel Básico (1)	Nivel Intermedio (2)	Nivel Avanzado (3)
Cálculo de Distancia y Desplazamiento	Errores en la suma de tramos o en el signo del desplazamiento.	Calcula correctamente distancia y desplazamiento pero omite unidades o justificación.	Calcula de forma impecable ambos parámetros, justificando el signo y las unidades.
Cálculo de Rapidez y Velocidad Media	Confusion en las fórmulas o uso incorrecto del tiempo total.	Calcula ambas magnitudes pero comete pequeños errores de redondeo o unidades.	Resuelve correctamente ambas magnitudes, diferenciando la naturaleza escalar de la vectorial.
Interpretación Conceptual	No logra explicar la diferencia entre rapidez y velocidad media.	Identifica que una lleva signo y otra no, pero con poca profundidad física.	Explica con rigor analítico por qué difieren debido al cambio de sentido del movimiento.
5) Guía docente
Propósito: Consolidar en alumnado de 4.º de ESO el cálculo cuantitativo y la distinción conceptual entre magnitudes escalares (rapidez) y vectoriales (velocidad media), previniendo errores comunes de confusión.

Secuencia de aplicación:

Recordar brevemente el convenio del eje y las definiciones de rapidez y velocidad media (5 min).

Resolución individual o en parejas de los apartados del taller (30 min).

Puesta en común analizando los resultados numéricos y el significado del signo positivo en la velocidad media (10 min).

Comprobaciones recomendadas: Vigilar que los alumnos utilicen $90\text{ s}$ como tiempo total en lugar de fragmentarlo erróneamente al calcular las medias globales.

PERFIL P03 — Análisis y transferencia
1) Explicación
Formulación analítica por tramos: El movimiento rectilíneo descrito se modeliza mediante una función de posición a trozos respecto al tiempo $x(t)$:

Tramo 1 ($0 \le t \le 60\text{ s}$): Movimiento uniforme con velocidad constante $v_1$. La posición se expresa como:

$$x(t) = \frac{120\text{ m} - 0\text{ m}}{60\text{ s} - 0\text{ s}} \cdot t = 2t$$
Tramo 2 ($60 < t \le 90\text{ s}$): Movimiento uniforme de regreso con velocidad constante $v_2$. La posición se expresa como:

$$x(t) = 120 + \frac{60 - 120}{90 - 60} \cdot (t - 60) = 120 - 2(t - 60) = 240 - 2t$$
Análisis de pendientes y velocidades instantáneas en los tramos:

En el tramo 1, la pendiente de la recta posición-tiempo es $v_1 = +2\text{ m/s}$.

En el tramo 2, la pendiente es $v_2 = -2\text{ m/s}$.

Discusión sobre la inversión instantánea de sentido:

El modelo idealiza el cambio de sentido en $t = 60\text{ s}$ como un evento instantáneo. En términos físicos reales, una inversión instantánea de la velocidad implicaría una aceleración infinita ($\Delta v / \Delta t \to \infty$), lo cual es físicamente imposible debido a la inercia y a las fuerzas reales necesarias para frenar y cambiar el sentido del móvil. Por tanto, el cambio de sentido real requiere un intervalo temporal de desaceleración y posterior aceleración en sentido contrario.

2) Taller
Título: Modelización analítica y crítica de límites físicos del movimiento.

Instrucciones completas:

Utiliza los datos de la ficha experimental FIS-01 para desarrollar el análisis matemático y físico avanzado.

Apartado A: Escribe las expresiones algebraicas de la función de posición por tramos $x(t)$ para el intervalo $0 \le t \le 60\text{ s}$ y para el intervalo $60 < t \le 90\text{ s}$.

Apartado B: Determina la velocidad instantánea en cada uno de los dos tramos a partir de la pendiente de la función posición-tiempo.

Apartado C: Calcula la distancia total recorrida, el desplazamiento neto, la rapidez media y la velocidad media global del movimiento completo.

Apartado D: Redacta un informe crítico argumentando por qué la consideración de un cambio de sentido instantáneo en $t = 60\text{ s}$ es una idealización matemática y qué implicaciones tendría en cuanto a la aceleración si se tratase de un sistema físico real.

Evidencia esperada: Desarrollo matemático completo de las funciones a trozos, cálculo riguroso de magnitudes medias y globales, e argumentación física fundamentada sobre las limitaciones del modelo idealizado.

3) Criterios de evaluación
Formula correctamente las ecuaciones de posición por tramos y calcula las pendientes asociadas.

Opera con rigor matemático y dimensional en el cálculo de distancias, desplazamientos, rapideces y velocidades medias.

Discute críticamente la validez física de la idealización del cambio instantáneo de sentido y su relación con la aceleración.

4) Rúbrica
Criterio	Nivel En desarrollo (1)	Nivel Competente (2)	Nivel Avanzado (3)
Modelización Analítica ($x(t)$)	Errores importantes al plantear las ecuaciones de posición por tramos.	Plantea correctamente las ecuaciones pero comete fallos algebraicos menores.	Formula de forma impecable las funciones a trozos y calcula con exactitud las pendientes.
Cálculos Cinemáticos Globales	Confunde magnitudes escalares y vectoriales en los cálculos globales.	Resuelve correctamente los cálculos numéricos con sus respectivas unidades.	Demuestra dominio avanzado relacionando el análisis gráfico/analítico con las magnitudes medias.
Análisis Crítico del Modelo	No aborda la limitación física del cambio instantáneo de sentido.	Menciona que es una idealización pero sin profundizar en conceptos dinámicos (aceleración).	Analiza con profundidad rigurosa la imposibilidad física real de la discontinuidad de velocidad (aceleración infinita).
5) Guía docente
Propósito: Desarrollar en alumnado de 2.º de Bachillerato la capacidad de abstracción matemática, el manejo de funciones a trozos y el análisis crítico de las limitaciones de los modelos físicos ideales frente a la realidad dinámica.

Secuencia de aplicación:

Introducción conceptual sobre la modelización a trozos y la relación entre derivada/pendiente y velocidad (5 min).

Trabajo autónomo del alumnado en la resolución analítica y redacción del informe crítico (30 min).

Debate final guiado sobre las diferencias entre modelos matemáticos ideales y sistemas físicos reales (10 min).

Comprobaciones recomendadas: Verificar que el alumnado comprenda que la discontinuidad en la función de velocidad representa una idealización matemática útil para el cálculo académico, pero irrealizable en la física de sistemas materiales debido al principio de inercia y las limitaciones de fuerza.
```
