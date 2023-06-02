let array = [{ nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49 } ];

function propiedadUnica(array,string) {
    return array.map(
        objeto => ({[string]: objeto[string]})
    );
};

console.log(propiedadUnica(array, 'edad'));