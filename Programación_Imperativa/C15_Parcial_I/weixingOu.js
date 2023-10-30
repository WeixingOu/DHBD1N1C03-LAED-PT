/* Ejercicio 1: 
Desarrollar una función para cada uno de las siguientes apartados: 
Que reciba por parámetro 1 número, le sume 10, y verifique que si ese resultado es múltiplo de 5. Si lo es, tiene que retornar la frase:  ‘[número] + 10 es múltiplo de 5’, sino, retornará ‘[número] + 10 no es múltiplo de 5’.
Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
Que acepte un arreglo de números y devuelva la suma de todos ellos. */

const verificarMultiploCinco = (numero) => {
    if ( (numero + 10) % 5 === 0) {
        return `${numero} + 10 es multiplo de 5`;
    } else {
        return `${numero} + 10 no es multiplo de 5`;
    }
};
console.log(verificarMultiploCinco(25));

const multiplicar = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplicar(2,3));

const sumaArrgloNumeros = (arreglo) => {
    let suma = 0;
    for ( let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
};
const numeros = [1, 2, 3, 4, 5];
console.log(sumaArrgloNumeros(numeros));


/* Ejercicio 2: 
1. Deberás escribir un objeto literal llamado empresa que contenga las siguientes propiedades que deberás completar con tus datos:
nombre string
actividad string
sueldos array de 10 números
2. Crear un método del objeto que calcule los sueldos que paga la empresa y si supera los 200.000 retornará:  ‘La empresa [nombre] se encuentra en quiebra ya que su pago de sueldos es de  [sueldos] por lo tanto, necesita hacer un ajuste en sus empleados’ , y si no retornará: ‘La empresa [nombre] esta bien economicamente, ya que su pago de sueldos es de [sueldos] por lo tanto, NO necesita hacer un ajuste en sus empleados’ */

let empresa = {
    nombre: 'Weixing',
    actividad: 'Desarrollo web full stack',
    sueldos: [1000, 1300, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3100],

    pagoSueldos: function () {
        let totalSueldos = sumaArrgloNumeros(empresa.sueldos);
        if ( totalSueldos > 200000) {
            return `La empresa ${this.nombre} se encuentra en quiebra ya que su pago de sueldos es de ${totalSueldos}, por lo tanto, necesita hacer un ajuste en sus empleados.`
        } else {
            return `La empresa ${this.nombre} está bien económicamente, ya que su pago de sueldos es de ${totalSueldos}, por lo tanto, NO necesita hacer un ajuste en sus empleados.`;
        }
    }
};
console.log(empresa);
console.log(empresa.pagoSueldos());

/*Ejercicio 3:
Deberás agregarlos al array utilizando un método de array.
Mostrar por consola el array para ver que contenga esos objetos.
Deberás crear una función que reciba el array libros como parámetro, y si el año de lanzamiento es anterior a 2020, deberá agregar una propiedad a cada objeto que se llame época y tenga el valor pre-pandemia, si el año es posterior o igual a 2020 el valor de la propiedad época será post-pandemia.
*/
let libros = [];

let historiasInconscientes = {
  anio: 2013,
  autor: "Gabriel Rolón",
  paginas: 352
};

let elAlquimista = {
  anio: 1988,
  autor: "Paulo Coehlo",
  paginas: 192
};

let elCampamento = {
  anio: 2021,
  autor: "Blue Jeans",
  paginas: 480
};

let operacionMasacre = {
  anio: 2009,
  autor: "Rodolfo Walsh",
  paginas: 236
};

libros.push(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre);
console.log(libros);

const agregarEpoca = (libros) => {
    for ( let i = 0; i < libros.length; i++) {
        if ( libros[i].anio < 2020) {
            libros[i].epoca = 'pre-pandemia';
        } else {
            libros[i].epoca = 'post-pandemia';
        }
    };
};
agregarEpoca(libros);
console.log(libros);