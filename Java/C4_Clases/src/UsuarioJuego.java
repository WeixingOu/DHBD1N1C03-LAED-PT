public class UsuarioJuego {
    private String nombre;
    private String clave;
    private Double puntaje;
    private int nivel;

    public UsuarioJuego(String nombre, String clave) {
        this.nombre = nombre;
        this.clave = clave;
        this.puntaje = 0.0;
        this.nivel = 0;
    }

    // Metodos
    public void aumentarPuntaje() {
        this.puntaje++;
    }

    public void subirNivel() {
        this.nivel++;
    }

    public void bonus(int valor) {
        this.puntaje += valor;
    }

    public String toString() {
        return "Nombre: " + this.nombre + ", Puntaje: " + this.puntaje + ", Nivel: " + this.nivel;
    }

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }
    public String getClave() {
        return clave;
    }
    public Double getPuntaje() {
        return puntaje;
    }
    public int getNivel() {
        return nivel;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setClave(String clave) {
        this.clave = clave;
    }
    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }
    public void setNivel(int nivel) {
        this.nivel = nivel;
    }
}
