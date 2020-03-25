const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias)
console.log(tecnologias.get('React').framework)

//o map pode ter varios tipos de chaves
const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]) 

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

//verificar se tem o valor

console.log(chavesVariadas.has(123))

//deletar um valor
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

//tamanho do map

console.log(chavesVariadas.size)
