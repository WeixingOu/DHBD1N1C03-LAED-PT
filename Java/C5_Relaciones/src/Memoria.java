public class Memoria {
    private int capacidad;
    private String marca;

    public Memoria(int capacidad, String marca) {
        this.capacidad = capacidad;
        this.marca = marca;
    }

    public String getMarca() {
        return marca;
    }
    public int getCapacidad() {
        return capacidad;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }
}
