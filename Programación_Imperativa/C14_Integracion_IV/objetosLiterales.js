const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
];

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
const menoresEdad = (cuentas, edadMaxima) => {
    return cuentas.filter( (cuenta) => cuenta.edadTitular < edadMaxima);
};
console.log(menoresEdad(arrayCuentas, 30));

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
const mayoresEdad = (cuentas, edadMaxima) => {
    return cuentas.filter( (cuenta) => cuenta.edadTitular >= edadMaxima);
};
console.log(mayoresEdad(arrayCuentas, 30));

// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
const menoresEdadI = (cuentas, edadMaxima) => {
    return cuentas.filter( (cuenta) => cuenta.edadTitular <= edadMaxima);
};
console.log(menoresEdadI(arrayCuentas, 30));

// Obtener la cuenta con el titular de la misma más joven.
const edadMasJoven = (cuentas) => {
    let cuentaMasJoven = cuentas[0];
    for (let i = 1; i < cuentas.length; i++) {
        if ( cuentas[i].edadTitular < cuentaMasJoven.edadTitular) {
            cuentaMasJoven = cuentas[i];
        }
    }
    return cuentaMasJoven;
};
console.log (edadMasJoven(arrayCuentas));

// Obtener un array con las cuentas habilitadas.
// Obtener un array con las cuentas deshabilitadas.
const cuentaHabilitada = (cuentas) => {
    const cuentasHabilitada = [];
    const cuentasDeshabilitada = [];
    for (const cuenta of cuentas) {
        if (cuenta.estaHabilitada) {
            cuentasHabilitada.push(cuenta);
        } else if (!cuenta.estaHabilitada) {
            cuentasDeshabilitada.push(cuenta);
        } else {
            return 'ERROR: ESTADO DESCONOCIDO';
        }
    }
    return {
      habilitadas: cuentasHabilitada,
      deshabilitadas: cuentasDeshabilitada
    };
};
console.log (cuentaHabilitada(arrayCuentas));

// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.
const obtenerMayorMenorSaldo = (cuentas) => {
    let saldoMayor = cuentas[0];
    let saldoMenor = cuentas[0];
    for ( let i = 1; i < cuentas.length; i++) {
        if ( cuentas[i].saldo > saldoMayor.saldo) {
            saldoMayor = cuentas[i];
        }
        if ( cuentas[i].saldo < saldoMenor.saldo) {
            saldoMenor = cuentas[i];
        }
    }
    return {
        saldoMayor,
        saldoMenor
    };
};
console.log(obtenerMayorMenorSaldo(arrayCuentas));

// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico.
const generarID = (cuentas) => {
  for (let i = 0; i < cuentas.length; i++) {
    cuentas[i].id = i + 1
  }
};
generarID(arrayCuentas)
console.log(arrayCuentas);

// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null.
const buscarPorId = (cuentas, id) => {
  for ( i = 0; i < cuentas.length; i++) {
      if ( cuentas[i].id === id) {
        return cuentas[i];
      }
  }
  return null;
};
console.log(buscarPorId(arrayCuentas,3));

// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro.
const filtrarPorSaldos = (cuentas, saldo) => {
  let cuentaSaldoMenor = [];
  for ( i= 0; i < cuentas.length; i++) {
    if ( cuentas[i].saldo < saldo) {
      cuentaSaldoMenor.push(cuentas[i]);
      return cuentaSaldoMenor;
    }
  }
  return null;
};
console.log(filtrarPorSaldos(arrayCuentas, 1500));

// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined.
const incrementarSaldo = (cuentas, id, saldo) => {
    for ( let i = 0; i < cuentas.length; i++) {
        if ( buscarPorId(cuentas,id).id === cuentas[i].id) {
            return cuentas[i].saldo += saldo;
        }
    }
    return undefined;
  };
  
  incrementarSaldo(arrayCuentas, 2, 1000);
  
  console.log(arrayCuentas);