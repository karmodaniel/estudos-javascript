//var não diferencia variaveis declaradas dentro e fora do bloco, exceto por função
var numero = 1
{
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)

function ola (){
    var oi = 'ola'
    console.log(oi)
}
ola()
var oi = 'hello'
console.log(oi)

// a variavel i mostrada do bloco imprime o valor do qual fez o loop se encerrar, 10 não é maior que 10, portanto, o 10 é mostrado
for (var i = 1; i < 10 ; i++){
    console.log(i)
}   
    console.log('i =', i)

//mesmo imprimindo a variavel dentro de uma função, o var não respeita o escopo
const funcs = []

for (var i = 0; i < 10; i++ ){
    funcs.push(function() {
        console.log(i)
    });
}

console.log(i)
funcs[0]()
funcs[8]()