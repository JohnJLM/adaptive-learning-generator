# Entrega pública y GitHub Pages

Esta lista prepara una versión revisable del MVP para un repositorio público. No convierte la URL Test de n8n en una demo estable ni sustituye las decisiones académicas pendientes.

## Antes de hacer público el repositorio

1. Rotar toda clave temporal usada en pruebas. No añadir claves de acceso, Gemini, Google Sheets o n8n a Git, variables `VITE_`, documentación, capturas o issues.
2. Comprobar que `.env.local` sigue ignorado y que el historial no contiene secretos. Si una clave llegó a estar expuesta, revocarla antes de publicar.
3. Revisar título, README, alcance, límites, licencias de dependencias y decisión de licencia del código. No publicar materiales de terceros ni datos de estudiantes.
4. Confirmar que la evidencia E2E sanitizada no contiene prompts, artefactos completos, feedback, fuentes privadas ni credenciales.
5. Crear un release o etiqueta solo después de que tests y build pasen en la versión exacta publicada.

## Configurar GitHub Pages

1. Hacer público el repositorio cuando la lista anterior esté cerrada.
2. En **Settings > Pages**, seleccionar **GitHub Actions** como fuente.
3. En **Settings > Secrets and variables > Actions > Variables**, crear `VITE_N8N_GENERATE_URL` con la URL Production del webhook. Esta variable contiene una URL pública, nunca una clave.
4. Hacer push a `main` y revisar la ejecución `Deploy GitHub Pages`.
5. El sitio de proyecto se publica bajo `https://johnjlm.github.io/adaptive-learning-generator/`. El workflow calcula esta ruta base durante el build.

## Configurar n8n para la demo

1. Importar `workflows/educational-package-gemini-sheets.template.json`.
2. Sustituir todos los valores `REPLACE_WITH_*`, incluida la configuración de Gemini y Google Sheets.
3. En `Generation Webhook`, sustituir `REPLACE_WITH_FRONTEND_ORIGIN` por `https://johnjlm.github.io`. Es un origen CORS, no la URL completa de Pages: no añadir `/adaptive-learning-generator/` ni barra final.
4. Configurar Header Auth y la credencial Gemini solo en n8n.
5. Activar el workflow y usar su URL **Production** en la variable de GitHub Pages. La URL Test requiere pulsar `Execute workflow` y no sirve para una demo compartida.
6. Probar desde GitHub Pages: acceso rechazado sin clave, generación válida, error de entrada, revisión selectiva y cierre. Registrar únicamente metadatos sanitizados.

## Límites de la versión pública

- La clave introducida manualmente es una barrera inicial, no autenticación de usuarios ni limitación de gasto suficiente para una aplicación abierta.
- El historial de materiales, feedback y aprobaciones vive en la sesión del navegador. Google Sheets solo conserva metadatos operativos.
- La validación E2E existente demuestra el flujo técnico; no demuestra eficacia educativa, alineación curricular territorial ni resultados A/B/C.
- GitHub Pages mejora la entrega del frontend estático, pero la disponibilidad de generación depende del webhook Production de n8n y de Gemini.
