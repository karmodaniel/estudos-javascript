const notas = [7.7, 6.5, 5.2, 8.9, 7.1, 9.0]

//Sem callback

let notasBaixas = []

for (let i = 0; i < notas.length; i++){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


//Com callback
//fil
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)