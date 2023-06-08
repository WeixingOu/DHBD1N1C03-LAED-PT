const misMascotas = [];

const mascota1 = {
    nombre: 'Luna',
    raza: 'Perro',
    edad: 3,
    sonido: 'Guau',
    duplicarSonido: function() {
        return this.sonido + ' ' + this.sonido;
    }
};

const mascota2 = {
    nombre: "Duma",
    raza: "Gato",
    edad: 5,
    sonido: "Miau",
    duplicarSonido: function() {
      return this.sonido + " " + this.sonido;
    }
};

const mascota3 = {
    nombre: "Pelusa",
    raza: "Pollito",
    edad: 2,
    sonido: "Pio",
    duplicarSonido: function() {
      return this.sonido + " " + this.sonido;
    }
};

misMascotas.push(mascota1, mascota2, mascota3);

const aumentarEdad = () => {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].edad += 1;
    }
};

const aumentarEdad2 = () => {
    for (let i = 0; i < misMascotas.length; i++) {
        if (misMascotas[i].edad < 6) {
            misMascotas[i] += 1;
        } else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10) {
            misMascotas[i].edad += 2;
        } else {
            misMascotas[i].edad += misMascotas[i].edad / 2;
        }
    }
};

function asignarID() {
    let id = 1;
    for (let i = 0; i < misMascotas.length; i++) {
      misMascotas[i].id = id;
      id++;
    }
  }
  
asignarID();
console.log(misMascotas);