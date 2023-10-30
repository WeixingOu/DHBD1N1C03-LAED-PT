/* Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos */
const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];  
/* Luego, escribe un algoritmo para sumar todos los numeros en la matriz. */

let sumaTotal = 0;
for (let x = 0; x < matriz.length; x++) {
    for (let y = 0; y < matriz[x].length; y++) {
      sumaTotal += matriz[x][y];
    }
}
console.log(sumaTotal);

// Crear una función que genere una matriz de 10x10.
const genereMatriz = (fila, columna) => {
    const matriz = [];
    let contador = 1;

    for (let x = 0; x < fila; x++) {
        let fila = [];

        for (let y = 0; y < columna; y++) {
            fila.push(contador++);
        }
        matriz.push(fila);
    }
    return matriz
};
console.table(genereMatriz(10, 10));

const sumaDiagonal = (matriz) => {
    let sumaTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumaTotal += matriz[i][i];
    }
    return sumaTotal;
};
console.log(sumaDiagonal(genereMatriz(10, 10)));

const sumaDiagonalInversa = (matriz) => {
    let sumaTotal = 0;
    for (let i = matriz.length - 1; i >= 0; i--) {
        sumaTotal += matriz[i][i];
    }
    return sumaTotal;
};
console.log(sumaDiagonalInversa(genereMatriz(10, 10)));