const usuarios = [
    { nome: "joao", idade: 18 },
    { nome: 'vanessa', idade: 17 }
]

function verificarFesta(usuarios) {
    const resultado = usuarios.every(function (elemento) {
        return elemento.idade > 17
    })
    if (resultado) {
        console.log("Festa Liberada")
    } else {
        console.log("tem menor de idade")
    }
}

verificarFesta(usuarios)

