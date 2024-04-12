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
    this.preguntas.forEach((indice, pregunta) => console.log(indice, pregunta));
  }

  votarPregunta(indicePregunta) {
    if (indicePregunta >= 0 && this.preguntas.length) {
      this.preguntas[indicePregunta].votos++;
    } else {
      console.log("Índice de pregunta inválido.");
    }
  }
}



//Uso
//Para crear la encuesta.
const encuesta = new Encuesta("Mi Primera Encuesta");

//Para agregar las preguntas a mi encuesta
encuesta.agregarPregunta("Pregunta 1");
encuesta.agregarPregunta("Pregunta 2");
encuesta.agregarPregunta("Pregunta 3");
encuesta.agregarPregunta("Pregunta 4");
encuesta.agregarPregunta("Pregunta 5");
encuesta.agregarPregunta("Pregunta 6");
encuesta.agregarPregunta("Pregunta 7");
encuesta.agregarPregunta("Pregunta 8");

//Votar por mis preguntas, usando el indice de cada pregunta
encuesta.votarPregunta(1);
encuesta.votarPregunta(1);
encuesta.votarPregunta(1);
encuesta.votarPregunta(1);

encuesta.votarPregunta(2);
encuesta.votarPregunta(2);
encuesta.votarPregunta(0);
encuesta.votarPregunta(0);

//Muestra mi encuesta
encuesta.mostrarPreguntas();
