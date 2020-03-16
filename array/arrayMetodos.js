const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//pop remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

//push adiciona elementos no array
pilotos.push('Vestappen')
console.log(pilotos)

//shift remove o primeiro elemento do array
pilotos.shift() 
console.log(pilotos)

//unshift adiciona elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice adiciona e remove elementos do array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

// slice gera um novo array, mostra os elementos a partir do indice escolhido
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

//pega uma parte do array
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)


