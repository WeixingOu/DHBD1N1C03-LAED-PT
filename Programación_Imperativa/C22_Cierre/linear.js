const encuestas = [
    { tema: 'Bohemian Rhapsody', votos: 10 },
    { tema: 'Hotel California', votos: 5 },
    { tema: 'Imagine', votos: 20 },
    { tema: 'Stairway to Heaven', votos: 8 },
    { tema: 'Hey Jude', votos: 15 },
    { tema: 'Smells Like Teen Spirit', votos: 12 },
];

const obtenerVotos = (tema, encuestas) => {
    for (let i = 0; i < encuestas.length; i++) {
        if (encuestas[i].tema === tema) {
            console.log(`El tema "${tema}" obtuvo ${encuestas[i].votos} votos.`);
            return;
        }
    }
    console.log(`El tema "${tema}" no fue encontrado en las encuestas.`);
}
obtenerVotos('Hey Jude', encuestas);

const forEachVotos = (tema, encuestas) => {
    encuestas.forEach( elemento => {
        if (elemento.tema === tema) {
            console.log(`El tema "${tema}" obtuvo ${elemento.votos} votos.`);
        }
    })
}
forEachVotos('Hey Jude', encuestas);