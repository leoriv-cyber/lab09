export const curso = "Diseño de Interfaces";

const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] }
];

// Clonación y modificación con Spread
const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };

// Arreglo completo usando Spread
const todosEstudiantes = [...estudiantes, nuevoEstudiante];

export default todosEstudiantes;