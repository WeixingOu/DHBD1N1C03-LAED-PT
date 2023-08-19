import java.time.LocalDate;
import java.time.LocalDate;
import java.time.Period;

public class Compromiso {
    private String descripcion;
    private String nombreResponsable;
    private String apellidoResponsable;
    private LocalDate fechaCompromiso;

    public Compromiso(String descripcion, String nombreResponsable, String apellidoResponsable, LocalDate fechaCompromiso) {
        this.descripcion = descripcion;
        this.nombreResponsable = nombreResponsable;
        this.apellidoResponsable = apellidoResponsable;
        this.fechaCompromiso = fechaCompromiso;
    }

    public LocalDate getFechaCompromiso() {
        return fechaCompromiso;
    }
    public String getApellidoResponsable() {
        return apellidoResponsable;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public String getNombreResponsable() {
        return nombreResponsable;
    }

    public void setApellidoResponsable(String apellidoResponsable) {
        this.apellidoResponsable = apellidoResponsable;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public void setFechaCompromiso(LocalDate fechaCompromiso) {
        this.fechaCompromiso = fechaCompromiso;
    }
    public void setNombreResponsable(String nombreResponsable) {
        this.nombreResponsable = nombreResponsable;
    }
}
