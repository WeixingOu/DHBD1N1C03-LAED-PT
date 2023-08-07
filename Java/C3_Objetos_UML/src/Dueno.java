public class Dueno {
    private String nombre;
    private Mascota mascota;
    private double deuda;
    private int cantidadConsultas;

    public Dueno(String nombre, Mascota mascota) {
        this.nombre = nombre;
        this.mascota = mascota;
        this.deuda = 0.0;
        this.cantidadConsultas = 0;
    }

    public void acumularDeuda(double importe) {
        this.deuda += importe;
    }

    public void incrementarCantidadConsultas() {
        this.cantidadConsultas++;
    }

    public String getNombre() {
        return nombre;
    }

    public Mascota getMascota() {
        return mascota;
    }

    public int getCantidadConsultas() {
        return cantidadConsultas;
    }

    public double getDeuda() {
        return deuda;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setCantidadConsultas(int cantidadConsultas) {
        this.cantidadConsultas = cantidadConsultas;
    }

    public void setDeuda(double deuda) {
        this.deuda = deuda;
    }

    public void setMascota(Mascota mascota) {
        this.mascota = mascota;
    }
}
