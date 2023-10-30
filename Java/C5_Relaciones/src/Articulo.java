import java.time.LocalDate;

public class Articulo {
    private String titulo;
    private String tema;
    private String autor;
    private LocalDate fechaArticulo;

    public Articulo(String titulo, String tema, String autor, LocalDate fechaArticulo) {
        this.titulo = titulo;
        this.tema = tema;
        this.autor = autor;
        this.fechaArticulo = fechaArticulo;
    }

    public String getTitulo() {
        return titulo;
    }
    public String getTema() {
        return tema;
    }
    public String getAutor() {
        return autor;
    }
    public LocalDate getFechaArticulo() {
        return fechaArticulo;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }
    public void setFechaArticulo(LocalDate fechaArticulo) {
        this.fechaArticulo = fechaArticulo;
    }
    public void setTema(String tema) {
        this.tema = tema;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}
