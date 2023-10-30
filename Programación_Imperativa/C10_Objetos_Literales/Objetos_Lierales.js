//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(nombre) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === nombre) {
                return this.clientes[i];
            }
        }
        return null;
    },
    deposito: function(nombre, dinero) {
       let cliente = this.consultarCliente(nombre);
       if (cliente) {
        cliente.saldoEnPesos += dinero;
        console.log('Deposito realizado, su nuevo es saldo es: ' + cliente.saldoEnPesos);
       } else {
        console.log('Cliente no encontrado')
       }
    },
    extraccion: function(nombre, dinero) {
        let cliente = this.consultarCliente(nombre);
        if (cliente) {
            cliente.saldoEnPesos -= dinero;
            if (cliente.saldoEnPesos <= 0) {
                console.log('Fondos insuficientes')
            } else {
                console.log('Extraccion realizada correctamente, su nuevo saldo es: ' + cliente.saldoEnPesos);
            }
        } else {
            console.log('Cliente no encontrado')
        }
    }
};



let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

banco.extraccion('Ramon Connell', 100000);

