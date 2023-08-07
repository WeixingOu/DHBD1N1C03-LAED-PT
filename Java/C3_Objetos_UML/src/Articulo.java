public class Articulo {
    private String nombre;
    private double precio;
    private String proveedor;

    public Articulo(String nombre, double precio, String proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }

    public String getNombre() {
        return nombre;
    }
    public double getPrecio() {
        return precio;
    }
    public String getProveedor() {
        return proveedor;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }
    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }
}
