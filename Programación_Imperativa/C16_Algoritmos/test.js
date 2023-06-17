function imprimirValoresRepetidos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                console.log(array[i]);
                break;
            }
        }
    }
}

let miArray = [1, 2, 3, 4, 2, 3, 5, 6, 4, 5];
imprimirValoresRepetidos(miArray);