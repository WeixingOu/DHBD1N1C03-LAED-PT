function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

function calcular(operando1, operando2, operacion) {
    // Validación para operando1 y operando2 
    if (typeof operando1 !== "number" || typeof operando2 !== "number") {
        return "Error: Operandos deben ser números";
    }
    
    switch (operacion) {
        case "suma":
            return suma(operando1, operando2);
        case "resta":
            return resta(operando1, operando2);
        case "multiplicacion":
            return multiplicacion(operando1, operando2);
        case "division":
            return division(operando1, operando2);
        default:
            return "Error: Operación no reconocida";
    }
}

let operacionSuma = calcular(2, null, "suma");
console.log(operacionSuma);  // Error: Operandos deben ser números

let operacionResta = calcular("a", 3, "resta");
console.log(operacionResta);  // Error: Operandos deben ser números

let operacionMultiplicacion = calcular(5, 2.3, "multiplicacion");
console.log(operacionMultiplicacion);  // 11.5

let operacionDivision = calcular(20, 0, "division");
console.log(operacionDivision);  // Error: División por cero

let operacionSinDatos = calcular();
console.log(operacionSinDatos);  // Error: Operandos deben ser números
