/* function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
} */

function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    }
    return a + b;
}

function resta(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    }
    return a - b;
}

function multiplicacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    }
    return a * b;
}

function division(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
        return 0;
    }
    return a / b;
}

module.exports = {suma, resta, multiplicacion, division};