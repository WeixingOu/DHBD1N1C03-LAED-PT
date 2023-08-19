package com.tgi.thursdays;

import com.tgi.thursdays.models.LavadorVajilla;
import com.tgi.thursdays.services.EmpleadoService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ThursdaysApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThursdaysApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(EmpleadoService empleadoService) {
		return (args) -> {
			LavadorVajilla lavador = new LavadorVajilla("Luis", "Gomez", 4000, 2);
			empleadoService.guardarLavadorVajilla(lavador);
		};
	}
}
