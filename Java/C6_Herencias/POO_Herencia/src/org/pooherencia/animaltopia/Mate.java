package org.pooherencia.animaltopia;

public class Mate {
    // ATRIBUTOS
    private int contenido;

    // CONSTRUCTOR
    public Mate() {
        this.contenido = 0;
    }

    // GETTERS & SETTERS
    public int getContenido() {
        return contenido;
    }

    // METODOS
    public void vaciar() {
        this.contenido = 0;
    }

    public void llenar() {
        this.contenido = 10;
    }
}
