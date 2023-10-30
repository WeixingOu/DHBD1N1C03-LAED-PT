package com.tgi.thursdays.repositories;

import com.tgi.thursdays.models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
}
