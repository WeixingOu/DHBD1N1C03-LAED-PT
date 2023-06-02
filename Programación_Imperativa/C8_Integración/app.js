const prompt = require("prompt-sync")({ sigint: true });

console.log ('---------- 1 ----------');
console.log (prompt ('Ingrese una frase: '));

console.log ('---------- 2 ----------');
console.log ('Hola' + ' ' + prompt('Ingrese su nombre: ') + '!');

console.log ('---------- 3 ----------');
console.log (parseInt(prompt('Ingrese el primer número: ')) + parseInt(prompt('Ingrese el segundo número: ')));

console.log ('---------- 4 ----------');
console.log ('Tienes' + ' ' + (2023 - parseInt(prompt('Ingrese su año de nacimiento: '))) + ' ' + 'años');

console.log ('---------- 5 ----------');
let nRandom = Math.floor(Math.random()*10)+1;
let nAdivina = parseInt(prompt('Adivina el número (entre 1 y 10): '));
nRandom === nAdivina ? console.log('¡Felicitaciones, ese era!'):console.log('Lo siento, intenta nuevamente!');

console.log ('---------- 6 ----------');
for (i = 0; i <= 100; i+=2) {
    console.log(i)
}

console.log ('---------- 7 ----------');
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

console.log ('---------- 8 ----------');
let nPorcen = parseInt(prompt('Ingrese un numero: '));
nPorcen > 500 ? console.log('El 18% de ' + nPorcen + ' es: ' + (nPorcen * 0.18)):console.log('El número ingresado no es mayor a 500');

console.log ('---------- 9 ----------');
const elemento = (arreglo) => {
    if (arreglo.length >= 3) {
        return arreglo[2];
    } else {
        return -1;
    }
  }
let nPosicion = prompt("Ingresa un arreglo de números separados por comas: ")
console.log("El valor en la tercera posición es: " + elemento(nPosicion.split(',')));

console.log ('---------- 10 ----------');
let nNatural = parseInt(prompt('Ingrese un numero: '));
if (nNatural < 10) {
    let faltante = 10 - nNatural;
    console.log("Falta " + faltante + " para ser un número de 2 cifras.");
  } else if (nNatural < 100) {
    let faltante = 100 - nNatural;
    console.log("Falta " + faltante + " para ser un número de 3 cifras.");
  } else {
    console.log("El número ingresado tiene más de 2 cifras.");
}

console.log ('---------- 11 ----------');
let notasString = prompt("Ingrese las notas: ");
let notasArray = notasString.split(' ');
let Nnotas = notasArray.length;
let sumNotas = 0;
for (let i = 0; i < Nnotas; i++) {
    let nota = parseFloat(notasArray[i]);
    sumNotas += nota;
}
let promedio = sumNotas / Nnotas;
console.log("El promedio de las " + Nnotas + " notas ingresadas es: " + promedio);

console.log ('---------- 12 ----------');
function sumaNaturales(N) {
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    return suma;
}
let N = parseInt(prompt('Ingrese el numero limite: '));
console.log('La suma de los ' + N + ' primeros números naturales es: ' + sumaNaturales(N));