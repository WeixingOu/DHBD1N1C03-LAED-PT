/* 1) 
Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. */
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

/* 2)
Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; */
let array = [
    3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
    100,
];

let indice = 1;

const buscarValor = (array, indice) => {
    console.log(array[indice])
};
buscarValor(array, indice);


/* 3)
Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—. */
const diasDelMes = (numeros) => {
    if (numeros === 2) {
        return 28; 
    } else if (numeros === 4 || numeros === 6 || numeros === 9 || numeros === 11) {
        return 30; 
    } else {
        return 31; 
    }
};
console.log(diasDelMes(  ));

/* 4)
Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423. */
const inviertaNumero = (num) => {
    let numString = num.toString();
    let numInvertido = [];

    for (let i = numString.length - 1; i >= 0; i--) {
        numInvertido += numString[i];
    }

    return parseInt(numInvertido);
};
let numero = 123456; // Ejemplo: número a invertir

console.log("Número invertido: " + inviertaNumero(numero));

/*5) 
Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */
function imprimirValoresRepetidos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                console.log(array[i]);
                break;
            }
        }
    }
}
imprimirValoresRepetidos(array);