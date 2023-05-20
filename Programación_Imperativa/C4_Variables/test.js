function anterior (numero) {
    return numero - 1
}

function triple (numero) {
    return numero * 3
}

function anteriorDelTriple (numero) {
    return anterior (triple(numero))
}

console.log(anterior(5)); // Resultado: 4
console.log(triple(7)); // Resultado: 21
console.log(anteriorDelTriple(2)); // Resultado: 5