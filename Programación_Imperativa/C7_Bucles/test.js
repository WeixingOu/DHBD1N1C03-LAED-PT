const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Ingresa un número: "));
mostrarNumerosSiguientes(num);
function mostrarNumerosSiguientes(numero) {
    for (let i = numero + 1; i <= numero + 10; i++) {
      if (i >= 5 && i <= 20 && (i - 5) % 3 === 0) {
        console.log(i);
      }
      else (console.log("w" + i))
    }
  }
  