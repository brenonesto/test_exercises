

const jurosSimples = (capital, juros, tempo) => {
    return capital * juros * tempo
}

console.log(jurosSimples(100000, 0.1, 3))

const jurosSimplesM = (capital, juros, tempo) => {
    return capital + (capital * juros * tempo)
}

console.log(jurosSimplesM(100000, 0.1, 3))

const montanteJurosCompostos = (capital, juros, tempo) => capital * Math.pow((1 + juros), tempo)

console.log(montanteJurosCompostos(100000, 0.1, 3))