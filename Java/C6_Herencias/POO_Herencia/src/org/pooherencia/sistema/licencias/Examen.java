package org.pooherencia.sistema.licencias;

abstract public class Examen {
    protected String fecha;
    protected Persona persona;

    public Examen(String fecha, Persona persona) {
        this.fecha = fecha;
        this.persona = persona;
    }

    public abstract boolean estaAprobado();
}
