const carros = [
    { nome: 'bamboby', marca: 'fusca', cor: 'amarelo' },
    { nome: 'uno', marca: 'fiat', cor: 'cinza' }
]

const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca
    })
    console.log(resultado)
}
buscarCarro('fiat', carros)