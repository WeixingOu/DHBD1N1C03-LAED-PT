package com.tgi.thursdays.models;
import jakarta.persistence.Entity;

@Entity
public class LavadorVajilla extends Empleado{
    private int vajillasRotas;

    public LavadorVajilla() {
    }

    public LavadorVajilla(String nombre, String apellido, double sueldo, int utensiliosRotos) {
        super(nombre, apellido, sueldo);
        this.vajillasRotas = utensiliosRotos;
    }


    public int getVajillasRotas() {
        return vajillasRotas;
    }

    public double getSueldo() {
        return sueldo;
    }

    @Override
    public void setSueldo(double sueldo) {
        super.setSueldo(sueldo);
    }

}
