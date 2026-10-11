# Workflows de n8n

Esta carpeta contiene dos clases de archivos:

- Plantillas `*.template.json`: configuraciones importables, sin secretos y sin ejecución acreditada.
- Exportaciones `*.json`: únicamente workflows ejecutados y probados realmente, sanitizados antes de versionarse.

`generation-gemini-sheets.template.json` es una plantilla inicial para el flujo de generación. Requiere configurar credenciales de Gemini y Google Sheets, el modelo, el identificador de la hoja y el origen CORS antes de ejecutarlo.

Cuando se configure la cuenta n8n Cloud:

1. Registrar versión y nodos usados.
2. Importar y configurar la plantilla; registrar el modelo, la versión de n8n y los resultados de las pruebas.
3. Exportar el workflow tras una ejecución real.
4. Eliminar credenciales y cualquier dato sensible del export antes de versionarlo.
5. Asociar el export a una versión de contratos, reglas, modelo y pruebas.
