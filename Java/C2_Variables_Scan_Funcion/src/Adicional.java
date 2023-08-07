import java.util.Scanner;
public class Adicional {
    public static void main(String[] args) {
        // Creando un objeto Scanner para leer la entrada del usuario
        Scanner input = new Scanner(System.in);
        // Solicitando al usuario que introduzca el números
        System.out.println("Por favor, introduce un número: ");
        int num = input.nextInt();

        if (esPrimo(num)) {
            System.out.println(num + " es un número primo.");
        } else {
            System.out.println(num + " no es un número primo.");
        }

        System.out.println("Por favor, introduce tres número: ");
        int nA = input.nextInt();
        int nB = input.nextInt();
        int nC = input.nextInt();

        int max = maximoEntreTresNumeros(nA, nB, nC);

        System.out.println("El número máximo entre " + nA + ", " + nB + ", y " + nC + " es: " + max);

        System.out.println("Por favor, introduce un texto: ");
        String txtA = input.next();
        System.out.println("Por favor, introduce un texto: ");
        String txtB = input.next();

        cadenasDeTextoDistintas(txtA, txtB);
    }
    public static boolean esDivisible(int n, int divisor) {
        return n % divisor == 0;
    }

    public  static  boolean esPrimo(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i < n; i++) {
            if (esDivisible(n, i)) {
                return false;
            }
        }
        return true;
    }
    public  static Integer maximoEntreTresNumeros(Integer unNumeroA, Integer unNumeroB, Integer unNumeroC) {
        int maximo = unNumeroA;

        if (unNumeroB > maximo) {
            maximo = unNumeroB;
        }

        if (unNumeroC > maximo) {
            maximo = unNumeroC;
        }

        return maximo;
    }
    public static boolean cadenasDeTextoDistintas(String unTextoA, String unTextoB) {
        return !unTextoA.equals(unTextoB);
    }
}
