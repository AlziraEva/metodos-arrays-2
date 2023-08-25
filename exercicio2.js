const array = ['lola.jpd', 'foto.pad', 'livro.pdf', 'coisa.bat']

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivos) => {
        const existeArquivo = arquivos.includes(".bat")
        return existeArquivo === true
    })
    if (resultado) {
        console.log('virus detectado')
    } else {
        console.log('virus não detectado')
    }
}
antiVirus(array)