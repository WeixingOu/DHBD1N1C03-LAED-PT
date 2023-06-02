const prompt = require("prompt-sync")({ sigint: true });
function sumaNaturales(N) {
  let suma = 0;
  for (let i = 1; i <= N; i++) {
      suma += i;
      console.log(suma);
  }
  return suma;
}
let N = parseInt(prompt('Ingrese el numero limite: '));
console.log('La suma de los ' + N + ' primeros números naturales es: ' + sumaNaturales(N));
