import java.time.Year;

public class Computadora {
    private String marca;
    private String modelo;
    private Year anioFabricacion;
    private ComputadoraTipo tipo;
    private DiscoRigido disco;
    private Procesador procesador;
    private Memoria memoria1;
    private Memoria memoria2;

    public Computadora(String marca, String modelo, Year anoFabricacion, ComputadoraTipo tipo, DiscoRigido disco, Procesador procesador, Memoria memoria1, Memoria memoria2) {
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.tipo = tipo;
        this.disco = disco;
        this.procesador = procesador;
        this.memoria1 = memoria1;
        this.memoria2 = memoria2;
    }
}
