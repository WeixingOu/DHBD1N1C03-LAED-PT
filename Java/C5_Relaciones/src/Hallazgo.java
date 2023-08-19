import java.time.LocalDate;
import java.time.Period;
import java.util.List;

public class Hallazgo {
    private Area area;
    private LocalDate fechaHallazgo;
    private List<Compromiso> compromisos;

    public Hallazgo(Area area, LocalDate fechaHallazgo, List<Compromiso> compromisos) {
        this.area = area;
        this.fechaHallazgo = fechaHallazgo;
        this.compromisos = compromisos;
    }

    public boolean estaEnEstadoCritico() {
        LocalDate fechaLimite = fechaHallazgo.plusMonths(3);
        for (Compromiso compromiso : compromisos) {
            if (compromiso.getFechaCompromiso().isAfter(fechaLimite)) {
                return true;
            }
        }
        return false;
    }

    public Area getArea() {
        return area;
    }
    public LocalDate getFechaHallazgo() {
        return fechaHallazgo;
    }
    public List<Compromiso> getCompromisos() {
        return compromisos;
    }

    public void setArea(Area area) {
        this.area = area;
    }
    public void setCompromisos(List<Compromiso> compromisos) {
        this.compromisos = compromisos;
    }
    public void setFechaHallazgo(LocalDate fechaHallazgo) {
        this.fechaHallazgo = fechaHallazgo;
    }
}
