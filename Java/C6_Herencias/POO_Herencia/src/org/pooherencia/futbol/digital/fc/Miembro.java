package org.pooherencia.futbol.digital.fc;

public abstract class Miembro {
    private String nombre;
    private String apellido;

    public Miembro(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public abstract String actividad();
}
