//Closure é o escopo criado quando uma função é declarada
//Esse escopo perimite a função acessar e manipular vairáveis externas a função


const x = 'Global'

function fora (){
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())