const prod1 = {}

prod1.nome = 'Celular'
prod1.preco = 1.089
prod1['peso'] = 1.2

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: '79.90',
    cor:{
        quentes: 'vermelho',
        frias: 'azul'
    }
}

console.log(prod2.cor.quentes)
