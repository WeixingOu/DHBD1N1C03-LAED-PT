package org.pooherencia.futbol.digital.fc;

import java.util.HashMap;
import java.util.Map;

public class Fisioterapeuta extends Miembro {
    private Map<String, String> lesionesRegistradas;
    private Map<String, String> progresoRecuperacion;

    public Fisioterapeuta(String nombre, String apellido) {
        super(nombre, apellido);
        lesionesRegistradas = new HashMap<>();
        progresoRecuperacion = new HashMap<>();
    }

    @Override
    public String actividad() {
        return "Realizando controles médicos";
    }

    public void registrarLesion(String nombreJugador, String detalleLesion) {
        lesionesRegistradas.put(nombreJugador, detalleLesion);
    }

    public void registrarProgresoRecuperacion(String nombreJugador, String progreso) {
        progresoRecuperacion.put(nombreJugador, progreso);
    }

    public String verLesion(String nombreJugador) {
        return lesionesRegistradas.get(nombreJugador);
    }

    public String verProgresoRecuperacion(String nombreJugador) {
        return progresoRecuperacion.get(nombreJugador);
    }
}
