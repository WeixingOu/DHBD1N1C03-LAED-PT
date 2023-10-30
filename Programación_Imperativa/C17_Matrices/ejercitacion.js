let arrayMatriz = [];
let arrayX=['x0','x1'];
let arrayY=['y0','y1'];
arrayMatriz[0] = arrayX;
arrayMatriz[1] = arrayY;
console.table(arrayMatriz);

// console.log(arrayMatriz[1][1]);

// arrayMatriz[1][0] = '99'; 
// console.table(arrayMatriz);

console.log(arrayMatriz.length)
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i][0])
}
