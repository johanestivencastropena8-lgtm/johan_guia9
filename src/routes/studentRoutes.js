const express = require('express');
const { registerStudent, listStudents } = require('../controllers/studentController');

const router = express.Router();

/**
 * @openapi
 * /api/students:
 *   post:
 *     summary: Registrar un nuevo aprendiz
 *     tags: [Aprendices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [document, name, email]
 *             properties:
 *               document:
 *                 type: string
 *                 example: "1098765432"
 *               name:
 *                 type: string
 *                 example: "Ana Pérez"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ana@example.com"
 *               program:
 *                 type: string
 *                 example: "ADSO"
 *     responses:
 *       201:
 *         description: Aprendiz registrado correctamente
 *       400:
 *         description: Datos de entrada inválidos
 */
router.post('/', registerStudent);

/**
 * @openapi
 * /api/students:
 *   get:
 *     summary: Listar aprendices registrados
 *     tags: [Aprendices]
 *     parameters:
 *       - in: query
 *         name: program
 *         schema:
 *           type: string
 *         description: Filtrar por programa de formación
 *     responses:
 *       200:
 *         description: Listado de aprendices
 */
router.get('/', listStudents);

module.exports = router;
