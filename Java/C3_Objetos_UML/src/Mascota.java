public class Mascota {
    private String nombre;
    private double edad;
    private double peso;
    private double altura;
    private String estadoGeneral;

    public Mascota(String nombre, double edad, double peso, double altura, String estadoGeneral) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.estadoGeneral = estadoGeneral;
    }

    public String getNombre() {
        return nombre;
    }
    public double getEdad() {
        return edad;
    }
    public double getPeso() {
        return peso;
    }
    public double getAltura() {
        return altura;
    }
    public String getEstadoGeneral() {
        return estadoGeneral;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public void setEstadoGeneral(String estadoGeneral) {
        this.estadoGeneral = estadoGeneral;
    }
}
