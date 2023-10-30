package com.tgi.thursdays.controllers;

import com.tgi.thursdays.models.Empleado;
import com.tgi.thursdays.repositories.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmpleadoControllers {
    @Autowired
    EmpleadoRepository empleadoRepository;

    @RequestMapping("/empleados")
    public List<Empleado> getEmpleados() {
        return empleadoRepository.findAll();
    }
}
