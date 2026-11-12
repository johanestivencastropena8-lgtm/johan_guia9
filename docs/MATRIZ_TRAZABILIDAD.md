# Matriz de Trazabilidad de Requisitos (RTM)

Esta matriz vincula formalmente las Historias de Usuario (HU) con su módulo/controlador de implementación y el caso de prueba de calidad asociado, permitiendo verificar la cobertura y el estado de validación de cada requisito.

## Tabla de trazabilidad

| ID HU  | Descripción Requisito                          | Módulo / Controlador                     | Caso de Prueba           | Estado QA  |
|--------|------------------------------------------------|------------------------------------------|--------------------------|------------|
| HU-001 | Registro de aprendices en el sistema           | `src/controllers/studentController.js` (`registerStudent`) | `test_register_pass()`   | Aprobado   |
| HU-002 | Carga de evidencias con validación de límite   | `src/controllers/evidenceController.js` (`uploadEvidence`)  | `test_upload_limit()`    | Aprobado   |
| HU-003 | Generación de reportes consolidados (PDF/CSV)  | `src/controllers/reportController.js` (`generateStudentReport`) | `test_pdf_export()`      | Pendiente  |
| HU-004 | Consulta de aprendices registrados             | `src/controllers/studentController.js` (`listStudents`)     | `test_list_students()`   | Aprobado   |
| HU-005 | Consulta de evidencias por aprendiz            | `src/controllers/evidenceController.js` (`listEvidencesByStudent`) | `test_list_evidences()`  | Aprobado   |

## Convenciones

- **ID HU:** Identificador único de la Historia de Usuario.
- **Descripción Requisito:** Resumen funcional del requerimiento.
- **Módulo / Controlador:** Componente del código donde se implementa el requisito.
- **Caso de Prueba:** Identificador del caso de prueba asociado a la validación del requisito.
- **Estado QA:** Estado de la verificación de calidad (`Aprobado`, `Pendiente`, `Fallido`, `En revisión`).

## Notas

- HU-003 se mantiene en estado **Pendiente** debido a que la exportación real a PDF requiere integración con una librería de generación de documentos y validación adicional en entorno de pruebas.
- Los casos de prueba referenciados corresponden a la suite de pruebas del proyecto (unitarias/integración) y sirven como evidencia de verificación del requisito.
