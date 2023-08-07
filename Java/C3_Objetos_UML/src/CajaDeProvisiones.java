import java.time.LocalDate;

public class CajaDeProvisiones {
    private double pesoTotal;
    private String origen;
    private String nombreProveedor;
    private String descripcionContenido;
    private boolean materialFragil;
    private LocalDate fechaVencimiento; // Usamos LocalDate para manejar fechas de forma más adecuada.
    private double costoProductos;

    public CajaDeProvisiones(double pesoTotal, String origen, String nombreProveedor, String descripcionContenido, boolean materialFragil, LocalDate fechaVencimiento, double costoProductos) {
        this.pesoTotal = pesoTotal;
        this.origen = origen;
        this.nombreProveedor = nombreProveedor;
        this.descripcionContenido = descripcionContenido;
        this.materialFragil = materialFragil;
        this.fechaVencimiento = fechaVencimiento;
        this.costoProductos = costoProductos;
    }

    public boolean esFragil() {
        return this.materialFragil;
    }

    public double calcularCostoProductos() {
        // Aquí puedes agregar lógica adicional si es necesario. Por ejemplo, descuentos, impuestos, etc.
        return this.costoProductos;
    }

    public LocalDate getFechaVencimiento() {
        return fechaVencimiento;
    }

    public void setFechaVencimiento(LocalDate fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }
}
