const fs = require('fs');

let libros = [];

function cargarLibros() {
    try {
        const data = fs.readFileSync('libros.json', 'utf8');
        libros = JSON.parse(data);
    } catch (error) {
        console.log('No se pudo leer el archivo de libros. Iniciando con lista vacía.');
        libros = [];
    }
}

function guardarLibros() {
    try {
        fs.writeFileSync('libros.json', JSON.stringify(libros));
    } catch (error) {
        console.error('Error al guardar los libros:', error);
    }
}

function agregarLibro(id, titulo, autor, anoPublicacion, genero) {
    const libroExistente = libros.find(libro => libro.id === id);
    if (libroExistente) {
        console.error('Error: El libro con ese ID ya existe.');
        return;
    }
    libros.push({
        id,
        titulo,
        autor,
        anoPublicacion,
        genero
    });
    guardarLibros();
}

function buscarLibroPorId(id) {
    return libros.find(libro => libro.id === id);
}

function editarLibro(id, nuevoTitulo, nuevoAutor, nuevoAno, nuevoGenero) {
    const libro = buscarLibroPorId(id);
    if (!libro) {
        console.error('Error: No se encontró el libro con ese ID.');
        return;
    }
    libro.titulo = nuevoTitulo;
    libro.autor = nuevoAutor;
    libro.anoPublicacion = nuevoAno;
    libro.genero = nuevoGenero;
    guardarLibros();
}

function eliminarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id);
    if (indice === -1) {
        console.error('Error: No se encontró el libro con ese ID.');
        return;
    }
    libros.splice(indice, 1);
    guardarLibros();
}

function listarLibros() {
    return libros;
}

// Cargar libros al iniciar
cargarLibros();

// Ejemplos de uso:
agregarLibro(1, "El principito", "Antoine de Saint-Exupéry", 1943, "Ficción");
agregarLibro(2, "1984", "George Orwell", 1949, "Distopía");
console.log(buscarLibroPorId(1));  // Debería mostrar los detalles de "El principito"
editarLibro(1, "El Principito editado", "Antoine de Saint-Exupéry", 1943, "Ficción");
eliminarLibro(2);
console.log(listarLibros());  // Debería mostrar solo "El Principito editado"