package org.pooherencia.futbol.digital.fc;

public class Presidente extends Miembro {
    public Presidente(String nombre, String apellido) {
        super(nombre, apellido);
    }

    @Override
    public String actividad() {
        return "Supervisando y realizando actividades administrativas";
    }
}
