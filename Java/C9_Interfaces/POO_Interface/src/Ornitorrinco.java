public class Ornitorrinco extends Mamifero implements Oviparo {
    public Ornitorrinco(String nombre, int edad, int cantidadCriasPosibles) {
        super(nombre, edad, cantidadCriasPosibles);
    }

    @Override
    public void ponerHuevo() {
        System.out.println(nombre + " ha puesto un huevo.");
    }

    @Override
    public void romperCascaron() {
        System.out.println(nombre + " ha roto el cascarón y las crías comienzan a amamantarse.");
        amamantar();
    }
}
