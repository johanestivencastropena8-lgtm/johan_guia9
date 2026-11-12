const express = require('express');
const { generateStudentReport } = require('../controllers/reportController');

const router = express.Router();

/**
 * @openapi
 * /api/reports/student:
 *   post:
 *     summary: Generar reporte consolidado de un aprendiz
 *     tags: [Reportes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [studentId]
 *             properties:
 *               studentId:
 *                 type: string
 *                 example: "1"
 *               format:
 *                 type: string
 *                 enum: [pdf, csv]
 *                 example: "pdf"
 *     responses:
 *       201:
 *         description: Reporte generado correctamente
 *       400:
 *         description: Solicitud inválida
 */
router.post('/student', generateStudentReport);

module.exports = router;
