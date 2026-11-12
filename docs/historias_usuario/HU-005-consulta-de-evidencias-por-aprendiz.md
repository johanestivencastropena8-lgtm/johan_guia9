# HU-005: Consulta de evidencias por aprendiz

## Identificación
- **ID:** HU-005
- **Módulo / Controlador:** `src/controllers/evidenceController.js` (`listEvidencesByStudent`)
- **Caso de prueba:** `test_list_evidences()`
- **Estado QA:** Aprobado

## Historia de usuario
**Como** instructor,  
**quiero** consultar las evidencias cargadas por un aprendiz específico,  
**para** revisar su avance y realizar la valoración correspondiente.

## Descripción
El sistema debe permitir consultar todas las evidencias asociadas a un aprendiz identificado por su `studentId`, retornando el listado y el total de evidencias encontradas.

## Criterios de aceptación
1. **CA-01 (Consulta por aprendiz):** Al consultar con un `studentId` válido en la ruta, el sistema responde con código `200`.
2. **CA-02 (Contenido de la respuesta):** La respuesta incluye el `studentId`, el `total` de evidencias y el arreglo `data` con las evidencias asociadas.
3. **CA-03 (Información de evidencia):** Cada evidencia incluye, al menos, identificador, aprendiz asociado, nombre de archivo, tamaño, estado y fecha de carga.

## Endpoint relacionado
- `GET /api/evidences/student/:studentId`

## Documentación Swagger (OpenAPI 3.0)
- **UI interactiva:** `http://localhost:3000/api-docs` → sección **Evidencias**
- **Operación:** `GET /api/evidences/student/{studentId}` — *Listar evidencias por aprendiz*
- **Definición en código:** `src/routes/evidenceRoutes.js`

```yaml
/api/evidences/student/{studentId}:
  get:
    summary: Listar evidencias por aprendiz
    tags: [Evidencias]
    parameters:
      - in: path
        name: studentId
        required: true
        schema:
          type: string
        description: Identificador del aprendiz
    responses:
      200:
        description: Evidencias del aprendiz
```

## Datos de ejemplo (response)
```json
{
  "studentId": "1",
  "total": 1,
  "data": [
    {
      "id": "ev-1",
      "studentId": "1",
      "filename": "taller.pdf",
      "sizeMb": 2.4,
      "status": "APPROVED",
      "uploadedAt": "2026-11-10T10:00:00.000Z"
    }
  ]
}
```
