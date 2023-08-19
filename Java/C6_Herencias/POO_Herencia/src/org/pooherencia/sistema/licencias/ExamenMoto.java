package org.pooherencia.sistema.licencias;

import java.util.Set;

public class ExamenMoto extends Examen{
    private Moto moto;
    private Set<Circuito> circuitos;

    public ExamenMoto(String fecha, Persona persona, Moto moto, Set<Circuito> circuitos) {
        super(fecha, persona);
        this.moto = moto;
        this.circuitos = circuitos;
    }

    @Override
    public boolean estaAprobado() {
        int tiempoTotal = 0;
        int faltasTotal = 0;

        for (Circuito circuito: circuitos) {
            tiempoTotal += circuito.getTiempoEnSegundos();
            faltasTotal += circuito.getNumeroDeFaltas();
        }
        return moto.isTieneEspejos() && tiempoTotal <= 450 && faltasTotal <= 3;
    }
}
