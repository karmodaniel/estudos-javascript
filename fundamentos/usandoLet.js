//let diferencia variaveis declaradas dentro e fora do bloco
let numero = 1
{
    let numero = 2
    console.log('dentro=', numero)
}
    console.log('fora', numero)

//mas quando nao encontra a variavel solicitada dentro do bloco, busca fora do escopo

    let num = 1
{
    let num2 = 2
    console.log('dentro=', num)
}
    console.log('fora', num)

//com o let, a variavel fora do loop não será reconhecida, portanto ocorrerá reference error
for (let i = 0; i < 10; i++ ){
    console.log(i)
}

// console.log('i = ', i)

// o let respeita os valores, ou seja, guarda o valor no momento em que foi criado
const funcs = []

for (let i = 0; i < 10; i++ ){
    funcs.push(function() {
        console.log(i)
    });
}

funcs[0]()
funcs[8]()
