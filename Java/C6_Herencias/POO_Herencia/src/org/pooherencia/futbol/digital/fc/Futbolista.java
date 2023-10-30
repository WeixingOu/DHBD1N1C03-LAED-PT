package org.pooherencia.futbol.digital.fc;

public class Futbolista extends Miembro {
    private String posicion;
    private Status status;

    public Futbolista(String nombre, String apellido, String posicion, Status status) {
        super(nombre, apellido);
        this.posicion = posicion;
        this.status = status;
    }

    public String getPosicion() {
        return posicion;
    }

    public Status getStatus() {
        return status;
    }

    @Override
    public String actividad() {
        return "Entrenando como " + posicion;
    }
}
