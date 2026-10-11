# Entorno y servicios

Estado: configuración pendiente. Este documento no contiene ni debe contener secretos.

## Recursos acordados

| Recurso | Estado | Nota |
|---|---|---|
| Repositorio GitHub | Remoto creado | `https://github.com/JohnJLM/adaptive-learning-generator.git`; el primer commit aún no se ha creado ni publicado. |
| Proyecto local | Preparado | `/home/leal9/projects/adaptive-learning-generator`. |
| n8n | Pendiente | El usuario prevé crear una cuenta nueva con periodo de prueba en n8n Cloud. |
| LLM | Pendiente de prueba | Se usará Gemini API mediante una credencial existente del usuario. |
| Frontend público | Pendiente | Cloudflare Pages se configura después de una integración real probada. |
| Memoria académica | Pendiente | Probar Overleaf/LaTeX con la plantilla antes de convertirlo en fuente activa. |

## Configuración futura de Gemini y n8n

1. Crear la instancia n8n Cloud y registrar su versión.
2. Crear una credencial de Gemini en n8n usando la clave existente del usuario directamente en la interfaz. No pegarla en chats, commits, exports ni capturas.
3. Confirmar el modelo que aparece realmente disponible para esa cuenta; no seleccionar un nombre por documentación antigua.
4. Ejecutar una llamada mínima y guardar solo identificadores, modelo, parámetros y resultado sanitizado.
5. Crear el workflow de generación y configurar CORS/orígenes autorizados al desplegar el frontend.

## Configuración local futura

Cuando exista webhook de producción, copiar `.env.example` a `.env.local` y configurar la URL. Vite solo expone al navegador variables que empiezan por `VITE_`; nunca poner una clave de proveedor en ese archivo.

## Coste y límites

Antes del piloto se debe decidir un límite de gasto y comprobar la cuota real de Gemini. La suscripción a una aplicación conversacional no es evidencia de cuota API. Toda estimación de coste se marcará como estimación hasta medir una ejecución real.

## Despliegue posterior

Cloudflare Pages alojará el frontend estático desde GitHub. n8n Cloud seguirá siendo un servicio separado: la URL de test manual no sirve como endpoint estable de la demo. El webhook de producción deberá publicarse, protegerse y probarse desde el frontend desplegado.
