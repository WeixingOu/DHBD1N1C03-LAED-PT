const prompt = require("prompt-sync")({ sigint: true });

// Un valor por parámetro y muestre los 10 números siguientes.
function siguientesNumeros(n) {
    for(let i = n + 1; i <= n + 10; i++)
    console.log(i);
}
let sN = parseInt(prompt("Ingresa un número: "));
siguientesNumeros(sN);

// Los números entre el 5 y el 20, saltando de tres en tres.
for(i = 5; i <= 20; i += 3) {
    console.log(i)
}

// La sumatoria de todos los números entre el 0 y el 100
let n = 0;
for (let i = 0; i <= 100; i++) {
    n += i;
}
console.log(n);

// Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
let f = 1;
function factorial(n) {
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
}
let eP = parseInt(prompt("Ingresa un número: "));
factorial(eP);
console.log(f);

// Todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
function fitbonacci(n) {
    let n1 = 0;
    let n2 = 1;

    for (let i = 1; n >= 1; i++) {
        let nf = n1 + n2;
        n1 = n2;
        n2 = nf;
        n--;
        console.log(nf);
    }
}
let x = parseInt(prompt("Ingresa un número: "));
fitbonacci(x);
// function fibonacci(n) {
// //    0 1 1 2 3 5 8 13 21 34
//     if (n === 1) return 0; // pos 1
//     if (n === 2) return 1; // pos 2
//     let anterior = 0;
//     let anterior1 = 1;
//     let sum = 0;
//     while (n >= 3) {
//         sum = anterior + anterior1;
//         anterior = anterior1;
//         anterior1 = sum;
//         n--;
//     }
//     return sum;
//    //return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(10));