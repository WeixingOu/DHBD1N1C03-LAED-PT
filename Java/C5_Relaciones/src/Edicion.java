import java.time.LocalDate;
import java.util.List;

public class Edicion {
    private int numeroEdicion;
    private LocalDate fechaEdicion;
    private double precio;
    private List<Articulo> articulos;

    public Edicion(int numeroEdicion, LocalDate fechaEdicion, double precio) {
        this.numeroEdicion = numeroEdicion;
        this.fechaEdicion = fechaEdicion;
        this.precio = precio;
    }

    public double getPrecio() {
        return precio;
    }

    public int getNumeroEdicion() {
        return numeroEdicion;
    }

    public List<Articulo> getArticulos() {
        return articulos;
    }

    public LocalDate getFechaEdicion() {
        return fechaEdicion;
    }

    public void setArticulos(List<Articulo> articulos) {
        this.articulos = articulos;
    }

    public void setFechaEdicion(LocalDate fechaEdicion) {
        this.fechaEdicion = fechaEdicion;
    }

    public void setNumeroEdicion(int numeroEdicion) {
        this.numeroEdicion = numeroEdicion;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
}
