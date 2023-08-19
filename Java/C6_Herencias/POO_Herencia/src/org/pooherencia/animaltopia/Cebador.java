package org.pooherencia.animaltopia;

public class Cebador {
    public void cebarMate(Animal animal, Mate mate) {
        mate.llenar();
        animal.tomarMate(mate);
    }
}
