const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//retorna as chaves de um objeto
console.log(Object.keys(pessoa))
//retorna os valores do objeto
console.log(Object.values(pessoa))
//retorna um array com os objetos
console.log(Object.entries(pessoa))

//manipulando o array de objetos usando forEach e destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)

const dest = {a: 2}
const o1 = {b: 3}
const o2 = {c: 4, a: 5}
//primeiro parametro é o objeto de destino, e os outro são os objeto de valores passados
const obj = Object.assign(dest, o1, o2)
console.log(obj)

//Não permite a alteração do objeto
Object.freeze(obj)
obj.c = 1234
console.log(obj)
