public class Main {
    public static void main(String[] args) {
        Zoologico zoo = new Zoologico();

        Felino leon = new Felino("Simba", 5, 4);
        Canino perro = new Canino("Buddy", 3, 5);
        Ornitorrinco ornitorrinco = new Ornitorrinco("Perry", 4, 1);

        leon.parir();
        perro.amamantar();
        ornitorrinco.ponerHuevo();
        ornitorrinco.romperCascaron();

        zoo.agregarAnimal(leon);
        zoo.agregarAnimal(perro);
        zoo.agregarAnimal(ornitorrinco);

        zoo.mostrarAnimales();
    }
}