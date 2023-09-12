public class CuentaCorriente extends Cuenta {
    private double montoAutorizado;

    public CuentaCorriente(Cliente cliente, double montoAutorizado) {
        super(cliente);
        this.montoAutorizado = montoAutorizado;
    }

    @Override
    public void extraer(double monto) {
        if (monto <= this.saldo + this.montoAutorizado) {
            this.saldo -= monto;
        } else {
            System.out.println("Fondos insuficientes incluso con el descubierto autorizado.");
        }
    }

    public void depositarCheque(Cheque cheque) {
        this.saldo += cheque.getMonto();
    }
}
