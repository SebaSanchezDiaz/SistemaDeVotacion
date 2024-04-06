class Encuesta {
  constructor(nombre) {
    this.nombre = nombre;
    this.preguntas = [];
  }

  mostrarNombreEncuesta(nombre) {
    console.log("El nombre de la encuesta es: " + this.nombre);
  }

  agregarPreguntas(pregunta) {
    this.preguntas.push(pregunta);
  }

  mostrarPreguntas() {
    this.mostrarNombreEncuesta();
    this.preguntas.forEach((pregunta) => console.log(pregunta,indice));
  }

  votarPreguntas() {
    if (indicePregunta >= 0 && indicePregunta < this.preguntas.length) {
      this.preguntas[indicePregunta].votos++;
    } else {
      console.log("El índice de pregunta no es válido.");
    }
  }
}

//Uso
const encuesta = new Encuesta("Mi Primera Encuesta");

encuesta.agregarPreguntas("Pregunta 1");
encuesta.agregarPreguntas("Pregunta 2");
encuesta.agregarPreguntas("Pregunta 3");

encuesta.votarPregunta(0);
encuesta.votarPregunta(0);
encuesta.votarPregunta(1);

encuesta.mostrarPreguntas();
