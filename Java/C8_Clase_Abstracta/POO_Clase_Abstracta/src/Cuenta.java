public abstract class Cuenta {
    protected Cliente cliente;
    protected double saldo;

    protected Cuenta(Cliente cliente) {
        this.cliente = cliente;
        this.saldo = 0;
    }

    public void depositarEfectivo(double monto) {
        this.saldo += monto;
    }

    public double informarSaldo() {
        return this.saldo;
    }

    public abstract void extraer(double monto);
}
