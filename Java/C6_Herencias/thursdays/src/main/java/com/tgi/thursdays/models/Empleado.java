package com.tgi.thursdays.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo_empleado", discriminatorType = DiscriminatorType.STRING)
public abstract class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long id;

    private String nombre;
    private String apellido;
    protected double sueldo;

    public Empleado() {
    }

    public Empleado(String nombre, String apellido, double sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
}
