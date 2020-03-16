const pai = {nome: 'Daniel', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corCabelo)


const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ? //hasOwnProperty verifica se os atributos são do proprio objeto ou vieram por herança 
    console.log(key) : console.log(`Por herença: ${key}`)
}