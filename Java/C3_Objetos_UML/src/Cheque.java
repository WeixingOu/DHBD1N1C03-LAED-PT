import java.time.LocalDate;

public class Cheque {
    private String numeroCheque;
    private LocalDate fechaEmision;
    private LocalDate fechaVencimiento;
    private double monto;
    private String titular;
    private TipoCheque tipo;
    private String endosatario;

    public enum TipoCheque {
        COMUN,
        PAGO_DIFERIDO
    }

    public Cheque(String numeroCheque, LocalDate fechaEmision, double monto, String titular, TipoCheque tipo) {
        this.numeroCheque = numeroCheque;
        this.fechaEmision = fechaEmision;
        this.monto = monto;
        this.titular = titular;
        this.tipo = tipo;

        if(tipo == TipoCheque.COMUN) {
            this.fechaVencimiento = fechaEmision;
        } else { // Si es PAGO_DIFERIDO
            this.fechaVencimiento = fechaEmision.plusDays(30);
        }
    }

    // Método para endosar el cheque
    public void endosar(String nuevoPropietario) {
        this.endosatario = nuevoPropietario;
    }

    // Getters y Setters según necesidad (aquí solo algunos ejemplos)
    public String getNumeroCheque() {
        return numeroCheque;
    }

    public LocalDate getFechaEmision() {
        return fechaEmision;
    }

    public LocalDate getFechaVencimiento() {
        return fechaVencimiento;
    }

    public double getMonto() {
        return monto;
    }

    public String getTitular() {
        return titular;
    }

    public TipoCheque getTipo() {
        return tipo;
    }

    public String getEndosatario() {
        return endosatario;
    }

    @Override
    public String toString() {
        return
            "Número de Cheque: " + numeroCheque + "\n" +
            "Fecha de Emisión: " + fechaEmision + "\n" +
            "Monto: $" + monto + "\n" +
            "Titular: " + titular + "\n" +
            "Tipo de Cheque: " + (tipo == TipoCheque.COMUN ? "Común" : "Pago Diferido") + "\n" +
            "Fecha de Vencimiento: " + fechaVencimiento + "\n" +
            (endosatario != null ? "Endosatario: " + endosatario + "\n" : null );
    }
}
