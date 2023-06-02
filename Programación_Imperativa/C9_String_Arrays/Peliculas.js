const prompt = require("prompt-sync")({ sigint: true });

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function mayuculas(array) {
    let resultado = [];
    for (let i =0; i < array.length; i++) {
        resultado.push(array[i].toUpperCase());
    }
    return resultado;
}
console.log(mayuculas(peliculas));

function combinarPeliculas(ay1, ay2) {
    let videojuego = ay2.pop();
    let peliculasCombinadas = ay1.concat(ay2);
    return peliculasCombinadas;
}

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
console.log(mayuculas(combinarPeliculas(peliculas, peliculasAnimadas)));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificacion(c1, c2) {

    for (let i = 0; i < c1.length; i++) {
        if (c1[i] !== c2[i]) {
          return "Las calificaciones son diferentes";
        } 
    }
    return "Las calificaciones son iguales";
}

console.log(compararCalificacion(asiaScores,euroScores));