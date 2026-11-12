/**
 * Registra un nuevo aprendiz en el sistema.
 * Valida los campos obligatorios y simula la persistencia del registro.
 *
 * @param {import('express').Request} req - Objeto de solicitud HTTP con los datos del aprendiz en `body`.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta JSON con el aprendiz creado o error de validación.
 */
async function registerStudent(req, res) {
  const { document, name, email, program } = req.body;

  if (!document || !name || !email) {
    res.status(400).json({ message: 'Los campos document, name y email son obligatorios.' });
    return;
  }

  const student = {
    id: Date.now().toString(),
    document,
    name,
    email,
    program: program || null,
    createdAt: new Date().toISOString(),
  };

  res.status(201).json({ message: 'Aprendiz registrado correctamente.', data: student });
}

/**
 * Obtiene el listado de aprendices registrados.
 * Permite filtrar por programa mediante un parámetro de consulta opcional.
 *
 * @param {import('express').Request} req - Objeto de solicitud HTTP. Puede incluir `query.program`.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta JSON con la colección de aprendices.
 */
async function listStudents(req, res) {
  const { program } = req.query;
  const students = [
    { id: '1', document: '1001', name: 'Ana Pérez', email: 'ana@example.com', program: 'ADSO' },
    { id: '2', document: '1002', name: 'Luis Gómez', email: 'luis@example.com', program: 'Multimedia' },
  ];

  const filtered = program ? students.filter((s) => s.program === program) : students;
  res.json({ total: filtered.length, data: filtered });
}

module.exports = {
  registerStudent,
  listStudents,
};
