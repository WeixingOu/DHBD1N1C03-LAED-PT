public class Main {
    public static void main(String[] args) {
        UsuarioJuego usuario = new UsuarioJuego("Juan", "pass123");
        System.out.println(usuario);

        usuario.aumentarPuntaje();
        usuario.subirNivel();
        usuario.bonus(5);
        System.out.println(usuario);
    }
}
