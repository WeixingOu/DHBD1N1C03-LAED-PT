package org.pooherencia.sistema.licencias;

public class ExamenAuto extends Examen {
    private Auto auto;
    private Circuito circuito;

    public ExamenAuto(String fecha, Persona persona, Auto auto, Circuito circuito) {
        super(fecha, persona);
        this.auto = auto;
        this.circuito = circuito;
    }

    @Override
    public boolean estaAprobado() {
        return circuito.getTiempoEnSegundos() < 720 &&
                circuito.getNumeroDeFaltas() <= 2;
    }
}
