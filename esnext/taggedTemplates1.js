function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Daniel'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)