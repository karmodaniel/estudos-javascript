//try, tentar executar o comando
//catch, pega o erro
//throw, trata o erro
//finally, executa o que voce definiu de qualquer forma

function imprimirErro(erro){
    throw ('Alguma coisa deu errado')
}



function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (erro){
        imprimirErro(erro)
    }
}

const obj = {
    nome: 'Daniel',
    idade: 21
}

imprimirNome(obj)

