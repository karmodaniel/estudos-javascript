//contornando a mudança de referencia do this com o bind
function Pessoa () {
    this.idade = 0

    setInterval (function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

//para contornar a mudança do this um recurso muito usado é armazena-lo dentro de uma constante

function Pessoa () {
    this.idade = 0
    const self = this
    setInterval (function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

