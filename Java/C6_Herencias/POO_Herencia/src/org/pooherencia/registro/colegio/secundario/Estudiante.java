package org.pooherencia.registro.colegio.secundario;

public class Estudiante extends Persona {
    private String legajo;

    public Estudiante(String nombre, String apellido, String legajo) {
        super(nombre, apellido);
        this.legajo = legajo;
    }

    @Override
    public String actividad() {
        return "Estudiando";
    }

    @Override
    public String toString() {
        return "Estudiante{" + super.toString() +
                "legajo='" + legajo + '\'' +
                '}';
    }
}
