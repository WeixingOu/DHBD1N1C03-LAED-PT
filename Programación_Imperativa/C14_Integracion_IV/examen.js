/*Ejercicio 1:  
Declarar tres variables y asignarles un número entero a las tres.
Crear una función que reciba tres parámetros, que pregunte:
Si el primero es mayor que el segundo, debe devolver la multiplicación del segundo por el tercero.
Si el segundo es par, que devuelva un texto que concatene al segundo número con un texto que diga ‘es par’.
Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma de estos tres números es múltiplo de 3.
Invocar a la función pasándole por parámetros las tres variables declaradas en el punto */

let num1 = 7;
let num2 = 6;
let num3 = 4;

function multiplicar(num1, num2, num3) {
    if (num1 > num2) {
        console.log(num2*num3);
    } else if (num2 % 2 === 0) {
        console.log(num2 + "es par");
    } else if ((num1 + num2 + num3) %3 === 0 ) {
        console.log("la suma de estos 3 numeros es multiplo de 3");
    } 
    else{
        console.log("no cumple ninguna condicion");
    }
        return multiplicar
}

let multiplicacion = multiplicar(num1,num2,num3)
//console.log(multiplicacion);


/*Ejercicio 2:
Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
nombre 
apellido
edad
estaEmpleado (bool)
Declarar un función que:
Si la edad es mayor a 18 años y está empleado, devolverá una frase que diga: [nombre] [apellido] está empleado y es mayor de edad.
Si es mayor de edad pero no está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y es mayor de edad.
Si no es mayor ni está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y NO es mayor de edad.*/

let empleado = {
    nombre: "Franco",
    apellido: "Sosto",
    edad: 21,
    estaEmpleado: true
}

function ejercicio2(objeto) {
    if (objeto.edad >= 18 && objeto.estaEmpleado === true) {
        console.log(objeto.nombre  + objeto.apellido + " esta empleado y es mayor de edad");
    }
     else if  (objeto.edad >= 18 && objeto.estaEmpleado === false) {
        console.log(objeto.nombre  + objeto.apellido + " No esta empleado y es mayor de edad");
    } 
    else if (objeto.edad < 18 && objeto.estaEmpleado === false ) {
        console.log(objeto.nombre  + objeto.apellido + " No esta empleado y  no es mayor de edad")
    }
    return objeto
}

let estaEmpleado = ejercicio2(empleado)
console.log(estaEmpleado);

/*Dado el siguiente array de objetos
Eliminar el último elemento del arreglo usando un método de arrays.
Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos.*/

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]

let autosNuevos = [];
for (let i = 0; i < autos.length; i++) {
    delete autos[i].color
    
    if (autos[i].anio > 2019) {
        autosNuevos.push(autos[i])
    }
    
}


console.log (autos);
console.log(autosNuevos);