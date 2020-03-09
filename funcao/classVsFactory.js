class Pessoa {
    constructor (nome){
        this.nome = nome
    }

    falar () {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const daniel = new Pessoa('Daniel')
daniel.falar()


function People (nome){
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }

}

p1 = new People('Daniel')
p1.falar()