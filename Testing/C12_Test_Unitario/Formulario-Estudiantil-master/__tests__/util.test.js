const { generateText, validateInput } = require('../util');

describe('Util functions', () => {
    // Tests para generateText
    describe('generateText', () => {
        // Test positivo
        test('should generate text for valid age between 18 and 65', () => {
            const result = generateText('John', 25, 'Advanced');
            expect(result).toBe('Registro OK de John en: Advanced.');
        });

        // Test negativo
        test('should return message for age greater than 65', () => {
            const result = generateText('Jane', 70, 'Beginner');
            expect(result).toBe('No pudimos registrar a: Jane. Por favor contactá a soporte@dh.com para más información.');
        });

        // Test negativo
        test('should return message for invalid age', () => {
            const result = generateText('Alex', 15, 'Intermediate');
            expect(result).toBe('Edad ingresada no válida. Por favor intentá nuevamente.');
        });
    });

      // Tests para validateInput
    describe('validateInput', () => {
        // Test positivo
        test('should return true for valid non-empty text', () => {
            const result = validateInput('Mike', true);
            expect(result).toBeTruthy();
        });

        // Test negativo
        test('should return false for empty text when notEmpty is true', () => {
            const result = validateInput('   ', true);
            expect(result).toBeFalsy();
        });

        test('should return false for null or undefined or empty string input', () => {
            expect(validateInput(null, true)).toBeFalsy();
            expect(validateInput(undefined, true)).toBeFalsy();
            expect(validateInput('', true)).toBeFalsy();
        });
    });
});