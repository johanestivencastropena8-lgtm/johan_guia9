/**
 * Genera un reporte consolidado de evidencias por aprendiz en el formato solicitado.
 * Simula la construcción de un reporte y devuelve metadatos del archivo generado.
 *
 * @param {import('express').Request} req - Solicitud HTTP con `body.studentId` y `body.format` (pdf|csv).
 * @param {import('express').Response} res - Respuesta HTTP.
 * @returns {Promise<void>} Respuesta JSON con la información del reporte generado.
 */
async function generateStudentReport(req, res) {
  const { studentId, format = 'pdf' } = req.body;

  if (!studentId) {
    res.status(400).json({ message: 'El campo studentId es obligatorio.' });
    return;
  }

  const allowedFormats = ['pdf', 'csv'];
  if (!allowedFormats.includes(format)) {
    res.status(400).json({ message: `Formato no soportado. Use uno de: ${allowedFormats.join(', ')}` });
    return;
  }

  const report = {
    reportId: `RPT-${Date.now()}`,
    studentId,
    format,
    status: format === 'pdf' ? 'READY' : 'READY',
    generatedAt: new Date().toISOString(),
    downloadUrl: `/downloads/${studentId}-report.${format}`,
  };

  res.status(201).json({ message: 'Reporte generado correctamente.', data: report });
}

module.exports = {
  generateStudentReport,
};
