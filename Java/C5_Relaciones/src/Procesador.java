public class Procesador {
    private String marca;
    private String modelo;
    private double velocidad;

    public Procesador(String marca, String modelo, double velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    public String getMarca() {
        return marca;
    }
    public String getModelo() {
        return modelo;
    }
    public double getVelocidad() {
        return velocidad;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public void setVelocidad(double velocidad) {
        this.velocidad = velocidad;
    }
}
