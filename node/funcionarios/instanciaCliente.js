const moduloA = require('./instanciaUnica')
const ModuloB = require('./instanciaUnica')

moduloA.inc()
moduloA.inc()
console.log(ModuloB.valor)

const contadorA = require('./instanciaNova')()
const contadorB = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)
