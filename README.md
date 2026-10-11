# Adaptive Learning Generator

Prototipo del TFM para investigar la generación de material educativo textual adaptativo para perfiles definidos por un docente.

## Estado actual

La aplicación implementa una interfaz local en React y Material UI, con perfiles dinámicos y dos casos controlados:

- `BIO-01`: herencia genética.
- `FIS-01`: movimiento rectilíneo.

Actualmente funciona en **modo simulado**. Genera ejemplos locales deterministas para comprobar la experiencia de usuario, los contratos y las diferencias visibles de complejidad. La vista de resultados permite imprimir o guardar como PDF desde el navegador. No llama a Gemini, no usa n8n, no guarda datos y no produce resultados de evaluación.

La integración real prevista es:

```text
UI → webhook n8n → validación → Gemini API → validación JSON → historial → UI
```

No introducir secretos en este repositorio. Leer `docs/entorno.md` antes de configurar servicios.

## Desarrollo local

Requisitos: Node.js 24 o posterior y npm.

```bash
npm install
npm run dev
```

Visita la URL que indique Vite, normalmente `http://localhost:4173`.

## Verificación

```bash
npm test
npm run build
```

`npm test` prueba el generador simulado. `npm run build` ejecuta la comprobación de TypeScript y genera `dist/`.

## Estructura

- `src/`: interfaz React responsive, tema Material UI, vista imprimible y generador simulado.
- `schemas/`: contratos de solicitud y respuesta previstos para la integración.
- `docs/`: alcance, arquitectura, entorno y decisiones.
- `evaluation/`: protocolo y datos de evaluación futuros.
- `workflows/`: exportaciones de n8n cuando existan ejecuciones reales.

## Límites del prototipo

- Los perfiles `1.º ESO`, `4.º ESO` y `2.º Bachillerato` son una progresión pedagógica experimental; no constituyen una secuenciación oficial directa.
- El currículo se toma como marco estatal LOMLOE. Cada comunidad autónoma y cada centro concretan currículo y oferta.
- El material mostrado es de demostración. Requiere revisión docente y fuentes trazables antes de uso educativo o evaluación.
- No recopilar datos identificativos, diagnósticos ni información sensible de estudiantes.

## Documentación relacionada

- [Alcance](docs/alcance.md)
- [Arquitectura](docs/arquitectura.md)
- [Entorno](docs/entorno.md)
- [Workflow n8n](docs/workflow-n8n.md)
- [Contratos](schemas/)

La memoria académica y las fuentes institucionales se mantienen fuera de este repositorio para no publicar documentación de terceros sin revisar sus permisos.
