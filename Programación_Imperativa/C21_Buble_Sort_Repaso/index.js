/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 */

function mostrarDecimales() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
mostrarDecimales();

/* Crear una función que imprima los números entre el 5 y el 20, saltando de tres en tres. */
const mostrarEnTres = () => {
    for (let i = 5; i <= 20; i += 3) {
        console.log(i)
    }
}
mostrarEnTres();

/* Crear una función que imprima la sumatoria de todos los números entre el 0 y el 100. */
const sumatoriaCien = () => {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(`la sumatoria de todos los numeros entre el 0 y el cien: ${sum}`);
}
sumatoriaCien();

/**
 * Crear una función que reciba un
 * string y luego imprimir la
 *  cantidad de vocales que se
 *  encuentran en dicha frase.
 */
const contarVocales = (str) => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letras of str) {
        if (vocales.includes(letras.toLowerCase())) {
            cantidadVocales++;
        }
    }
    console.log(`La cantidad de vocales de ${str} : ${cantidadVocales}`)
}
contarVocales('hola como estas');

/**
 * Realizar una función que, dada
 *  una lista, devuelva una nueva lista
 *  cuyo contenido sea igual a la
 *  original pero invertida.
 */
const invertirLista = list => {
    console.log(list.slice().reverse())
}
invertirLista(['h','o','l','a'])

/**
 * Realiza una función que escriba
 *  una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
 */
function imprimirPiramide() {
  for (let i = 1; i <= 30; i++) {
    let linea = '';
    for (let j = 0; j < i; j++) {
      linea += i;
    }
    console.log(linea);
  }
}
imprimirPiramide();
