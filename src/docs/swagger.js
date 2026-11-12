const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SENA Evidencias API',
      version: '1.0.0',
      description:
        'API de ejemplo para la gestión de aprendices, evidencias y reportes. Documentación interactiva generada con Swagger (OpenAPI 3.0).',
      contact: {
        name: 'Equipo de desarrollo',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local de desarrollo',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJsdoc(options);
