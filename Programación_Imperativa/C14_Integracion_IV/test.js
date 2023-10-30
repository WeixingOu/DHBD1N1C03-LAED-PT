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
const generarID = (cuentas) => {
  for (let i = 0; i < cuentas.length; i++) {
    cuentas[i].id = i + 1
  }
};

generarID(arrayCuentas)

const buscarPorId = (cuentas, id) => {
  for ( i = 0; i < cuentas.length; i++) {
      if ( cuentas[i].id === id) {
        return cuentas[i];
      }
  }
  return null;
};
// console.log(buscarPorId(arrayCuentas,3));

// const filtrarPorSaldos = (cuentas, saldo) => {
//   let cuentaSaldoMenor = [];
//   for ( i= 0; i < cuentas.length; i++) {
//     if ( cuentas[i].saldo < saldo) {
//       cuentaSaldoMenor.push(cuentas[i]);
//       return cuentaSaldoMenor;
//     }
//   }
//   return null;
// };
// console.log(filtrarPorSaldos(arrayCuentas, 1500));

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