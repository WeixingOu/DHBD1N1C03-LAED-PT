package org.pooherencia.animaltopia;

abstract public class Animal {
    protected String nombre;
    protected int energia;

    public Animal(String nombre, int energia) {
        this.nombre = nombre;
        this.energia = energia;
    }

    public abstract void tomarMate(Mate mate);
}
