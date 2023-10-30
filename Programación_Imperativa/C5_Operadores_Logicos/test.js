const prompt = require("prompt-sync")({ sigint: true });

// Función para sumar dos números
const suma = (a, b) => a + b;

// Función para restar dos números
const resta = (a, b) => a - b;

// Función para multiplicar dos números
const multiplicacion = (a, b) => a * b;

// Función para dividir dos números
const division = (a, b) => a / b;

// Función para calcular el cuadrado de un número
const cuadradoDeUnNumero = (numero) => multiplicacion(numero, numero);

// Obtener la operación deseada del usuario
const operacion = prompt("Elija una operación: suma, resta, multiplicacion, division o cuadrado").toLowerCase();

// Obtener los dos números del usuario
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

// Realizar la operación correspondiente
switch (operacion) {
  case "suma":
    resultado = suma(numero1, numero2);
    break;
  case "resta":
    resultado = resta(numero1, numero2);
    break;
  case "multiplicacion":
    resultado = multiplicacion(numero1, numero2);
    break;
  case "division":
    resultado = division(numero1, numero2);
    break;
  case "cuadrado":
    resultado = cuadradoDeUnNumero(numero1);
    break;
  default:
    resultado = "Operación inválida";
}

// Mostrar el resultado al usuario
console.log(`El resultado de la operación ${operacion} es: ${resultado}`);
