# FIS-01 · Prompt congelable, condición A (Gemini Chat)

**Uso:** copiar **únicamente el bloque de prompt** en un chat nuevo por repetición. Este es un baseline manual competente, no un prompt débil diseñado para favorecer a Adaptive Lab. No solicita JSON ni introduce deliberadamente obstáculos a Gemini Chat.

## Prompt A listo para copiar

```text
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
