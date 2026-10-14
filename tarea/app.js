import todosEstudiantes, { curso } from './datos.js';
import { reporte } from './calculos.js';

// 1. Mostrar en Consola
console.log(`Curso: ${curso}`);
todosEstudiantes.forEach((est) => console.log(reporte(est)));

// 2. Renderizar en el HTML (usando los IDs de tu index.html)
const listaUl = document.getElementById('lista');
const totalP = document.getElementById('total');

if (listaUl) {
  listaUl.innerHTML = todosEstudiantes
    .map((est) => `<li>${reporte(est)}</li>`)
    .join('');
}

if (totalP) {
  totalP.textContent = `Curso: ${curso}`;
}