function mostrarNombreEncuesta(nombre) {
  console.log("El nombre de la encuesta es: " + nombre);
}

function agregarPregunta(pregunta, preguntas) {
  preguntas.push({ pregunta, votos: 0 });
}

function mostrarPreguntas(nombreEncuesta, preguntas) {
  mostrarNombreEncuesta(nombreEncuesta);
  preguntas.forEach((pregunta, indice) => console.log(indice, pregunta));
}

function votarPregunta(indicePregunta) {
  if (indicePregunta >= 0 && indicePregunta < preguntas.length) {
    preguntas[indicePregunta].votos++;
  } else {
    console.log("Índice de pregunta inválido.");
  }
}

// Ejemplo de uso:
const nombreEncuesta = "Encuesta de Ejemplo";
const preguntas = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4"];

mostrarPreguntas(nombreEncuesta, preguntas);
