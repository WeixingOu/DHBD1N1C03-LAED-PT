public class Objeto {
    protected int posX;
    protected int posY;
    protected char direccion;

    public Objeto(int posX, int posY, char direccion) {
        this.posX = posX;
        this.posY = posY;
        this.direccion = direccion;
    }

    public void irA(int x, int y, char direccion) {
        this.posX = x;
        this.posY = y;
        this.direccion = direccion;
    }

    @Override
    public String toString() {
        return "[x=" + posX + ", y=" + posY + ", direccion=" + direccion + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + direccion;
        result = prime * result + posX;
        result = prime * result + posY;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Objeto other = (Objeto) obj;
        if (direccion != other.direccion)
            return false;
        if (posX != other.posX)
            return false;
        if (posY != other.posY)
            return false;
        return true;
    }
}
