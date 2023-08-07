import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        /**** Ejercicio Array ****/

        String[] nombres = new String[5];

        nombres[0] = "Juan";
        nombres[1] = "Mario";
        nombres[2] = "Carlos";

        /*acceder a un elemento por su indice*/
        System.out.println(nombres[0]);

        /*descomentar y ver que sucede accediendo a una posicion fuera de rango*/
        //System.out.println(nombres[7]);

        /*recorrer un array con un ciclo for*/
        for(int i = 0; i<nombres.length; i++)
            System.out.println(nombres[i]);

        /*recorrer un array con un ciclo while*/
        int i = 0;
        while(i < nombres.length) {
            System.out.println(nombres[i]);
            i++;
        }

        /*recorrer un array con un ciclo for each*/
        for(String nombre : nombres)
            System.out.println(nombre);

        /**** Ejerciocio 1 ****/

        // Definiendo tres cadenas
        String cadena1 = "¡Hola, Mundo!";
        String cadena2 = "¡Hola, Mundo!";
        String cadena3 = "¡Adiós, Mundo!";

        // Comparando cadena1 y cadena2
        if(cadena1.equals(cadena2))
            System.out.println("cadena1 y cadena2 son iguales");
        else
            System.out.println("cadena1 y cadena2 son distintas");

        // Comparando cadena1 y cadena3
        if(cadena1.equals(cadena3))
            System.out.println("cadena1 y cadena3 son iguales");
        else
            System.out.println("cadena1 y cadena3 son distintas");

        /**** Ejercicio 2 ****/

        // Definiendo dos Integer
        Integer num1 = 10;
        Integer num2 = 20;

        // Comparando num1 y num2
        if(num1 > num2)
            System.out.println("num1 es mayor que num2");
        else if(num1 < num2)
            System.out.println("num1 es menor que num2");
        else
            System.out.println("num1 y num2 son iguales");

        /**** Ejercicio 3 ****/
        // Creando un objeto Scanner para leer la entrada del usuario
        Scanner input = new Scanner(System.in);

        // Solicitando al usuario que introduzca dos números
        System.out.println("Por favor, introduce el primer número:");
        Integer num01 = input.nextInt();
        System.out.println("Por favor, introduce el segundo número:");
        Integer num02 = input.nextInt();

        // Comparando num1 y num2
        if(num01 > num02)
            System.out.println(num01 + " es mayor que " + num02);
        else if(num01 < num02)
            System.out.println(num01 + " es menor que " + num02);
        else
            System.out.println("Ambos números son iguales.");

        // Cerrando el Scanner para evitar fugas de memoria
        input.close();

        System.out.println(esDivisible(10, 2)); // True
    }
    /**** Ejercicio 3 ****/
    public static boolean esDivisible(int n , int divisor) {
        return n % divisor == 0;
    }
}