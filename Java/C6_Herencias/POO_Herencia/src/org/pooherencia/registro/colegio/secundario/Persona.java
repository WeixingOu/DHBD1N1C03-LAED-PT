package org.pooherencia.registro.colegio.secundario;

public abstract class Persona {
    private String nombre;
    private String apellido;
    private String horaEntrada;
    private String horaSalida;

    public Persona(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public abstract String actividad();

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setHoraEntrada(String horaEntrada) {
        this.horaEntrada = horaEntrada;
    }

    public void setHoraSalida(String horaSalida) {
        this.horaSalida = horaSalida;
    }

    @Override
    public String toString() {
        return "nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'';
    }
}
