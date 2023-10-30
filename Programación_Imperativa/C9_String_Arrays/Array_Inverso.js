const prompt = require("prompt-sync")({ sigint: true });

function imprimirInverso(array) {
    let arrayInverso = []
    for (let i = array.length -1; i >= 0; i--) {
        arrayInverso.push(array[i]);
    }
    return arrayInverso;
}
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(imprimirInverso(array));