package org.pooherencia.animaltopia;

public class Mamifero extends Animal{
    public Mamifero(String nombre, int energia) {
        super(nombre, energia);
    }

    @Override
    public void tomarMate(Mate mate) {
        this.energia += (mate.getContenido() * 5);
        mate.vaciar();
    }
}
