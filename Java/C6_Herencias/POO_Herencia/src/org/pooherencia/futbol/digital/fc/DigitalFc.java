package org.pooherencia.futbol.digital.fc;

public class DigitalFc {
    public static void main(String[] args) {
        Futbolista futbolista1 = new Futbolista("Juan", "Perez", "Delantero", Status.TITULAR);
        Fisioterapeuta fisio = new Fisioterapeuta("Maria", "Ramirez");

        Presidente presidente = new Presidente("Pedro", "Gomez");
        Entrenador entrenador = new Entrenador("Carlos", "Lopez");

        fisio.registrarLesion(futbolista1.getNombre(), "Lesión en la rodilla derecha");
        System.out.println(futbolista1.getNombre() + " tiene la siguiente lesión: " + fisio.verLesion(futbolista1.getNombre()));

        fisio.registrarProgresoRecuperacion(futbolista1.getNombre(), "Recuperación 50% completa");
        System.out.println("Progreso de recuperación de " + futbolista1.getNombre() + ": " + fisio.verProgresoRecuperacion(futbolista1.getNombre()));

        System.out.println(futbolista1.getNombre() + " está " + futbolista1.actividad());
        System.out.println(presidente.getNombre() + " está " + presidente.actividad());
        System.out.println(entrenador.getNombre() + " está " + entrenador.actividad());
        System.out.println(fisio.getNombre() + " está " + fisio.actividad());
    }
}
