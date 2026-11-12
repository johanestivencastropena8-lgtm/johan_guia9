# HU-002: Carga de evidencias con validación de límite

## Identificación
- **ID:** HU-002
- **Módulo / Controlador:** `src/controllers/evidenceController.js` (`uploadEvidence`)
- **Caso de prueba:** `test_upload_limit()`
- **Estado QA:** Aprobado

## Historia de usuario
**Como** aprendiz,  
**quiero** cargar evidencias de mis actividades de formación,  
**para** que el instructor pueda revisarlas y valorarlas dentro del proceso formativo.

## Descripción
El sistema debe permitir cargar una evidencia asociada a un aprendiz, registrando metadatos como nombre de archivo, tamaño y descripción. Se debe validar que el tamaño del archivo no exceda el límite máximo configurado.

## Criterios de aceptación
1. **CA-01 (Campos obligatorios):** Si faltan `studentId`, `filename` o `sizeMb` (numérico), el sistema responde con error `400`.
2. **CA-02 (Límite de tamaño):** Si `sizeMb` excede el máximo permitido (`UPLOAD_MAX_SIZE_MB`, por defecto 10 MB), el sistema responde con error `413` indicando el límite.
3. **CA-03 (Carga exitosa):** Si la validación es correcta, el sistema registra la evidencia y responde con código `201`, estado inicial `PENDING_REVIEW` y metadatos de la carga.

## Endpoint relacionado
- `POST /api/evidences`

## Documentación Swagger (OpenAPI 3.0)
- **UI interactiva:** `http://localhost:3000/api-docs` → sección **Evidencias**
- **Operación:** `POST /api/evidences` — *Cargar una evidencia de aprendizaje*
- **Definición en código:** `src/routes/evidenceRoutes.js`

```yaml
/api/evidences:
  post:
    summary: Cargar una evidencia de aprendizaje
    tags: [Evidencias]
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            required: [studentId, filename, sizeMb]
            properties:
              studentId:
                type: string
                example: "1"
              filename:
                type: string
                example: "taller_documentacion.pdf"
              sizeMb:
                type: number
                example: 2.4
              description:
                type: string
                example: "Evidencia de la guía 9"
    responses:
      201:
        description: Evidencia cargada correctamente
      400:
        description: Datos inválidos
      413:
        description: Archivo excede el tamaño máximo permitido
```

## Datos de ejemplo (request)
```json
{
  "studentId": "1",
  "filename": "taller_documentacion.pdf",
  "sizeMb": 2.4,
  "description": "Evidencia de la guía 9"
}
```
