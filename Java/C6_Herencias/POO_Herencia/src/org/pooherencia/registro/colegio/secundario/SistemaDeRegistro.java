package org.pooherencia.registro.colegio.secundario;

public class SistemaDeRegistro {
    public static void main(String[] args) {
        Estudiante estudiante1 = new Estudiante("Juan", "Perez", "12345A");
        Profesor profesor1 = new Profesor("Luiz", "Rodriguez", "6789B", "Doctora en Matematicas", 5);
        PersonalAdministrativo personalAdministrativo1 = new PersonalAdministrativo("Roberto", "Gomez", "01234C", "Secretario");

        Registro registro1 = new Registro();

        registro1.registrarEntrada(estudiante1, "08:00");
        registro1.registrarEntrada(profesor1, "08:30");
        registro1.registrarEntrada(personalAdministrativo1, "07:50");

        System.out.println("Personas presentes en el colegio:");
        registro1.mostrarPresentes();

        registro1.registrarSalida(estudiante1, "12:00");
        registro1.registrarSalida(profesor1, "14:30");

        System.out.println("\nPersonas presentes en el colegio después de algunas salidas:");
        registro1.mostrarPresentes();
    }
}
