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

#### Resultado del caso A1:

```
PERFIL P01 — Acceso inicial
1) Explicación
Contexto de la situación: Imagina que un objeto se mueve en línea recta sobre una pista horizontal. Para saber dónde está en cada momento, utilizamos una regla numérica donde el punto de partida es el origen ($0\text{ m}$) y el sentido hacia el este se considera positivo ($+$).

Lectura de datos de la FICHA FIS-01:

Al inicio del cronómetro ($t = 0\text{ s}$), el objeto está en la posición $x = 0\text{ m}$.

A los $60\text{ segundos}$ ($t = 60\text{ s}$), el objeto se encuentra en la posición $x = +120\text{ m}$ (ha avanzado hacia el este).

A los $90\text{ segundos}$ ($t = 90\text{ s}$), el objeto está en la posición $x = +60\text{ m}$ (ha retrocedido hacia el oeste respecto al punto anterior).

Conceptos clave:

Trayectoria o distancia recorrida: Es todo el camino que recorre el objeto sumando cada tramo, sin importar la dirección.

Posición final: Es el lugar exacto donde se encuentra el objeto al terminar el tiempo total de observación.

2) Taller
Instrucciones completas:

Lee con atención los datos del movimiento descritos en la explicación anterior.

Responde por escrito a cada una de las siguientes cuestiones de forma clara y ordenada. No necesitas fórmulas matemáticas complejas, solo comprender la lectura de los datos.

Actividad ejecutable:

Pregunta A: ¿En qué posición se encuentra el móvil a los $60\text{ s}$ y hacia qué dirección se ha movido desde el inicio?

Pregunta B: Describe con tus propias palabras qué hace el móvil entre el segundo $60$ y el segundo $90$. ¿En qué posición termina?

Pregunta C: Piensa en la distancia total que recorre el coche: primero avanza hasta los $120\text{ m}$ y luego retrocede hasta los $60\text{ m}$. ¿Cuál es la posición final en la que se queda el cronómetro al terminar?

Evidencia esperada: Un texto breve redactado por el alumno donde identifique correctamente la posición a los $60\text{ s}$, el retroceso posterior hasta los $60\text{ m}$, y distinga textualmente entre el punto final del recorrido y el camino total acumulado.

3) Criterios de evaluación
Identifica correctamente los valores numéricos de tiempo y posición proporcionados en el enunciado sin requerir apoyos visuales externos.

Describe de forma comprensible el cambio de dirección del movimiento a partir del análisis textual de los datos.

Distingue de manera intuitiva entre la posición final de un objeto y el recorrido total realizado.

4) Rúbrica
Criterio	Nivel Inicial (1)	Nivel En Desarrollo (2)	Nivel Adecuado (3)
Lectura de datos	Confunde los valores de tiempo y posición o no los localiza en el texto.	Localiza algunos datos pero interpreta erróneamente el sentido del movimiento.	Identifica con precisión las posiciones del móvil en cada instante de tiempo indicado.
Descripción del movimiento	No logra explicar qué ocurre en los tramos descritos.	Explica parcialmente el avance pero omite o confunde el tramo de regreso.	Describe claramente el avance hacia el este y el posterior regreso hacia el oeste.
Posición final vs. Trayectoria	Asimila la posición final con la distancia total recorrida sin distinción.	Distingue conceptos con ayuda pero comete errores en la interpretación final.	Reconoce correctamente la posición final del objeto diferenciándola del camino recorrido.
5) Guía docente
Propósito: Iniciar al alumnado de primer curso de ESO en la lectura e interpretación de datos cinemáticos básicos sobre una trayectoria recta, garantizando accesibilidad total mediante descripciones textuales explícitas (sin dependencia visual de gráficas).

Secuencia de aplicación (45 min):

10 min: Presentación del marco de referencia lineal y lectura conjunta de los datos de la ficha.

20 min: Resolución individual o en parejas de las preguntas del taller.

15 min: Puesta en común guiada para contrastar las respuestas y afianzar la diferencia entre posición y distancia.

Comprobaciones recomendadas: Verificar que los estudiantes comprenden que el signo positivo indica posición hacia el este y que el regreso a los $90\text{ s}$ implica un valor de posición menor ($+60\text{ m}$) que el máximo alcanzado ($+120\text{ m}$).

PERFIL P02 — Consolidación
1) Explicación
Convenio del eje y marco de referencia: Situamos el movimiento sobre un eje horizontal. El origen es $x = 0\text{ m}$ y el sentido positivo ($+$) apunta hacia el este.

Análisis de los tramos según la FICHA FIS-01:

Tramo 1 ($t = 0\text{ s}$ a $t = 60\text{ s}$): Movimiento uniforme desde $x_0 = 0\text{ m}$ hasta $x_1 = +120\text{ m}$.

Tramo 2 ($t = 60\text{ s}$ a $t = 90\text{ s}$): Movimiento uniforme de regreso desde $x_1 = +120\text{ m}$ hasta $x_2 = +60\text{ m}$. El cambio de sentido en $t = 60\text{ s}$ se modeliza como instantáneo.

Magnitudes cinemáticas:

Distancia total ($d$): Longitud acumulada de la trayectoria.

Tramo 1: $\vert{}120 - 0\vert{} = 120\text{ m}$.

Tramo 2: $\vert{}60 - 120\vert{} = 60\text{ m}$.

$d = 120 + 60 = 180\text{ m}$.

Desplazamiento ($\Delta x$): Posición final menos posición inicial ($\Delta x = x_{\text{final}} - x_{\text{inicial}}$).

$\Delta x = 60\text{ m} - 0\text{ m} = +60\text{ m}$.

Rapidez media ($v_m$): Magnitud escalar definida como la distancia total dividida por el tiempo total ($t_{\text{total}} = 90\text{ s}$).

$v_m = \frac{180\text{ m}}{90\text{ s}} = 2\text{ m/s}$.

Velocidad media ($\vec{v}_m$ o $v_{med}$): Magnitud vectorial (con signo en el eje) definida como el desplazamiento total dividido por el tiempo total.

$v_{med} = \frac{+60\text{ m}}{90\text{ s}} = +\frac{2}{3}\text{ m/s} \approx 0.67\text{ m/s}$.

2) Taller
Instrucciones completas:

Utiliza los datos de la FICHA FIS-01 y las definiciones de la explicación.

Realiza los cálculos paso a paso justificando cada operación con sus respectivas unidades de medida (metros y segundos).

Actividad ejecutable:

Cuestión 1: Calcula la distancia recorrida en el primer tramo ($0$ a $60\text{ s}$) y en el segundo tramo ($60$ a $90\text{ s}$). Obtén la distancia total del recorrido.

Cuestión 2: Determina el desplazamiento total del móvil especificando claramente su signo según el convenio del eje horizontal.

Cuestión 3: Calcula la rapidez media y la velocidad media del trayecto completo de $90\text{ s}$.

Cuestión 4: Explica brevemente por qué la rapidez media y el valor numérico de la velocidad media son diferentes en este caso.

Evidencia esperada: Resolución numérica estructurada con desglose de tramos, cálculo correcto de distancia ($180\text{ m}$) y desplazamiento ($+60\text{ m}$), obtención de rapidez media ($2\text{ m/s}$) y velocidad media ($\approx 0.67\text{ m/s}$), acompañada de una argumentación sobre la diferencia conceptual entre ambas magnitudes.

3) Criterios de evaluación
Aplica correctamente las fórmulas de distancia total y desplazamiento a partir de los datos posicionales y temporales.

Calcula con rigor matemático y unidades correctas la rapidez media y la velocidad media.

Interpreta adecuadamente el signo positivo de la velocidad media en relación con el desplazamiento neto hacia el este.

Distingue de forma explícita entre magnitudes escalares (rapidez, distancia) y vectoriales (velocidad, desplazamiento).

4) Rúbrica
Criterio	Nivel Inicial (1)	Nivel En Desarrollo (2)	Nivel Adecuado (3)
Cálculo de Distancia y Desplazamiento	Errores graves al sumar distancias o calcular el desplazamiento neto.	Calcula correctamente la distancia pero confunde el signo del desplazamiento.	Calcula de forma exacta la distancia total ($180\text{ m}$) y el desplazamiento ($+60\text{ m}$).
Cálculo de Rapidez y Velocidad Medias	Aplica mal las fórmulas o confunde tiempo total con parciales.	Realiza los cálculos operativos pero omite o mezcla las unidades físicas.	Obtiene correctamente la rapidez media ($2\text{ m/s}$) y la velocidad media ($\approx 0.67\text{ m/s}$) con unidades.
Interpretación conceptual	No diferencia entre rapidez media y velocidad media.	Reconoce diferencias de fórmula pero no justifica físicamente el papel del signo.	Argumenta con precisión por qué la rapidez considera el camino total y la velocidad el desplazamiento neto.
5) Guía docente
Propósito: Consolidar en alumnado de 4.º de ESO el cálculo cuantitativo y la distinción analítica entre magnitudes escalares (distancia, rapidez media) y vectoriales (desplazamiento, velocidad media) en un movimiento rectilíneo con inversión de sentido.

Secuencia de aplicación (45 min):

10 min: Repaso de los conceptos de marco de referencia, signo en el eje horizontal y definiciones de velocidad frente a rapidez.

20 min: Trabajo autónomo de resolución de las cuestiones del taller.

15 min: Corrección en pizarra o puesta en común, enfatizando el significado físico del signo positivo en la velocidad media a pesar del tramo de regreso.

Comprobaciones recomendadas: Asegurar que los alumnos no resten el desplazamiento intermedio de forma equivocada y que entiendan que el tiempo total empleado en todo el trayecto es de $90\text{ s}$.

PERFIL P03 — Análisis y transferencia
1) Explicación
Modelización analítica del movimiento por tramos: El movimiento descrito en la FICHA FIS-01 se compone de dos funciones lineales de posición respecto al tiempo, $x(t)$:

Tramo 1 ($0 \le t \le 60\text{ s}$): Movimiento rectilíneo uniforme con velocidad constante $v_1$.

$x(t) = v_1 \cdot t$. Como en $t = 60\text{ s}$, $x = +120\text{ m}$, tenemos que $v_1 = \frac{120\text{ m}}{60\text{ s}} = +2\text{ m/s}$.

Tramo 2 ($60\text{ s} < t \le 90\text{ s}$): Movimiento rectilíneo uniforme con velocidad constante $v_2$.

$x(t) = x_1 + v_2 \cdot (t - 60)$. Como en $t = 90\text{ s}$, $x = +60\text{ m}$, tenemos $60 = 120 + v_2 \cdot (30)$, de donde $v_2 = \frac{60 - 120}{30} = \frac{-60}{30} = -2\text{ m/s}$.

Significado físico y limitaciones del modelo:

Inversión instantánea de sentido: El cambio de velocidad de $+2\text{ m/s}$ a $-2\text{ m/s}$ en $t = 60\text{ s}$ implica una discontinuidad en la función de velocidad y una aceleración infinita en un punto matemático idealizado. En la realidad física, ningún cuerpo cambia de sentido de manera instantánea sin un intervalo de desaceleración y frenado.

Comparación de medias:

Distancia total $d = \vert{}120 - 0\vert{} + \vert{}60 - 120\vert{} = 120 + 60 = 180\text{ m}$. Rapidez media $v_m = \frac{180}{90} = 2\text{ m/s}$.

Desplazamiento $\Delta x = 60 - 0 = +60\text{ m}$. Velocidad media $v_{med} = \frac{60}{90} = \frac{2}{3}\text{ m/s}$.

2) Taller
Instrucciones completas:

A partir de los datos y el marco teórico de la FICHA FIS-01, formula analíticamente las expresiones del movimiento.

Razona las respuestas aplicando rigor matemático, análisis dimensional y discusión crítica de los modelos físicos ideales frente a los reales.

Actividad ejecutable:

Cuestión 1: Escribe las ecuaciones de posición por tramos $x(t)$ para el intervalo $0-60\text{ s}$ y para el intervalo $60-90\text{ s}$, especificando dominios y unidades.

Cuestión 2: Calcula la velocidad instantánea en cada tramo a partir de la pendiente de la función de posición.

Cuestión 3: Determina la distancia total recorrida, el desplazamiento neto, la rapidez media y la velocidad media del intervalo completo ($0-90\text{ s}$).

Cuestión 4: Analiza críticamente la hipótesis del enunciado: "El cambio de sentido en $t=60\text{ s}$ se considera instantáneo únicamente como idealización del modelo". Discute qué implicaciones físicas tendría este cambio instantáneo en términos de aceleración y por qué difiere de un sistema físico real.

Evidencia esperada: Resolución formal completa con ecuaciones por tramos, cálculo riguroso de velocidades instantáneas y medias, y un ensayo crítico/argumentativo que explique las limitaciones del modelo idealizado de inversión instantánea de velocidad.

3) Criterios de evaluación
Formula correctamente las ecuaciones horarias de posición por tramos interpretando la pendiente como la velocidad instantánea en un movimiento uniforme.

Calcula con rigor matemático y dimensional las magnitudes escalares y vectoriales del movimiento global.

Discute con profundidad crítica la validez del modelo matemático idealizado frente a las restricciones físicas del mundo real (discontinuidad cinemática y aceleración infinita).

4) Rúbrica
Criterio	Nivel Inicial (1)	Nivel En Desarrollo (2)	Nivel Adecuado (3)
Formulación por tramos	No logra plantear las ecuaciones de posición o comete errores algebraicos graves.	Plantea las ecuaciones pero presenta fallos en los dominios temporales o en las constantes.	Modela con total precisión matemática las ecuaciones $x(t)$ para ambos tramos con sus respectivos dominios.
Cálculos cinemáticos globales	Errores en la distinción entre rapidez media y velocidad media o en los totales.	Calcula correctamente las medias pero omite la justificación analítica de los tramos.	Resuelve de forma impecable distancia ($180\text{ m}$), desplazamiento ($+60\text{ m}$) y sus respectivas medias.
Análisis crítico del modelo	Ignora la nota sobre la idealización o no aporta argumentos físicos sobre el cambio de sentido.	Menciona que es un modelo ideal pero profundiza poco en las implicaciones de aceleración.	Discute con rigor físico la discontinuidad de la velocidad, la implicación de aceleración infinita y la divergencia con sistemas reales.
5) Guía docente
Propósito: Proveer a estudiantes de 2.º de Bachillerato un marco de análisis avanzado que conecte la cinemática a trozos con el concepto de derivada/pendiente, fomentando el pensamiento crítico sobre las idealizaciones en la modelización física.

Secuencia de aplicación (45 min):

10 min: Introducción formal sobre funciones a trozos, interpretación gráfica/analítica de la pendiente como velocidad instantánea y discusión sobre modelos ideales.

20 min: Resolución autónoma de las ecuaciones horarias y del análisis crítico del taller.

15 min: Debate guiado sobre las limitaciones del modelo ideal de inversión instantánea y su contraste con la realidad experimental.

Comprobaciones recomendadas: Comprobar que los alumnos identifican correctamente que $v_1 = +2\text{ m/s}$ y $v_2 = -2\text{ m/s}$, y que argumentan la imposibilidad física de una transición escalonada de velocidad sin un intervalo transitorio de aceleración neta no nula.
```
