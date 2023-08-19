package org.pooherencia.registro.colegio.secundario;

public class PersonalAdministrativo extends Persona {
    private String legajo;
    private String cargo;

    public PersonalAdministrativo(String nombre, String apellido, String legajo, String cargo) {
        super(nombre, apellido);
        this.legajo = legajo;
        this.cargo = cargo;
    }

    @Override
    public String actividad() {
        return "Actividades de administración";
    }

    @Override
    public String toString() {
        return "PersonalAdministrativo{" + super.toString() +
                "legajo='" + legajo + '\'' +
                ", cargo='" + cargo + '\'' +
                '}';
    }
}
