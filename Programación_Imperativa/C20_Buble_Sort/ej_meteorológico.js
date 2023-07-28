/* El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */
let temperaturas = [
    { dia: 1, mes: 1, temperaturaMaxima: 25, temperaturaMinima: 15 },
    { dia: 2, mes: 1, temperaturaMaxima: 28, temperaturaMinima: 18 },
    { dia: 3, mes: 1, temperaturaMaxima: 23, temperaturaMinima: 12 },
];
for (let i = 0; i < temperaturas.length; i++) {
    for (let j = 0; j < temperaturas.length - 1; j++) {
        if (temperaturas[j].temperaturaMinima > temperaturas[j + 1].temperaturaMinima) {
            let temp = temperaturas[j].temperaturaMinima;
            temperaturas[j].temperaturaMinima = temperaturas[j + 1].temperaturaMinima;
            temperaturas[j + 1].temperaturaMinima = temp;
        }
    }
}
console.log(temperaturas)
for (let i = 0; i < temperaturas.length; i++) {
    for (let j = 0; j < temperaturas.length - 1; j++) {
        if (temperaturas[j].temperaturaMaxima < temperaturas[j + 1].temperaturaMaxima) {
            let temp = temperaturas[j].temperaturaMaxima;
            temperaturas[j].temperaturaMaxima = temperaturas[j + 1].temperaturaMaxima;
            temperaturas[j + 1].temperaturaMaxima = temp;
        }
    }
}
console.log(temperaturas)