let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

/* Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. */
const totalGastosSemanal = (gastos, semana) => {
    let totalSuma = 0;
    for ( let dia = 0; dia < gastos[semana].length; dia++) {
        totalSuma += gastos[semana][dia];
    }
    return totalSuma
};
console.log(totalGastosSemanal(gastos,0));
console.log(totalGastosSemanal(gastos,1));
console.log(totalGastosSemanal(gastos,2));
console.log(totalGastosSemanal(gastos,3));

/*  La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. */
const totalGastosDiario = (gastos, dia) => {
    let totalSuma = 0;
    for ( let semana = 0; semana < gastos.length; semana++) {
        totalSuma += gastos[semana][dia];
    }
     return totalSuma
};
// totalGastosDiario(gastos, 2);

/* Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto? */
const totalGastosMes = (gastos) => {
    let totalSuma = 0;
    for (let semana = 0; semana < gastos.length; semana++) {
        for (let dia = 0; dia < gastos[semana].length; dia++) {
            totalSuma += gastos[semana][dia];
        }
    }
    return totalSuma;
};
// totalGastosMes(gastos);

/* Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron. */
const semanaConMasGastos = (gastos) => {
    let semanaMasGastos = 0;

    for (let semana = 1; semana < gastos.length; semana++) {
        let gastosSemanaActual = totalGastosSemanal(gastos, semana);
        if (gastosSemanaActual > totalGastosSemanal(gastos, 0)) {
            semanaMasGastos = semana;
        }
    }
    return semanaMasGastos + 1;
};
console.log("La semana con más gastos fue la semana " + semanaConMasGastos(gastos));