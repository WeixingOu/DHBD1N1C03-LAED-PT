public class CajaDeAhorros {
    private String titular;
    private double saldo;
    private String CBU;
    private String alias;
    private static int numeroActual = 1000;

    public CajaDeAhorros(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.CBU = generarCBU();
        this.alias = ""; // Al principio no tiene un alias asignado
    }

    // Método para depositar dinero
    public void depositar(double monto) {
        this.saldo += monto;
    }

    // Método para retirar dinero
    public void retirar(double monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            System.out.println("Saldo insuficiente");
        }
    }

    // Método para recibir transferencias
    public void recibirTransferencia(double monto) {
        this.saldo += monto;
    }

    // Método para generar CBU automáticamente
    private String generarCBU() {
        numeroActual++;
        return "DB" + numeroActual; // Ejemplo sencillo de CBU. En realidad, son más complejos.
    }

    // Getters para obtener información
    public String getTitular() {
        return titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getCBU() {
        return CBU;
    }

    public String getAlias() {
        return alias;
    }

    // Setter para el alias, en caso de que Tío Rico decida agregar o cambiarlo
    public void setAlias(String alias) {
        this.alias = alias;
    }

    @Override
    public String toString() {
        return "CajaDeAhorros {" +
                "Titular: '" + titular + '\'' +
                ", Saldo: " + saldo +
                ", CBU: '" + CBU + '\'' +
                ", Alias: '" + alias + '\'' +
                '}';
    }
}
