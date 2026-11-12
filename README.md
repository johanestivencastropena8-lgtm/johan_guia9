# SENA Evidencias API

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![Swagger](https://img.shields.io/badge/API%20Docs-Swagger%20%2F%20OpenAPI%203.0-85EA2D?logo=swagger&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue)

API REST de ejemplo para la **gestión de aprendices, evidencias y reportes**, desarrollada como parte del taller práctico de documentación integral (Guía 9). El proyecto demuestra la aplicación de estándares de documentación: README completo, comentarios en código (JSDoc), documentación interactiva de API (Swagger/OpenAPI) y matriz de trazabilidad de requisitos (RTM).

## Tabla de contenidos

- [Descripción general](#descripción-general)
- [Tecnologías](#tecnologías)
- [Prerrequisitos del sistema](#prerrequisitos-del-sistema)
- [Instalación local paso a paso](#instalación-local-paso-a-paso)
- [Variables de entorno](#variables-de-entorno)
- [Ejecución](#ejecución)
- [Documentación interactiva de la API](#documentación-interactiva-de-la-api)
- [Endpoints principales](#endpoints-principales)
- [Documentación del código](#documentación-del-código)
- [Matriz de trazabilidad](#matriz-de-trazabilidad)
- [Estructura del proyecto](#estructura-del-proyecto)

## Descripción general

La API expone funcionalidades básicas para:
- **Aprendices:** registro y consulta de aprendices.
- **Evidencias:** carga de evidencias con validación de tamaño máximo y consulta por aprendiz.
- **Reportes:** generación de reportes consolidados en formato PDF o CSV.

> Nota: Este es un proyecto de ejemplo con respuestas simuladas (sin persistencia en base de datos real) orientado a evidenciar buenas prácticas de documentación.

## Tecnologías

- **Runtime:** Node.js
- **Framework web:** Express
- **Documentación de API:** swagger-jsdoc + swagger-ui-express (OpenAPI 3.0)
- **Configuración:** dotenv

## Prerrequisitos del sistema

Antes de instalar y ejecutar el proyecto, asegúrate de contar con:

- [Node.js](https://nodejs.org/) **v18.0.0** o superior (incluye npm)
- [npm](https://www.npmjs.com/) **v9+** (o el que incluya tu versión de Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)
- Un navegador web moderno (para visualizar Swagger UI)
- Editor de código recomendado: Visual Studio Code

Verifica las versiones instaladas:

```bash
node -v
npm -v
```

## Instalación local paso a paso

1. **Clonar o copiar el repositorio** en tu equipo:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd "guia 9"
   ```
   > Si ya tienes la carpeta del proyecto, omite el clonado y ubícate en la raíz del proyecto.

2. **Instalar las dependencias** del proyecto:
   ```bash
   npm install
   ```

3. **Crear el archivo de variables de entorno** a partir del ejemplo:
   - En Windows (PowerShell):
     ```powershell
     Copy-Item .env.example .env
     ```
   - En Linux/macOS:
     ```bash
     cp .env.example .env
     ```

4. **Configurar las variables** en el archivo `.env` según tu entorno (puerto, credenciales de BD, secretos, etc.). Para este proyecto de ejemplo, los valores por defecto son suficientes para ejecutar la API.

5. **Iniciar el servidor**:
   ```bash
   npm start
   ```
   Para desarrollo con recarga automática (Node 18+):
   ```bash
   npm run dev
   ```

6. **Verificar el estado** de la API:
   - Salud del servicio: [http://localhost:3000/health](http://localhost:3000/health)
   - Documentación interactiva: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Variables de entorno

El proyecto incluye un archivo de ejemplo [.env.example](.env.example). Cópialo como `.env` y ajusta los valores según sea necesario.

| Variable | Descripción | Ejemplo |
| --- | --- | --- |
| `PORT` | Puerto en el que se ejecuta el servidor HTTP | `3000` |
| `NODE_ENV` | Entorno de ejecución (`development`, `production`, `test`) | `development` |
| `DB_HOST` | Host del servidor de base de datos | `localhost` |
| `DB_PORT` | Puerto de la base de datos | `5432` |
| `DB_NAME` | Nombre de la base de datos | `sena_evidencias` |
| `DB_USER` | Usuario de la base de datos | `postgres` |
| `DB_PASSWORD` | Contraseña de la base de datos | `changeme` |
| `JWT_SECRET` | Secreto para firma de tokens JWT | `super_secreto_cambiar_en_produccion` |
| `JWT_EXPIRES_IN` | Tiempo de expiración del token JWT | `1d` |
| `UPLOAD_MAX_SIZE_MB` | Tamaño máximo permitido para evidencias (MB) | `10` |
| `UPLOAD_DIR` | Directorio local para almacenamiento de evidencias | `./uploads` |

> **Importante:** No comprometas el archivo `.env` en el control de versiones. Usa valores seguros en entornos productivos.

## Ejecución

```bash
# Producción / ejecución simple
npm start

# Desarrollo (watch mode, Node 18+)
npm run dev
```

Una vez iniciado, la consola mostrará:
- URL base del servidor: `http://localhost:3000`
- Documentación interactiva: `http://localhost:3000/api-docs`

## Documentación interactiva de la API

La API cuenta con documentación interactiva generada con **Swagger UI** (OpenAPI 3.0).

- **URL:** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- **Especificación:** generada automáticamente a partir de anotaciones JSDoc/OpenAPI en `src/routes/*.js` mediante `swagger-jsdoc`.

Desde la interfaz de Swagger puedes explorar los esquemas, parámetros y probar los endpoints directamente.

## Endpoints principales

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `/health` | Verificación de estado del servicio |
| `POST` | `/api/students` | Registrar un nuevo aprendiz |
| `GET` | `/api/students` | Listar aprendices (filtro opcional `?program=`) |
| `POST` | `/api/evidences` | Cargar una evidencia de aprendizaje |
| `GET` | `/api/evidences/student/:studentId` | Listar evidencias por aprendiz |
| `POST` | `/api/reports/student` | Generar reporte consolidado de un aprendiz |

## Documentación del código

Las funciones críticas del backend están documentadas usando el estándar **JSDoc**, incluyendo descripción, parámetros (`@param`) y valores de retorno (`@returns`). Funciones documentadas:

- `registerStudent` — `src/controllers/studentController.js`
- `listStudents` — `src/controllers/studentController.js`
- `uploadEvidence` — `src/controllers/evidenceController.js`
- `listEvidencesByStudent` — `src/controllers/evidenceController.js`
- `generateStudentReport` — `src/controllers/reportController.js`

## Matriz de trazabilidad

La Matriz de Trazabilidad de Requisitos (RTM), que vincula Historias de Usuario con su implementación y pruebas de calidad, se encuentra en:

- [docs/MATRIZ_TRAZABILIDAD.md](docs/MATRIZ_TRAZABILIDAD.md)

## Estructura del proyecto

```text
guia 9/
├─ docs/
│  └─ MATRIZ_TRAZABILIDAD.md
├─ src/
│  ├─ controllers/
│  │  ├─ evidenceController.js
│  │  ├─ reportController.js
│  │  └─ studentController.js
│  ├─ docs/
│  │  └─ swagger.js
│  ├─ routes/
│  │  ├─ evidenceRoutes.js
│  │  ├─ reportRoutes.js
│  │  └─ studentRoutes.js
│  ├─ services/
│  ├─ app.js
│  └─ index.js
├─ .env.example
├─ package.json
└─ README.md
```

## Licencia

MIT
