const loopDelImpares = (n, p) => {
    for (let i = 0; i <= 100; i++) {
        console.log (i);
        if ( (n + i) % 2 !== 0) {
            console.log (p)
        }
    }
}
loopDelImpares(15,'guau')