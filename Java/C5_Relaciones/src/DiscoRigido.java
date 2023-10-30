public class DiscoRigido {
    private String marca;
    private int capacidad;
    private int velocidad;

    public DiscoRigido(String marca, int capacidad, int velocidad) {
        this.marca = marca;
        this.capacidad = capacidad;
        this.velocidad = velocidad;
    }

    public String getMarca() {
        return marca;
    }
    public int getCapacidad() {
        return capacidad;
    }
    public int getVelocidad() {
        return velocidad;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }
    public void setVelocidad(int velocidad) {
        this.velocidad = velocidad;
    }
}
