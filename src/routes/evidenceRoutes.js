const express = require('express');
const { uploadEvidence, listEvidencesByStudent } = require('../controllers/evidenceController');

const router = express.Router();

/**
 * @openapi
 * /api/evidences:
 *   post:
 *     summary: Cargar una evidencia de aprendizaje
 *     tags: [Evidencias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [studentId, filename, sizeMb]
 *             properties:
 *               studentId:
 *                 type: string
 *                 example: "1"
 *               filename:
 *                 type: string
 *                 example: "taller_documentacion.pdf"
 *               sizeMb:
 *                 type: number
 *                 example: 2.4
 *               description:
 *                 type: string
 *                 example: "Evidencia de la guía 9"
 *     responses:
 *       201:
 *         description: Evidencia cargada correctamente
 *       400:
 *         description: Datos inválidos
 *       413:
 *         description: Archivo excede el tamaño máximo permitido
 */
router.post('/', uploadEvidence);

/**
 * @openapi
 * /api/evidences/student/{studentId}:
 *   get:
 *     summary: Listar evidencias por aprendiz
 *     tags: [Evidencias]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador del aprendiz
 *     responses:
 *       200:
 *         description: Evidencias del aprendiz
 */
router.get('/student/:studentId', listEvidencesByStudent);

module.exports = router;
