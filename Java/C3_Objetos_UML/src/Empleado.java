import java.util.ArrayList;
import java.util.List;
public class Empleado {
    private String nombre;
    private String turno;
    private List<Articulo> ventasRegistradas;

    public Empleado(String nombre, String turno) {
        this.nombre = nombre;
        this.turno = turno;
        this.ventasRegistradas = new ArrayList<>();
    }

    public String getNombre() { return nombre; }
    public String getTurno() { return turno; }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setTurno(String turno) {
        this.turno = turno;
    }

    public void registrarVenta(Articulo articulo) {
        ventasRegistradas.add(articulo); // Agregamos el artículo vendido a la lista
    }
    public List<Articulo> getVentasRegistradas() {
        return ventasRegistradas; // Devolvemos la lista de artículos vendidos
    }
}
