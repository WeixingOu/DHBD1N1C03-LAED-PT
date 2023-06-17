 const arrayHandler = (a, b) => {
    let text = "";
    if ( a.length !== b.length) {
        console.log("Los arreglos deben tener la misma longitud.");
        return;
    }
    
    for (let i = 0; i < a.length; i++) {
        console.log('Soy ' + a[i] + ' y yo soy ' +  b[i])
    }
};
arrayHandler([1, 2, 3, 4, 5], ["h", "o", "l", "a"]);