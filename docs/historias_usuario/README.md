# Historias de Usuario

Este directorio contiene las Historias de Usuario (HU) del proyecto **SENA Evidencias API**, documentadas de forma individual y alineadas con la [Matriz de Trazabilidad de Requisitos (RTM)](../MATRIZ_TRAZABILIDAD.md).

## Índice

| ID | Título | Estado QA | Documento |
|---|---|---|---|
| HU-001 | Registro de aprendices en el sistema | Aprobado | [HU-001-registro-de-aprendices.md](HU-001-registro-de-aprendices.md) |
| HU-002 | Carga de evidencias con validación de límite | Aprobado | [HU-002-carga-de-evidencias.md](HU-002-carga-de-evidencias.md) |
| HU-003 | Generación de reportes consolidados (PDF/CSV) | Pendiente | [HU-003-generacion-de-reportes.md](HU-003-generacion-de-reportes.md) |
| HU-004 | Consulta de aprendices registrados | Aprobado | [HU-004-consulta-de-aprendices.md](HU-004-consulta-de-aprendices.md) |
| HU-005 | Consulta de evidencias por aprendiz | Aprobado | [HU-005-consulta-de-evidencias-por-aprendiz.md](HU-005-consulta-de-evidencias-por-aprendiz.md) |

## Formato utilizado
Cada historia incluye: identificación (ID, módulo/controlador, caso de prueba, estado QA), narrativa (Como/Quiero/Para), descripción, criterios de aceptación, endpoint relacionado, **documentación Swagger (OpenAPI 3.0)** con la especificación del endpoint y datos de ejemplo.

> La documentación interactiva completa está disponible en `http://localhost:3000/api-docs` al ejecutar el proyecto (`npm start`). Las anotaciones OpenAPI se mantienen en `src/routes/*.js`.
