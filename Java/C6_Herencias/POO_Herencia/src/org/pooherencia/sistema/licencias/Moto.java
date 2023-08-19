package org.pooherencia.sistema.licencias;

public class Moto {
    private String patente;
    private String marca;
    private int cilindrada;
    private boolean tieneEspejos;

    public Moto(String patente, String marca, int cilindrada, boolean tieneEspejos) {
        this.patente = patente;
        this.marca = marca;
        this.cilindrada = cilindrada;
        this.tieneEspejos = tieneEspejos;
    }

    public boolean isTieneEspejos() {
        return tieneEspejos;
    }
}
