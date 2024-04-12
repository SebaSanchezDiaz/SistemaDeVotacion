class Encuesta {
  constructor(nombre) {
    this.nombre = nombre;
    this.preguntas = [];
  }

  mostrarNombreEncuesta(nombre) {
    console.log("El nombre de la encuesta es: " + this.nombre);
  }

  agregarPregunta(pregunta) {
    this.preguntas.push({ pregunta, votos: 0 });
  }

  mostrarPreguntas() {
    this.mostrarNombreEncuesta();
    this.preguntas.forEach((pregunta, indice) => console.log(pregunta, indice));
  }

  votarPregunta(indicePregunta) {
    if (indicePregunta >= 0 && this.preguntas.length) {
      this.preguntas[indicePregunta].votos++;
      // console.log(`¡Voto registrado para la pregunta ${indicePregunta + 1}!`);
    } else {
      console.log("Índice de pregunta inválido.");
    }
  }
}

//Uso
const encuesta = new Encuesta("Mi Primera Encuesta");

encuesta.agregarPregunta("Pregunta 1");
encuesta.agregarPregunta("Pregunta 2");
encuesta.agregarPregunta("Pregunta 3");

encuesta.votarPregunta(1);
encuesta.votarPregunta(1);
encuesta.votarPregunta(1);
encuesta.votarPregunta(1);

encuesta.mostrarPreguntas();
