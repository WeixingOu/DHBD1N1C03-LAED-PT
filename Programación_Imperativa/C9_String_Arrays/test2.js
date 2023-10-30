let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function mayuculas(array) {
    let result = [];
    for (let i =0; i < array.length; i++) {
        result.push(array[i].toUpperCase());
    }
    return result;
}
console.log(mayuculas(peliculas));