import java.time.LocalDate;
import java.time.Year;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        DiscoRigido disco = new DiscoRigido("Seagate", 500, 7200);
        Procesador cpu = new Procesador("Intel", "i7", 3.5);
        Memoria ram1 = new Memoria(8, "Kingston");
        Memoria ram2 = new Memoria(8, "Kingston");

        Computadora laptop = new Computadora("Dell", "Inspiron", Year.of(2020), ComputadoraTipo.LAPTOP, disco, cpu, ram1, ram2);

        Compromiso compromiso1 = new Compromiso("Corregir errores en sistema", "Juan", "Perez", LocalDate.of(2023, 2, 1));
        Compromiso compromiso2 = new Compromiso("Actualizar bases de datos", "Maria", "Gomez", LocalDate.of(2023, 2, 15));
        Compromiso compromiso3 = new Compromiso("Revisar protocolos", "Carlos", "Hernandez", LocalDate.of(2023, 3, 1));
        Compromiso compromiso4 = new Compromiso("Capacitar al personal", "Ana", "Torres", LocalDate.of(2023, 3, 10));
        Compromiso compromiso5 = new Compromiso("Migrar a la nueva versión", "Luis", "Molina", LocalDate.of(2023, 4, 10));

        List<Compromiso> listaDeCompromisos = new ArrayList<>(List.of(compromiso1, compromiso2, compromiso3, compromiso4, compromiso5));

        Hallazgo hallazgo = new Hallazgo(Area.VENTAS, LocalDate.of(2023, 1, 1), listaDeCompromisos);
        boolean estadoCritico = hallazgo.estaEnEstadoCritico();
        System.out.println("El hallazgo está en estado crítico: " + estadoCritico);

        // Crear artículos
        Articulo articulo1 = new Articulo("La tecnología del futuro", "Tecnología", "Juan Pérez", LocalDate.of(2023, 8, 1));
        Articulo articulo2 = new Articulo("Las flores de mi jardín", "Naturaleza", "Maria López", LocalDate.of(2023, 8, 5));
        Articulo articulo3 = new Articulo("El universo y sus misterios", "Astronomía", "Carlos Torres", LocalDate.of(2023, 8, 10));

        // Crear ediciones con los artículos
        Edicion edicion1 = new Edicion(1, LocalDate.of(2023, 8, 15), 10.0);
        edicion1.setArticulos(List.of(articulo1, articulo2));

        Edicion edicion2 = new Edicion(2, LocalDate.of(2023, 9, 15), 12.0);
        edicion2.setArticulos(List.of(articulo3));

        // Crear una revista con sus ediciones
        Revista revistaTecnologia = new Revista("Tech Today", "TT123", Periodicidad.MENSUAL);
        revistaTecnologia.setEdiciones(List.of(edicion1, edicion2));

        // Imprimir la información
        System.out.println("Revista: " + revistaTecnologia.getNombre() + " (" + revistaTecnologia.getCodigo() + ")");
        for (Edicion edicion : revistaTecnologia.getEdiciones()) {
            System.out.println("  Edición No. " + edicion.getNumeroEdicion() + " - Fecha: " + edicion.getFechaEdicion());
            for (Articulo articulo : edicion.getArticulos()) {
                System.out.println("    Artículo: " + articulo.getTitulo() + " - Autor: " + articulo.getAutor());
            }
        }
    }
}