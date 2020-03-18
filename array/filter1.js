const array = [1, 2, 3, 4, 5]
result = array.filter(function (array){
    return array % 2 == 1
})

console.log(`Numeros impares: ${result}.`)

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

produtosFrageis = produto => produto.fragil
produtosCaros = produto => produto.preco >= 500

filtro = produtos.filter(produtosCaros).filter(produtosFrageis)
console.log(filtro)