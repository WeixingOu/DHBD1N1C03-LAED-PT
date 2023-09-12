public class Main {
    public static void main(String[] args) {
        // Crear un cliente
        Cliente cliente1 = new Cliente(1, "García", "12345678", "20-12345678-2");

        // Crear una caja de ahorro para el cliente
        CajaDeAhorro cajaDeAhorro1 = new CajaDeAhorro(cliente1, 0.05); // 5% de tasa de interés

        // Depositamos 1000 unidades en la caja de ahorro
        cajaDeAhorro1.depositarEfectivo(1000);
        System.out.println("Saldo después de depósito: " + cajaDeAhorro1.informarSaldo());

        // Cobrar interés
        cajaDeAhorro1.cobrarInteres();
        System.out.println("Saldo después de cobrar interés: " + cajaDeAhorro1.informarSaldo());

        // Crear una cuenta corriente para el cliente
        CuentaCorriente cuentaCorriente1 = new CuentaCorriente(cliente1, 500); // 500 de descubierto autorizado

        // Depositamos 500 unidades
        cuentaCorriente1.depositarEfectivo(500);
        System.out.println("Saldo cuenta corriente después de depósito: " + cuentaCorriente1.informarSaldo());

        // Extraemos 1000 unidades (usamos el descubierto)
        cuentaCorriente1.extraer(1000);
        System.out.println("Saldo cuenta corriente después de extracción: " + cuentaCorriente1.informarSaldo());
    }
}
