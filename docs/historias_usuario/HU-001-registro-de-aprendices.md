# HU-001: Registro de aprendices en el sistema

## Identificación
- **ID:** HU-001
- **Módulo / Controlador:** `src/controllers/studentController.js` (`registerStudent`)
- **Caso de prueba:** `test_register_pass()`
- **Estado QA:** Aprobado

## Historia de usuario
**Como** instructor o administrador del sistema,  
**quiero** registrar aprendices con sus datos básicos,  
**para** mantener un listado oficial de aprendices y asociarles evidencias y reportes.

## Descripción
El sistema debe permitir el registro de un aprendiz proporcionando al menos documento, nombre y correo electrónico. Opcionalmente se puede indicar el programa de formación. Al registrarse correctamente, el sistema retorna la información del aprendiz creado.

## Criterios de aceptación
1. **CA-01 (Campos obligatorios):** Si faltan `document`, `name` o `email`, el sistema responde con error `400` y un mensaje indicando los campos requeridos.
2. **CA-02 (Registro exitoso):** Si los datos obligatorios son válidos, el sistema crea el registro y responde con código `201`, mensaje de confirmación y los datos del aprendiz (incluyendo `id` y `createdAt`).
3. **CA-03 (Programa opcional):** El campo `program` es opcional; si no se envía, se almacena como `null`.

## Endpoint relacionado
- `POST /api/students`

## Documentación Swagger (OpenAPI 3.0)
- **UI interactiva:** `http://localhost:3000/api-docs` → sección **Aprendices**
- **Operación:** `POST /api/students` — *Registrar un nuevo aprendiz*
- **Definición en código:** `src/routes/studentRoutes.js`

```yaml
/api/students:
  post:
    summary: Registrar un nuevo aprendiz
    tags: [Aprendices]
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            required: [document, name, email]
            properties:
              document:
                type: string
                example: "1098765432"
              name:
                type: string
                example: "Ana Pérez"
              email:
                type: string
                format: email
                example: "ana@example.com"
              program:
                type: string
                example: "ADSO"
    responses:
      201:
        description: Aprendiz registrado correctamente
      400:
        description: Datos de entrada inválidos
```

## Datos de ejemplo (request)
```json
{
  "document": "1098765432",
  "name": "Ana Pérez",
  "email": "ana@example.com",
  "program": "ADSO"
}
```
