//Não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Santos').add('Bahia')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Vasco')
console.log(times)

const nomes = ['Daniel', 'Davi', 'Daniel']
const nomesSet = new Set(nomes)

console.log(nomesSet)



