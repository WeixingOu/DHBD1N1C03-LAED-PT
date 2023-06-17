let matriz = [
    [1, 3, 5, 7],
    [0, 2, 4, 6],
    [8, 9, 10, 11]
];
for (let i=0;i<matriz[1].length;i++){
console.log(matriz[1][i]);} // Obtenemos 0, 2, 4, 6.

for (let i=0;i<matriz.length;i++){
console.log(matriz[i][2]);} // Obtenemos 5, 4, 10.


for (let fila=0;fila<matriz.length;fila++){
    for(let columna=0;columna<matriz[fila].length;columna++){
    console.log(matriz[fila][columna]);}
}; // Lo que obtendremos será 1,3,5,7, 0,2,4,6,8,9,10,11.
