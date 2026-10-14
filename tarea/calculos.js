// Rest operator para recibir notas variadas
export const promedio = (...notas) => 
  notas.reduce((acc, n) => acc + n, 0) / notas.length;

// Parámetro por defecto
export const estado = (nota, minima = 13) => 
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración y Template Literals
export const reporte = (estudiante) => {
  const { nombre, notas } = estudiante;
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};