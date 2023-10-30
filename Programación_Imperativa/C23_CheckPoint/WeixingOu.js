let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trigal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]

/* Ejercicio 1: 
Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array con los objetos cuyo año de creación sea mayor a 1800. */
const filtrarCuadros = (arr) => {
    let cuadrosFiltrados = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].creacion > 1800) {
            cuadrosFiltrados.push(arr[i])
        }
    }
    return cuadrosFiltrados;
}
console.log(filtrarCuadros(cuadros));

/* Ejercicio 2:
Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 y un String. Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort según su año de  creación de forma ascendente o descendente según lo indique el string recibido por parámetro, teniendo en cuenta los siguientes criterios:
Si el String es “ASC” o “asc” encontes ordenar de menor a mayor
Si el String es “DESC” o “desc” entonces ordenar de mayor a menor */
const ordenarCuadros = (arr, str) => {
    str = str.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (str === 'asc' && arr[j].creacion > arr[j + 1].creacion) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else if (str === 'desc' && arr[j].creacion < arr[j + 1].creacion) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(ordenarCuadros(cuadros, 'ASC'));
console.log(ordenarCuadros(cuadros, 'DESC'));


/* Ejercicio 3:
Desarrollar una función que retorne la suma de todos los valores de la fila 2. */
let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
const sumarFila2 = (matriz) => {
    let suma = 0;
    for (i = 0; i < matriz[1].length; i++) {
        suma += matriz[1][i];
    }
    return suma;
}
console.log(sumarFila2(matriz));

/* 
Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares que se encuentren dentro de la matriz. */
const filtrarPares = (matriz) => {
    const elementosPares = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if ( matriz[i][j] % 2 === 0) {
                elementosPares.push(matriz[i][j]);
            }
        }
    }
    return elementosPares;
}
console.log (filtrarPares(matriz));