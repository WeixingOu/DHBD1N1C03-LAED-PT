package com.tgi.thursdays.models;
import jakarta.persistence.Entity;

@Entity
public class LimpiezaGeneral extends Empleado{
    public LimpiezaGeneral() {
    }

    public LimpiezaGeneral(String nombre, String apellido, double sueldo) {
        super(nombre, apellido, sueldo);
    }
}
