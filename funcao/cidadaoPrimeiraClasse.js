// Funcao em JS é First-Class Object (Citizens)
//A liguagem trata função com um dado
// Higher-order function

//criar de forma literal

function func1 () {}

//Armazenar em uma varíavel 
//Função anonima
const func2 = function () { }

//Armazenar em um array

const array = [ function (a, b) {return a + b}, func1, func2]
//chamada da funcao dentro de uma array
console.log(array[0](2, 4))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'Opa'}
//chamada da funcao de um objeto
console.log(obj.falar())

// Passar função com param

function run (fun) {
    fun()
}

run(function () {console.log('teste')})

//Uma função pode retornar/conter uma função

function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 5)(1)
const cincoMais = soma (2, 4)
cincoMais(5)
