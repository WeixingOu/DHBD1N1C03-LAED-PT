const prompt = require("prompt-sync")({ sigint: true });
//festejo de cumpleaÃ±os
const nombre= prompt("Nombre del cliente:")
console.log(`Es ${nombre} `);
let cantidadInvitados = 30;
let cocineros = 4;
let mozos = 5;
let deNoche = true;
let salonIndoor =true;
let musica = "Reggaeton";
let bebidas = "Sin Alcohol";

console.log(cantidadInvitados);
console.log(cocineros);
console.log(mozos);
console.log(deNoche);
console.log(salonIndoor);
console.log(musica);
console.log(bebidas);

const invertidos = [
    cantidadInvitados, cocineros, mozos, deNoche, salonIndoor, musica, bebidas
];
console.log(invertidos.reverse());