function menciona(texto, palabra) {
    x = texto.indexOf(palabra);
    if (x === -1) {
        return false;
    }
    else {
        return true;
    }
}
console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'));