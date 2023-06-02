const prompt = require("prompt-sync")({ sigint: true });

function mostrarFibonacci(hasta) {
    var secuencia = [0, 1]; // Inicializar la secuencia con los primeros dos números: 0 y 1
  
    while (secuencia[secuencia.length - 1] <= hasta) {
      // Agregar el siguiente número de Fibonacci a la secuencia
      var siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      secuencia.push(siguienteNumero);
    }
  
    // Mostrar la secuencia de Fibonacci hasta el valor ingresado
    for (var i = 0; i < secuencia.length; i++) {
      if (secuencia[i] <= hasta) {
        console.log(secuencia[i]);
      }
    }
  }
  
  // Ejemplo de uso: mostrar los números de Fibonacci hasta 100
  