//podemos acessar o valores passados na funcao atraves do arguments

function soma () {
    let soma = 0
    for ( i in arguments){
        soma += arguments[i]
        console.log(`conteudo da funcao: ${arguments[i]}`)
    }
    return soma
}

console.log(soma(2, 3, 3))