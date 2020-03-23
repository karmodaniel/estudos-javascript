const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(result => {
    const funcionarios = result.data
    
    chinesa = funcionarios => funcionarios.pais === 'China'
    mulher = funcionarios => funcionarios.genero === 'F'
    menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }  
    aux = funcionarios
    .filter(chinesa)
    .filter(mulher)
    .reduce(menorSalario)
    console.log(aux)
}).catch(err => {
    console.log('erro', err)
})

