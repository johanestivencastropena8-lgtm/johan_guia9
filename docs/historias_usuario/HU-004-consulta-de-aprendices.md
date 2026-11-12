# HU-004: Consulta de aprendices registrados

## Identificación
- **ID:** HU-004
- **Módulo / Controlador:** `src/controllers/studentController.js` (`listStudents`)
- **Caso de prueba:** `test_list_students()`
- **Estado QA:** Aprobado

## Historia de usuario
**Como** instructor o administrador del sistema,  
**quiero** consultar el listado de aprendices registrados,  
**para** visualizar la información de los aprendices y filtrar por programa de formación cuando sea necesario.

## Descripción
El sistema debe proporcionar un listado de aprendices registrados. Debe permitir filtrar opcionalmente los resultados por programa de formación mediante un parámetro de consulta.

## Criterios de aceptación
1. **CA-01 (Listado general):** Al consultar sin filtros, el sistema responde con código `200` y una colección con el total y los aprendices registrados.
2. **CA-02 (Filtro por programa):** Si se envía el parámetro `program`, el sistema retorna únicamente los aprendices que pertenecen a dicho programa.
3. **CA-03 (Estructura de respuesta):** La respuesta incluye `total` y `data` con los registros correspondientes.

## Endpoint relacionado
- `GET /api/students`
- `GET /api/students?program=ADSO` (filtro opcional)

## Documentación Swagger (OpenAPI 3.0)
- **UI interactiva:** `http://localhost:3000/api-docs` → sección **Aprendices**
- **Operación:** `GET /api/students` — *Listar aprendices registrados*
- **Definición en código:** `src/routes/studentRoutes.js`

```yaml
/api/students:
  get:
    summary: Listar aprendices registrados
    tags: [Aprendices]
    parameters:
      - in: query
        name: program
        schema:
          type: string
        description: Filtrar por programa de formación
    responses:
      200:
        description: Listado de aprendices
```

## Datos de ejemplo (response)
```json
{
  "total": 2,
  "data": [
    { "id": "1", "document": "1001", "name": "Ana Pérez", "email": "ana@example.com", "program": "ADSO" }
  ]
}
```
