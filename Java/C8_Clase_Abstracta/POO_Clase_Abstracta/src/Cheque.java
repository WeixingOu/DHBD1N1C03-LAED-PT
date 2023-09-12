import java.time.LocalDate;

public class Cheque {
    private double monto;
    private String bancoEmisor;
    private LocalDate fechaDePago;

    public Cheque(double monto, String bancoEmisor, LocalDate fechaDePago) {
        this.monto = monto;
        this.bancoEmisor = bancoEmisor;
        this.fechaDePago = fechaDePago;
    }

    public double getMonto() {
        return monto;
    }
}
