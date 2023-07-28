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

    let start = 0;
    let end = encuestas.length;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (encuestas[mid].votos === tema) {
            return mid;
        }

        if (encuestas[mid].votos > tema) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    console.log(`El tema "${tema}" obtuvo ${encuestas[mid].votos} votos.`);
}

obtenerVotos('Hey Jude', encuestas);
obtenerVotos('Smells Like Teen Spirit', encuestas);

