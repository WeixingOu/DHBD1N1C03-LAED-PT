import java.util.ArrayList;
import java.util.List;

public class Zoologico {
    private List<Animal> animales;

    public Zoologico() {
        animales = new ArrayList<>();
    }

    public void agregarAnimal(Animal animal) {
        animales.add(animal);
    }

    public void mostrarAnimales() {
        for(Animal animal : animales) {
            System.out.println("Animal: " + animal.getNombre() + ", Edad: " + animal.getEdad());
        }
    }
}
