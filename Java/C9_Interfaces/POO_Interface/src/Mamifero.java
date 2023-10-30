import java.util.Random;

public abstract class Mamifero implements Animal, Paridor, Amamantador {
    protected String nombre;
    protected int edad;
    protected int cantidadCriasPosibles;

    public Mamifero(String nombre, int edad, int cantidadCriasPosibles) {
        this.nombre = nombre;
        this.edad = edad;
        this.cantidadCriasPosibles = cantidadCriasPosibles;
    }

    @Override
    public void parir() {
        Random random = new Random();
        int crias = random.ints(1, this.cantidadCriasPosibles).findFirst().getAsInt();
        System.out.println(nombre + " ha parido " + crias + " crías.");
    }

    @Override
    public void amamantar() {
        System.out.println(nombre + " está amamantando a sus crías.");
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public Integer getEdad() {
        return edad;
    }

    public int getCantidadCriasPosibles() {
        return cantidadCriasPosibles;
    }
}
