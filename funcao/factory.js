//Factory

function criarProduto () {
    return {
        nome: '...',
        preco: 12.5
    }
}

console.log(criarProduto())


function createProduct (nome = 'Macarrão', preco = 5.80 ) {
    return {
        nome: nome,
        preco: preco,
        quant: 1
    }
}

console.log(createProduct('Arroz', 5.90 ))
console.log(createProduct())