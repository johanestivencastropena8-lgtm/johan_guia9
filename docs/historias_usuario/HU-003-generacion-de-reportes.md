# HU-003: Generación de reportes consolidados (PDF/CSV)

## Identificación
- **ID:** HU-003
- **Módulo / Controlador:** `src/controllers/reportController.js` (`generateStudentReport`)
- **Caso de prueba:** `test_pdf_export()`
- **Estado QA:** Pendiente

## Historia de usuario
**Como** instructor o coordinador,  
**quiero** generar reportes consolidados de las evidencias de un aprendiz,  
**para** analizar su avance y contar con un documento exportable para seguimiento.

## Descripción
El sistema debe permitir generar un reporte consolidado por aprendiz en los formatos soportados (PDF o CSV). La generación debe validar el aprendiz y el formato solicitado, y retornar la información del reporte generado.

## Criterios de aceptación
1. **CA-01 (Aprendiz obligatorio):** Si no se envía `studentId`, el sistema responde con error `400`.
2. **CA-02 (Formato soportado):** El campo `format` solo acepta `pdf` o `csv`. Si se envía un valor no soportado, el sistema responde con error `400`.
3. **CA-03 (Generación exitosa):** Si la solicitud es válida, el sistema genera el reporte y responde con código `201`, incluyendo `reportId`, formato, estado, fecha de generación y URL de descarga.
4. **CA-04 (Exportación PDF real):** La exportación real a PDF requiere integración con una librería de generación de documentos y validación en entorno de pruebas (pendiente).

## Endpoint relacionado
- `POST /api/reports/student`

## Documentación Swagger (OpenAPI 3.0)
- **UI interactiva:** `http://localhost:3000/api-docs` → sección **Reportes**
- **Operación:** `POST /api/reports/student` — *Generar reporte consolidado de un aprendiz*
- **Definición en código:** `src/routes/reportRoutes.js`

```yaml
/api/reports/student:
  post:
    summary: Generar reporte consolidado de un aprendiz
    tags: [Reportes]
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            required: [studentId]
            properties:
              studentId:
                type: string
                example: "1"
              format:
                type: string
                enum: [pdf, csv]
                example: "pdf"
    responses:
      201:
        description: Reporte generado correctamente
      400:
        description: Solicitud inválida
```

## Datos de ejemplo (request)
```json
{
  "studentId": "1",
  "format": "pdf"
}
```

## Observaciones
- Estado **Pendiente** en QA mientras se completa la integración y validación de la exportación real a PDF.
