public class Main {
    public static void main(String[] args) {
        int num1 = 15;
        int num2 = 3;
        if (num1 % num2 == 0) {
            System.out.println(num1 + " es divisible por " + num2);
        } else {
            System.out.println(num1 + " no es divisible por " + num2);
        }
        mostrarInfo("manchitas", 2, 1.5, "guau guau");
        mostrarInfo("Nemo", 1, 0.140, "blop blop");
        mostrarInfo("Silvestre", 3, 0.5, "miau miau");
        mostrarInfo("Manuelita", 12, 0.300, "ñac ñac");
        mostrarInfo("Gardel", 1, 0.350, "pio pio");
    }
    public static void mostrarInfo(String nombre, int edad, double peso, String sonido) {
        System.out.println(nombre + " tiene " + edad + " años");
        System.out.println(nombre + " come " + peso + " kilos y hace " + sonido);
    }
}