public class Consultorio {
    private int numero;
    private Veterinario veterinarioAsignado;

    public Consultorio(int numero) {
        this.numero = numero;
    }

    public void asignarVeterinario(Veterinario vet) {
        this.veterinarioAsignado = vet;
    }
}
