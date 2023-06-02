const prompt = require("prompt-sync")({ sigint: true });

function noParesDeContarImparesHasta(X) {
    let count = 0;
    
    for (let i = 0; i <= X; i++) {
      if (i % 2 !== 0) {
        count++;
      }
    }
    console.log(count);
    return count;
}

let x = parseInt(prompt('Ingrese el numero: '));
noParesDeContarImparesHasta(x);

