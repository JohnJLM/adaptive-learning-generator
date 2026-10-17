# Entorno y servicios

Estado: integración Test validada el 2026-10-16. Este documento no contiene ni debe contener secretos.

## Recursos acordados

| Recurso | Estado | Nota |
|---|---|---|
| Repositorio GitHub | Sincronizado en `main` | `https://github.com/JohnJLM/adaptive-learning-generator.git`; pendiente de auditoría final, licencia y cambio a público. |
| Proyecto local | Preparado | `/home/leal9/projects/adaptive-learning-generator`. |
| n8n | Test validado | Workflow v2 ejecutado desde la UI; la URL Test requiere escuchar cada petición y no sustituye producción. |
| LLM | Test validado | Gemini respondió generación live y revisión selectiva con el modelo disponible configurado en n8n. |
| Frontend público | Migración preparada | Cloudflare validó el flujo Test; GitHub Pages queda configurado como destino estático con GitHub Actions. |
| Memoria académica | Overleaf v0 en curso | La plantilla institucional ya compila con XeLaTeX y datos de portada corregidos. |

## Configuración futura de Gemini y n8n

1. Mantener registrada la versión de n8n Cloud y el workflow importado.
2. Mantener la credencial de Gemini solo en n8n. No pegar claves en chats, commits, exports ni capturas.
3. Confirmar el modelo disponible para esa cuenta antes de una tanda nueva; el modelo debe permanecer versionado en los logs.
4. Conservar solo identificadores, modelo, parámetros y resultado sanitizado de las pruebas.
5. Para producción, publicar y probar un webhook estable; la URL Test actual requiere escucha manual por petición.

## Configuración local futura

Cuando exista webhook de producción, copiar `.env.example` a `.env.local` y configurar la URL. Vite solo expone al navegador variables que empiezan por `VITE_`; nunca poner una clave de proveedor en ese archivo.

## Coste y límites

Antes del piloto se debe decidir un límite de gasto y comprobar la cuota real de Gemini. La suscripción a una aplicación conversacional no es evidencia de cuota API. Toda estimación de coste se marcará como estimación hasta medir una ejecución real.

## Despliegue público

GitHub Pages alojará el frontend estático mediante `.github/workflows/deploy-pages.yml`. El build recibe `BASE_PATH` de GitHub Pages y solo usa la URL de webhook definida como variable de repositorio `VITE_N8N_GENERATE_URL`.

n8n Cloud sigue siendo un servicio separado: la URL Test manual no sirve como endpoint estable de la demo. Antes de compartir el sitio, publicar y probar un webhook Production, configurar el origen CORS `https://johnjlm.github.io` sin barra final y rotar toda clave temporal usada durante pruebas.
