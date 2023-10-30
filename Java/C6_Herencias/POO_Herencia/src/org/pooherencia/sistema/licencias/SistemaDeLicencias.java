package org.pooherencia.sistema.licencias;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class SistemaDeLicencias {
    public static void main(String[] args) {
        Persona persona1 = new Persona("123456", "Juan", "Perez");

        Auto auto1 = new Auto("AB123CD", "Toyota", 1600, 4);
        Circuito circuitoAuto1 = new Circuito(710, 1);
        ExamenAuto examenAuto1 = new ExamenAuto("18-08-2023", persona1, auto1, circuitoAuto1);

        Moto moto1 = new Moto("XY987ZX", "Honda", 150, false);
        Circuito circuito1Moto1 = new Circuito(220, 1);
        Circuito circuito2Moto1 = new Circuito(200, 2);
        Set<Circuito> circuitosMoto1 = new HashSet<>();
        circuitosMoto1.addAll(Arrays.asList(circuito1Moto1, circuito2Moto1));

        ExamenMoto examenMoto = new ExamenMoto("19-08-2023", persona1, moto1, circuitosMoto1);

        if (examenAuto1.estaAprobado()) {
            System.out.println(persona1.getNombre() + " ha aprobado el examen de auto.");
        } else {
            System.out.println(persona1.getNombre() + " no ha aprobado el examen de auto.");
        }

        if (examenMoto.estaAprobado()) {
            System.out.println(persona1.getNombre() + " ha aprobado el examen de moto.");
        } else {
            System.out.println(persona1.getNombre() + " no ha aprobado el examen de moto.");
        }
    }
}
