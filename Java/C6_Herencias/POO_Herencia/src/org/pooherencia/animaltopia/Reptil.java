package org.pooherencia.animaltopia;

public class Reptil extends Animal{
    public Reptil(String nombre, int energia) {
        super(nombre, energia);
    }

    @Override
    public void tomarMate(Mate mate) {
        this.energia += (mate.getContenido() * 2);
        mate.vaciar();
    }
}
