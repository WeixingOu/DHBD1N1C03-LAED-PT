package org.pooherencia.registro.colegio.secundario;

public class Profesor extends Persona {
    private String legajo;
    private String titulo;
    private int antiguedad;

    public Profesor(String nombre, String apellido, String legajo, String titulo, int antiguedad) {
        super(nombre, apellido);
        this.legajo = legajo;
        this.titulo = titulo;
        this.antiguedad = antiguedad;
    }

    @Override
    public String actividad() {
        return "Dando clases";
    }

    @Override
    public String toString() {
        return "Profesor{" + super.toString() +
                "legajo='" + legajo + '\'' +
                ", titulo='" + titulo + '\'' +
                ", antiguedad=" + antiguedad +
                '}';
    }
}
