//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(1,3);
imprimirSoma(2);
imprimirSoma(2, 10, 5, 5, 3, 2)
imprimirSoma()

//função com retorno
function soma(a, b = 0){
    return a + b;
}

console.log(soma(1, 3))