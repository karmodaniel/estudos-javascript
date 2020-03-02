//armazenando funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(1, 2)

//armazenado uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a +b;
}

console.log(soma(2, 4))

//com return implicito

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir = text => console.log( text )
imprimir('ggWP')
