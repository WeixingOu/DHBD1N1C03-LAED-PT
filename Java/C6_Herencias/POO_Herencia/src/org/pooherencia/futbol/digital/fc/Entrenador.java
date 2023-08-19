package org.pooherencia.futbol.digital.fc;

public class Entrenador extends Miembro {
    public Entrenador(String nombre, String apellido) {
        super(nombre, apellido);
    }

    @Override
    public String actividad() {
        return "Dirigiendo entrenamientos y diseñando tácticas de juego";
    }
}
