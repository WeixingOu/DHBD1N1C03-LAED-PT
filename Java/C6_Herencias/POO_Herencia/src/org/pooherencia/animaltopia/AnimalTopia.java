package org.pooherencia.animaltopia;

public class AnimalTopia {
    public static void main(String[] args) {
        Reptil reptil = new Reptil("Rex", 10);
        Mamifero mamifero = new Mamifero("Mimi", 20);

        Mate mate = new Mate();
        Cebador cebador = new Cebador();

        cebador.cebarMate(reptil, mate);
        cebador.cebarMate(mamifero, mate);

        System.out.println("Energía del reptil: " + reptil.energia);
        System.out.println("Energía del mamífero: " + mamifero.energia);
    }
}