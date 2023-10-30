let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];
let suma = 0;
for ( let x = 0; x < numeros.length; x++) {
    for ( let y = 0; y < numeros[x].length; y++) {
        if ( numeros[x][y] >= 10 && numeros[x][y] < 1000) {
            suma += numeros[x][y];

        }
    }
}
console.log(suma);