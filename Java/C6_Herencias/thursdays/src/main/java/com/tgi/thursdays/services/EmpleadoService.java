package com.tgi.thursdays.services;

import com.tgi.thursdays.models.LavadorVajilla;
import com.tgi.thursdays.repositories.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoService {
    @Autowired
    private EmpleadoRepository empleadoRepository;

    public void guardarLavadorVajilla(LavadorVajilla lavadorVajilla) {
        double sueldo = lavadorVajilla.getSueldo() - (lavadorVajilla.getVajillasRotas() * 5);
        lavadorVajilla.setSueldo(sueldo);
        empleadoRepository.save(lavadorVajilla);
    }
}
