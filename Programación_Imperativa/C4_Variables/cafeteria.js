const prompt = require("prompt-sync")({ sigint: true });

// Variables
let tipoCafe = prompt("Tipo de café (ejemplo: Espresso, Latte, Cappuccino): ");
let cantidadCafe = prompt("Cantidad de café en gramos: ");
let cantidadAgua = prompt("Cantidad de agua en ml: ");
let cantidadLeche = prompt("Cantidad de leche en ml: ");
let azucar = prompt("¿Desea agregar azúcar? (si/no): ");
let cantidadAzucar = 0;

// Valores predefinidos
const precioCafe = 5;
const precioLeche = 2;

// Verificación de azúcar
if (azucar.toLowerCase() === "si") {
  cantidadAzucar = prompt("Cantidad de azúcar en gramos: ");
}

// Cálculo de precios
const totalCafe = precioCafe * cantidadCafe;
const totalLeche = precioLeche * cantidadLeche;
const total = totalCafe + totalLeche;

// Resultados
console.log("-".repeat(20));
console.log(`Tipo de café: ${tipoCafe}`);
console.log(`Cantidad de café: ${cantidadCafe} gr.`);
console.log(`Cantidad de agua: ${cantidadAgua} ml`);
console.log(`Cantidad de leche: ${cantidadLeche} ml`);
console.log(`Azúcar: ${azucar}`);
console.log(`Cantidad de azúcar: ${cantidadAzucar} gr.`);
console.log(`Total a pagar: $${total}`);