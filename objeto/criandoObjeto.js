//usando notação literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcões construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 1.20, 0.02)
const p2 = new Produto('Notebook', 3599, 0.1)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('João', 6000, 4)
console.log(f1.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)