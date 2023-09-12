public class Main {
    public static void main(String[] args) {
        Nave nave = new Nave(5, 5, 'N', 10.0);
        System.out.println("Estado inicial de la nave: " + nave.toString());

        nave.irA(10, 10, 'E');
        System.out.println("Estado de la nave después del primer movimiento: " + nave.toString());

        nave.irA(7, 7, 'E');
        System.out.println("Estado de la nave después del segundo movimiento: " + nave.toString());

        nave.restaVida(20);

        Asteroide asteroide = new Asteroide(7, 7, 'S', 30);
        System.out.println("Estado inicial del asteroide: " + asteroide.toString());

        asteroide.irA(9, 9, 'W');
        System.out.println("Estado del asteroide después del movimiento: " + asteroide.toString());
    }
}