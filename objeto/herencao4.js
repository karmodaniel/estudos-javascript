function MeuObjeto ()  {}
console.log(MeuObjeto.prototype)

const ob1 = new MeuObjeto
const ob2 = new MeuObjeto

//O prototype de um objeto criado por uma função construtora é a propria funcao construtora .prototype e não o Object.prototype
console.log(ob1.__proto__ === ob2.__proto__)
console.log(ob1.__proto === Object.prototype)
console.log(ob1.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

ob1.falar()

ob2.nome = 'Daniel'
ob2.falar()


const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo essa loucura.
console.log((new MeuObjeto).__proto === MeuObjeto.prototype)
console.log(MeuObjeto.__proto === Function.prototype)
console.log(Function.prototype.__proto === Object.prototype)
console.log(Object.prototype.__proto__ === null)