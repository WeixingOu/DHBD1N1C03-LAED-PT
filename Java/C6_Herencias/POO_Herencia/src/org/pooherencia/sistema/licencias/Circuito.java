package org.pooherencia.sistema.licencias;

public class Circuito {
    private int tiempoEnSegundos;
    private int numeroDeFaltas;

    public Circuito(int tiempoEnSegundos, int numeroDeFaltas) {
        this.tiempoEnSegundos = tiempoEnSegundos;
        this.numeroDeFaltas = numeroDeFaltas;
    }

    public int getTiempoEnSegundos() {
        return tiempoEnSegundos;
    }

    public int getNumeroDeFaltas() {
        return numeroDeFaltas;
    }
}
