const notas = [6.7, 8.0, 4.1, 6,9]

//o IN é responsavel por obter os indices do array
for (let i in notas){
    console.log(`${i} - `, notas[i])
}


const pessoa = {
    nome: 'Davi',
    sobrenome: 'Araujo',
    idade: 20
}

//também pode ser usado para obter os indices do objeto
for (let atributo in pessoa){
    console.log(atributo + ': ' + pessoa[atributo])
}

