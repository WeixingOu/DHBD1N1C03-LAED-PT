const alicia = [10, 80, 75];
const bob = [90, 20, 25];

const concurso = {
    etapas: [],
    ganador: '',
    encontrarGanador: function (a, b) {
        let ptA = 0;
        let ptB = 0;
        for (let i = 0; i < a.length; i++){
            if (a[i] > b[i]) {
                ptA++;
            } else if (a[i] < b[i]) {
                ptB++;
            }
        }
        if (ptA > ptB) {
            this.ganador = 'Primer Participante'
        } else if (ptA < ptB) {
            this.ganador = 'Segundo Participante'
        } else {
            this.ganador = ' '
        }

        this.etapas.push(ptA, ptB)
    },
    exportarResultados: function() {
        return JSON.stringify({ etapas: this.etapas })
    }
}
concurso.encontrarGanador(alicia, bob);
console.log(concurso); 

const resultadosJSON = concurso.exportarResultados();
console.log(resultadosJSON);