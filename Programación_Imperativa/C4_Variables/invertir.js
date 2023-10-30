// Variables
let cajonPantalones = "remeras"; 
let cajonRemeras = "pantalones";  

console.log("Antes de invertir:");
console.log(`Cajon Pantalones: ${cajonPantalones}`);
console.log(`Cajon Remeras: ${cajonRemeras}`);

// Hr
console.log("-".repeat(20));

// Invertir contenido
let CajonVacio = cajonRemeras;
cajonRemeras = cajonPantalones;
cajonPantalones = CajonVacio;

console.log("Después de invertir:");
console.log(`Cajon Pantalones: ${cajonPantalones}`);
console.log(`Cajon Remeras: ${cajonRemeras}`);