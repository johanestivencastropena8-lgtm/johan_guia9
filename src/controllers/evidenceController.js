const MAX_SIZE_MB = Number(process.env.UPLOAD_MAX_SIZE_MB || 10);

/**
 * Carga una evidencia asociada a un aprendiz y valida el tamaño máximo permitido.
 * En un entorno real, el archivo se almacenaría en disco o en un servicio externo.
 *
 * @param {import('express').Request} req - Solicitud HTTP con metadatos del archivo en `body`.
 * @param {import('express').Response} res - Respuesta HTTP.
 * @returns {Promise<void>} Respuesta JSON con el resultado de la carga o un error si excede el límite.
 */
async function uploadEvidence(req, res) {
  const { studentId, filename, sizeMb, description } = req.body;

  if (!studentId || !filename || typeof sizeMb !== 'number') {
    res.status(400).json({ message: 'Campos requeridos: studentId, filename, sizeMb (número).' });
    return;
  }

  if (sizeMb > MAX_SIZE_MB) {
    res.status(413).json({
      message: `El archivo excede el límite permitido de ${MAX_SIZE_MB} MB.`,
    });
    return;
  }

  const evidence = {
    id: Date.now().toString(),
    studentId,
    filename,
    sizeMb,
    description: description || '',
    status: 'PENDING_REVIEW',
    uploadedAt: new Date().toISOString(),
  };

  res.status(201).json({ message: 'Evidencia cargada correctamente.', data: evidence });
}

/**
 * Consulta las evidencias registradas para un aprendiz específico.
 *
 * @param {import('express').Request} req - Solicitud HTTP con `params.studentId`.
 * @param {import('express').Response} res - Respuesta HTTP.
 * @returns {Promise<void>} Respuesta JSON con las evidencias asociadas al aprendiz.
 */
async function listEvidencesByStudent(req, res) {
  const { studentId } = req.params;

  const evidences = [
    {
      id: 'ev-1',
      studentId,
      filename: 'taller.pdf',
      sizeMb: 2.4,
      status: 'APPROVED',
      uploadedAt: '2026-11-10T10:00:00.000Z',
    },
  ];

  res.json({ studentId, total: evidences.length, data: evidences });
}

module.exports = {
  uploadEvidence,
  listEvidencesByStudent,
};
