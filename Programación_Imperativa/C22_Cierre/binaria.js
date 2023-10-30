const encuestas = [
    { tema: 'Bohemian Rhapsody', votos: 10 },
    { tema: 'Hotel California', votos: 5 },
    { tema: 'Imagine', votos: 20 },
    { tema: 'Stairway to Heaven', votos: 8 },
    { tema: 'Hey Jude', votos: 15 },
    { tema: 'Smells Like Teen Spirit', votos: 12 },
];

function obtenerVotos(tema, encuestas) {
    // Ordenar la lista de encuestas por la cantidad de votos de forma ascendente
    encuestas.sort((a, b) => a.votos - b.votos);

    // Buscar el tema y obtener la cantidad de votos
    let votosMid;
    encuestas.forEach(elemento => {
        if (elemento.tema === tema) {
            votosMid = elemento.votos;
        }
    });

    // Realizar una búsqueda binaria para encontrar el tema con la cantidad de votos
    let start = 0;
    let end = encuestas.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (encuestas[mid].votos !== votosMid) {
        if (encuestas[mid].votos > votosMid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }

    // Mostrar el resultado en la consola
    console.log(`El tema "${tema}" obtuvo ${encuestas[mid].votos} votos.`);
}

obtenerVotos('Hey Jude', encuestas);
obtenerVotos('Smells Like Teen Spirit', encuestas);
