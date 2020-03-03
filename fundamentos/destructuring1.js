//novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua 04',
        numero: '100'
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)

const { endereco: { logradouro, numero, cep = '69086050'}} = pessoa

console.log(numero, cep)
 