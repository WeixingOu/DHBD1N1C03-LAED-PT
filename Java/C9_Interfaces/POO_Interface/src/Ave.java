public abstract class Ave implements Animal, Oviparo {
    protected String nombre;
    protected int edad;

    public Ave(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public Integer getEdad() {
        return edad;
    }

    @Override
    public void ponerHuevo() {
        System.out.println(nombre + " ha puesto un huevo.");
    }

    @Override
    public void romperCascaron() {
        System.out.println(nombre + " ha roto el cascarón.");
    }
}
