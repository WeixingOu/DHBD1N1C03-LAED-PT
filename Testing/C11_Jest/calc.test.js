const { suma, resta, multiplicacion, division } = require('./calc');

describe('Función suma', () => {
    test('Suma 1 + 2 correctamente', () => {
        expect(suma(1, 2)).toBe(3);
    });

    test('Suma con texto devuelve 0', () => {
        expect(suma("1", 2)).toBe(0);
    });

    test('Suma con valores nulos devuelve 0', () => {
        expect(suma(null, 2)).toBe(0);
    });

    test('Suma con valores no definidos devuelve 0', () => {
        expect(suma(undefined, 2)).toBe(0);
    });
});

// ***************************************** //

describe('Función resta', () => {
    test('Resta 2 - 3 correctamente', () => {
        expect(resta(2, 3)).toBe(-1);
    });
    test('Resta con texto devuelve 0', () => {
        expect(resta("3", 2)).toBe(0);
    });

    test('Resta con valores nulos devuelve 0', () => {
        expect(resta(null, 2)).toBe(0);
    });

    test('Resta con valores no definidos devuelve 0', () => {
        expect(resta(undefined, 2)).toBe(0);
    });
});

// ***************************************** //

describe('Función multiplicación', () => {
    test('Multiplica 2 * 3 correctamente', () => {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    test('Multiplicación con texto devuelve 0', () => {
        expect(multiplicacion("2", 3)).toBe(0);
    });

    test('Multiplicación con valores nulos devuelve 0', () => {
        expect(multiplicacion(null, 3)).toBe(0);
    });

    test('Multiplicación con valores no definidos devuelve 0', () => {
        expect(multiplicacion(undefined, 3)).toBe(0);
    });
});

// ***************************************** //

describe('Función división', () => {
    test('Divide 4 / 2 correctamente', () => {
        expect(division(4, 2)).toBe(2);
    });

    test('División con texto devuelve 0', () => {
        expect(division("4", 2)).toBe(0);
    });

    test('División con valores nulos devuelve 0', () => {
        expect(division(null, 2)).toBe(0);
    });

    test('División con valores no definidos devuelve 0', () => {
        expect(division(undefined, 2)).toBe(0);
    });

    test('División por cero devuelve 0', () => {
        expect(division(4, 0)).toBe(0);
    });
});