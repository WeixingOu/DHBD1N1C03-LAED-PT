public class Nave extends Objeto{
    private double velocidad;
    private int vida;

    public Nave(int posX, int posY, char direccion, double velocidad) {
        super(posX, posY, direccion);
        this.velocidad = velocidad;
        this.vida = 100;
    }

    public void girar(char direccion) {
        System.out.println("Girando la nave desde " + this.direccion + " hacia " + direccion);
        this.direccion = direccion;
    }

    public void restaVida(int valor) {
        this.vida -= valor;
    }

    @Override
    public void irA(int x, int y, char direccion) {
        if (this.direccion != direccion) {
            girar(direccion);
        }
        super.irA(x, y, this.direccion);
    }
}
