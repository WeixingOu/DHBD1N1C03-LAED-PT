const loopDePares = (n) => {
    for (let i = 0; i <= 100 - n; i++) {
        console.log (i);
        if ( (n + i) % 2 === 0) {
            console.log ('El numero ' + (i + n) + ' es par')
        } else {
            console.log ('El numero ' + (i + n) + ' es impar')
        }
    }
}
loopDePares (15)