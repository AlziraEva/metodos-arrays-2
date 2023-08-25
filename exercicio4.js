const professores = [
    { nome: 'Guido', stack: 'Backend' },
    { nome: 'Juninho', stack: 'Backend' },
    { nome: 'Julia', stack: 'Frontend' }
]

const resultadoBackend = professores.filter((disciplina) => {
    return disciplina.stack === 'Backend'
})
const resultadoFrontend = professores.filter((disciplina) => {
    return disciplina.stack === 'Frontend'
})
console.log(resultadoBackend)
console.log(resultadoFrontend)