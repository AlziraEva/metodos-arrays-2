const produtos = [
    { nome: 'carne', preco: 5000 },
    { nome: 'arroz', preco: 1000 },
    { nome: 'feijao', preco: 2000 }
]

const produtosComDesconto = produtos.map((cadaProduto) => {
    return {
        nome: cadaProduto.nome,
        preco: cadaProduto.preco,
        desconto: cadaProduto.preco * 0.1
    }
})
console.log(produtosComDesconto)