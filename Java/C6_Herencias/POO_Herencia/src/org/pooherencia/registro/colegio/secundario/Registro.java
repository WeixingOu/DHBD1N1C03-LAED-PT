package org.pooherencia.registro.colegio.secundario;

import java.util.HashSet;
import java.util.Set;

public class Registro {
    private Set<Persona> personasPresentes = new HashSet<>();

    public void registrarEntrada(Persona persona, String horaEntrada) {
        persona.setHoraEntrada(horaEntrada);
        personasPresentes.add(persona);
    }

    public void registrarSalida(Persona persona, String horaSalida) {
        if(personasPresentes.contains(persona)) {
            persona.setHoraSalida(horaSalida);
            personasPresentes.remove(persona);
        }
    }

    public void mostrarPresentes() {
        for(Persona persona : personasPresentes) {
            System.out.println(persona);
        }
    }
}
