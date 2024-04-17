const preguntasGuardadas = [];

function mostrarNombreEncuesta(nombre) {
  console.log("El nombre de la encuesta es: " + nombre);
}

function agregarPreguntas(pregunta) {
  pregunta.forEach((pregunta, indice) => {
    preguntasGuardadas.push({ id: indice, pregunta: pregunta, votos: 0 });
    return preguntasGuardadas;
  });
}

function mostrarPreguntas() {
  console.log("Preguntas guardadas:");
  preguntasGuardadas.forEach((pregunta) => {
    console.log(
      `Pregunta ${pregunta.id}: ${pregunta.pregunta} - Votos: ${pregunta.votos}`
    );
  });
}

function votarPreguntas(indicePregunta) {
  if (indicePregunta >= 0 && preguntasGuardadas.length) {
    preguntasGuardadas[indicePregunta].votos = preguntasGuardadas[
      indicePregunta
    ].votos
      ? preguntasGuardadas[indicePregunta].votos + 1
      : 1;
  } else {
    console.log("Índice de pregunta inválido.");
  }
}

function mostrarEncuesta(nombreEncuesta, preguntas) {
  mostrarNombreEncuesta(nombreEncuesta);
  agregarPreguntas(preguntas);
  mostrarPreguntas();
  votarPreguntas(5);
}

//Carga Variables
const nombreEncuesta = "Mi Primera Encuesta";
const preguntas = [
  "Pregunta 1",
  "Pregunta 2",
  "Pregunta 3",
  "Pregunta 4",
  "Pregunta 5",
  "Pregunta 6",
  "Pregunta 7",
  "Pregunta 8",
];

//Uso
mostrarEncuesta(nombreEncuesta, preguntas);

// mostrarNombreEncuesta(nombreEncuesta);

// agregarPreguntas(preguntas);
