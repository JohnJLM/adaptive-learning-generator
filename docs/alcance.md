# Alcance del prototipo

## Propósito

Diseñar y evaluar un sistema que genere paquetes educativos textuales y diferenciados para perfiles pedagógicos definidos por un docente. El prototipo no diagnostica alumnado ni sustituye la decisión docente.

## Casos iniciales

| ID | Área | Tema | Propósito de contraste |
|---|---|---|---|
| BIO-01 | Biología y Geología | Herencia genética | Pasar de vocabulario y modelo básico a probabilidades, supuestos y límites. |
| FIS-01 | Física y Química | Movimiento rectilíneo | Pasar de rapidez media a interpretación de representaciones y movimiento con aceleración constante. |

El paquete inicial combina, según preset o selección manual, explicación, actividad/taller, ejercicios/cuestionario/evaluación breve, solucionario, criterios, rúbrica y guía docente. No todos los módulos se generan siempre.

## Perfiles iniciales

| Perfil | Referencia | Foco de adaptación |
|---|---|---|
| P01 | 1.º ESO, progresión experimental | Vocabulario accesible, ejemplo resuelto, pasos explícitos y comprobación guiada. |
| P02 | 4.º ESO, progresión experimental | Aplicación guiada, representaciones, relaciones entre conceptos y supuestos visibles. |
| P03 | 2.º Bachillerato, progresión experimental | Modelización, razonamiento, justificación y límites de los modelos. |

Los cursos aportan contexto, pero no se toman como diagnóstico. El docente debe poder modificar conocimientos previos, objetivo específico, complejidad esperada, apoyos e instrucciones adicionales.

## Marco curricular

La referencia es el currículo estatal LOMLOE:

- El Real Decreto 217/2022 agrupa 1.º–3.º ESO y sitúa un bloque explícito de `Genética y evolución` en Biología y Geología de 4.º ESO. También recoge predicción de movimientos sencillos mediante conceptos cinemáticos en 1.º–3.º y movimiento con magnitudes, ecuaciones y gráficas en 4.º ESO.
- El Real Decreto 243/2022 recoge genética molecular en Biología de 2.º Bachillerato. Su bloque explícito de cinemática está en Física y Química de 1.º Bachillerato; Física de 2.º aplica variables cinemáticas en otros contextos.

Por tanto, P01–P03 es una **progresión didáctica experimental informada por las enseñanzas mínimas**, no una secuenciación oficial por curso. Biología y Física pueden ser materias de elección en los niveles superiores. La alineación curricular real se debe comprobar contra la comunidad autónoma y el centro de referencia antes de usar materiales en un aula.

Fuentes oficiales:

- RD 217/2022, ESO: https://www.boe.es/buscar/doc.php?id=BOE-A-2022-4975
- RD 243/2022, Bachillerato: https://www.boe.es/buscar/doc.php?id=BOE-A-2022-5521

## Fuera del primer MVP

- Diagnóstico o perfiles reales de menores.
- Carga general de documentos y RAG completo.
- Multimedia, cuentas multiusuario, pagos y comparativa entre proveedores.
- Persistencia longitudinal de artefactos y versiones fuera de la sesión actual.
- Afirmaciones de mejora del aprendizaje de estudiantes.

## Próxima decisión académica

Incorporar fuentes didácticas verificables y concretar el currículo de una comunidad autónoma si el estudio requiere afirmaciones de alineación curricular territorial.
