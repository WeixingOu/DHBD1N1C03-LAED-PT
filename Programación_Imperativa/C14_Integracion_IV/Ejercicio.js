const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// Obtener en un nuevo array las edades menores a 18.
const edadesMenores = edades.filter( (edad) => edad < 18);
console.log(edadesMenores);

// Obtener en un nuevo array las edades mayor o igual a 18.
const edadesMayores = edades.filter( (edad) => edad > 18);
console.log(edadesMayores);

// Obtener en un nuevo array las edades igual a 18.
const edades18 = edades.filter( (edad) => edad === 18);
console.log(edades18);

// Obtener el menor.
const menorEdad = Math.min(...edades);
console.log(menorEdad);

// Obtener el mayor. 
const mayorEdad = Math.max(...edades);
console.log(mayorEdad);

// Obtener el promedio de edades.
const promedioEdad = edades.reduce( (acumulador, edad) => acumulador + edad, 0) / edades.length;
console.log(promedioEdad);

// Incrementar en 1 todas las edades.
const edadesIncrementadas = edades.map( (edad) => edad + 1);
console.log(edadesIncrementadas);