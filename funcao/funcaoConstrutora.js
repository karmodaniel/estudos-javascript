function Carro (velocidadeMaxima = 200, delta = 5){
    //metodo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo privado
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

ferrari = new Carro(310, 30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())