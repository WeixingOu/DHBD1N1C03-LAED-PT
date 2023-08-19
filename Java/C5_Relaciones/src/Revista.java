import java.util.List;

public class Revista {
    private String nombre;
    private String codigo;
    private Periodicidad periodicidad;
    private List<Edicion> ediciones;

    public Revista(String nombre, String codigo, Periodicidad periodicidad) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.periodicidad = periodicidad;
    }

    public String getNombre() {
        return nombre;
    }

    public Periodicidad getPeriodicidad() {
        return periodicidad;
    }

    public List<Edicion> getEdiciones() {
        return ediciones;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public void setEdiciones(List<Edicion> ediciones) {
        this.ediciones = ediciones;
    }

    public void setPeriodicidad(Periodicidad periodicidad) {
        this.periodicidad = periodicidad;
    }
}
