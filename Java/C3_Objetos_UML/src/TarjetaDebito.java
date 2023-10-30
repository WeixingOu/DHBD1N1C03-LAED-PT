public class TarjetaDebito {
    private String titular;
    private String numeroTarjeta;
    private String fechaVencimiento;
    private double saldo;

    public TarjetaDebito(String titular, String numeroTarjeta, String fechaVencimiento, double saldoInicial) {
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaVencimiento = fechaVencimiento;
        this.saldo = saldoInicial;
    }

    public String getTitular() {
        return titular;
    }

    public String getNumeroTarjeta() {
        return numeroTarjeta;
    }

    public String getFechaVencimiento() {
        return fechaVencimiento;
    }

    public double getSaldo() {
        return saldo;
    }

    public boolean comprar(double monto) {
        if (saldo >= monto) {
            saldo -= monto;
            return true; // Transacción exitosa
        } else {
            return false; // Fondos insuficientes
        }
    }
}
