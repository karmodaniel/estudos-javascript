//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' //não fazer isso
const avo = {attri: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr2)


const carro = {
    velAtual: 0,
    velMax: 200, 
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}


const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super é usado para referenciar o prototipo 
    }
}

//setPrototypeOf estabelece uma relação de prototype entre dois objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
ferrari.acelerarMais(100)
console.log(ferrari.status())

volvo.acelerarMais(20)
console.log(volvo)

