public class TarjetaCredito {
    private String titular;
    private String numeroTarjeta;
    private String fechaVencimiento;
    private double limiteFinanciacion;
    private double saldoConsumido;
    private double saldoImpago;
    private double interes;
    private int maximoCuotas;

    public TarjetaCredito(String titular, String numeroTarjeta, String fechaVencimiento, double limiteFinanciacion, double interes, int maximoCuotas) {
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaVencimiento = fechaVencimiento;
        this.limiteFinanciacion = limiteFinanciacion;
        this.saldoConsumido = 0;
        this.saldoImpago = 0;
        this.interes = interes;
        this.maximoCuotas = maximoCuotas;
    }

    public boolean comprar(double monto, int cuotas) {
        if (cuotas <= maximoCuotas && (saldoConsumido + monto) <= limiteFinanciacion) {
            saldoConsumido += monto;
            // Aquí se podría implementar la lógica de cómo se distribuye el monto entre las cuotas y el interés...
            return true; // Transacción exitosa
        } else {
            return false; // No se puede realizar la transacción por alguna razón
        }
    }

    public void pagarResumen(double monto) {
        saldoImpago -= monto;
        if (saldoImpago < 0) {
            saldoConsumido += saldoImpago;
            saldoImpago = 0;
        }
    }
}
