public class CajaDeAhorro extends Cuenta {
    private double interes;

    public CajaDeAhorro(Cliente cliente, double interes) {
        super(cliente);
        this.interes = interes;
    }

    @Override
    public void extraer(double monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        } else {
            System.out.println("Fondos insuficientes.");
        }
    }

    public void cobrarInteres() {
        this.saldo += saldo * interes;
    }
}
