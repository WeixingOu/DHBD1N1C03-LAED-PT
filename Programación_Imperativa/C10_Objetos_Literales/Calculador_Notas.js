let alumno = {
    nombre: '',
    numeroLegajo: '',
    listaNotas: [],
    notaAprobacion: 6,
    setNombre: function(nombre) {
        this.nombre = nombre;
    },
    setNumeroLegajo: function(numeroLegajo) {
        this.numeroLegajo = numeroLegajo;
    },
    agregarNota: function(nota) {
        this.listaNotas.push(nota);
    },
    Promedio: function() {
        if (this.listaNotas.length === 0) {
            return 0;
        }
        let sumNotas = this.listaNotas.reduce(function(acumulador, nota) {
            return acumulador + nota;
        });
        return sumNotas / this.listaNotas.length;
    }, 
    Aprobado: function() {
        return this.Promedio() >= this.notaAprobacion;
    }

};

alumno.setNombre("Juan");
alumno.setNumeroLegajo("123456");
alumno.agregarNota(8);
alumno.agregarNota(7);
alumno.agregarNota(6);
console.log(alumno.Promedio()); 
console.log(alumno.Aprobado()); 
console.log(alumno);