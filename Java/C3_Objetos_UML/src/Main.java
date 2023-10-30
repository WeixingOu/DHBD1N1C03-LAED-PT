import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        CajaDeAhorros cuentaTioRico = new CajaDeAhorros("Tío Rico", 1000000.00);
        cuentaTioRico.setAlias("Rico");
        cuentaTioRico.depositar(1000);
        cuentaTioRico.recibirTransferencia(1000);
        cuentaTioRico.retirar(1000);
        System.out.println(cuentaTioRico);

        Cheque Paulina = new Cheque("123456", LocalDate.now(), 1000.0, "Paulina", Cheque.TipoCheque.PAGO_DIFERIDO);
        Paulina.endosar("Marta");
        System.out.println(Paulina);

        // Creando las mascotas
        Mascota ambar = new Mascota("Ámbar", 7, 30.0, 60.0, "bueno");
        Mascota miluz = new Mascota("Miluz", 0.25, 1.5, 15.0, "muy bueno");

        // Creando los dueños con sus mascotas
        Dueno anita = new Dueno("Anita", ambar);

        // Creando veterinarios
        Veterinario julio = new Veterinario("Julio");

        // Creando consultorios y asignando veterinarios
        Consultorio consultorio1 = new Consultorio(1);
        Consultorio consultorio2 = new Consultorio(2);
        consultorio1.asignarVeterinario(julio);

        // Ámbar es atendido por el doctor Julio
        julio.atenderMascota(ambar);

        // La consulta tiene un costo (ejemplo: $50)
        anita.acumularDeuda(50);
        anita.incrementarCantidadConsultas();

        // Mostrar detalles de la consulta
        System.out.println(anita.getNombre() + " debe " + anita.getDeuda() + " por " + anita.getCantidadConsultas() + " consultas.");
        System.out.println("El estado general de " + ambar.getNombre() + " es " + ambar.getEstadoGeneral() + ".");
    }
}