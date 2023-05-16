const prompt = require("prompt-sync")({ sigint: true });

// Variables
let temperatura = prompt("Temperatura: ");
let lluvia = prompt("¿Está lloviendo? ");
let piso = prompt("Piso: ");
let horaActual = prompt("¿Que hora es? ");
let horaAperturaFiambreria = 9;
let horaCierreFiambreria = 21;
let cantidadQueso = 100;

// Valores predefinidos
const precioQueso = 25;

// Cálculo de precios
let deuda = cantidadQueso * precioQueso;

// Resultados
console.log("-".repeat(20));
console.log(`Temperatura: ${temperatura} C°`);
if (lluvia == "si") {
    console.log("Está lloviendo");
} else if (lluvia == "no") {
    console.log("No está lloviendo");
} else {
    console.log("Respuesta Invalida");
}
if (piso > 0) {
    console.log(`Tomar el ascensor en el piso ${piso}`);
} else {
    console.log("No necesito tomar el ascensor");
}
console.log(`Hora Actual: ${horaActual}`);
if (horaActual > horaAperturaFiambreria && horaActual < horaCierreFiambreria) {
    console.log("La fiambrería está abierta");
} else {
    console.log("La fiambrería está cerrada");
}
console.log(`Llevar ${cantidadQueso} gr. de Queso Dambo`);
console.log(`Mi deuda con Monica es de $${deuda}`);