const prompt = require("prompt-sync")({ sigint: true });

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

console.log(`Suma -> ${sumar(num1, num2)}`);
console.log(`Resta -> ${restar(num1, num2)}`);
console.log(`Multiplicación -> ${multiplicar(num1, num2)}`);

if (num2 === 0) {
    console.log(`División -> Error`);
  } else {
    console.log(`División -> ${dividir(num1, num2)}`);
  }

console.log("-------------- Funciones Extras --------------");

const operacion = prompt("Elija una operación: Cuadrado, Promedio Porcentaje o Proporcion ").toLowerCase();
switch (operacion) {
    case "cuadrado":
        const  num = parseFloat(prompt("Ingrese el número: "));
        console.log(`Cuadrado de ${num} -> ${multiplicar(num, num)}`);
        break;
    case "promedio" :
        let num1 = parseFloat(prompt("Ingrese el primer número: "));
        let  num2 = parseFloat(prompt("Ingrese el segundo número: "));
        let  num3 = parseFloat(prompt("Ingrese el tercer número: "));
        console.log(`Promedio de ${num1}, ${num2}, ${num3} -> ${ dividir(sumar(sumar(num1, num2), num3), 3)}`)
        break;
    case "porcentaje" :
        let n = parseFloat(prompt("Ingrese el %: "));
        let  nTotal = parseFloat(prompt("Ingrese el total: "));
        console.log(`${n}% de ${nTotal} -> ${ multiplicar(nTotal, dividir(n, 100))}`)
        break;
    case "proporcion" :
        let m = parseFloat(prompt("Ingrese el primer número: "));
        let mTotal = parseFloat(prompt("Ingrese el segundo número: "));
        console.log(`El porcentaje de ${m} de ${mTotal} -> ${ dividir(multiplicar(m, 100), mTotal)} %`)
        break;
    default:
        console.log("Operación inválida");
}