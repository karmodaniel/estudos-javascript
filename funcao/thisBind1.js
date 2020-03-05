const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//conflito entre paradigmas: funcional e OO
//nesse momento o this aponta somente para a função, da qual não exite saudação 
const talk = pessoa.falar
talk()

//bind recebe um objeto do qual o this será referenciado
//portanto, o this está referenciando o objeto pessoa
const falar = pessoa.falar.bind(pessoa)
falar()
