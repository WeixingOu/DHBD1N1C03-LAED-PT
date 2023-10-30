/* 
let edad = prompt("Ingresar edad");
if (edad <= 6) {
}
alert("No puede ingresar a la sala")
if (edad <= 13) {
}
alert("Necesitas ingresar con un adulto/a");
if (edad > 13) {
}
alert("Necesitas autorizacion de un adulto/a");
if (edad >= 18) {
    alert("Bienvenido al cine")
} 
*/

// Los bloques de condiciones { } están vacíos y no contienen instrucciones antes de las alertas.

// El código solo pide la edad del cliente, pero no pregunta si viene acompañado por un adulto o si tiene autorización (en caso de tener entre 14 y 17 años).

// No hay ningún código relacionado con los descuentos mencionados en los requerimientos.

// No hay evidencia en el código proporcionado de características relacionadas con la accesibilidad.


/*** Correcciones ***/

let edad = parseInt(prompt("Ingresar edad"));

if (edad <= 6) {
    alert("No puede ingresar a la sala");
} else if (edad <= 13) {
    alert("Necesitas ingresar con un adulto/a");
} else if (edad >= 14 && edad <= 17) {
    let autorizacion = prompt("¿Tienes autorización de un adulto? (si/no)");
    if (autorizacion.toLowerCase() === "si") {
        alert("Bienvenido al cine");
    } else {
        alert("Necesitas autorización de un adulto/a");
    }
} else {
    alert("Bienvenido al cine");
}
