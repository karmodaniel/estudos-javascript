const valores = [7.7, 8.5, 9.4, 10.1] 
console.log(valores[0], valores[3])
//quando não há o elemento buscado no array, retorna undefined
console.log(valores[4])
valores[4] = 10
console.log(valores)
console.log(valores.length)

//.push adiciona valores no array
console.log(valores.push({id: 3}, false, null, 'teste'))
console.log(valores)

//.pop remove o ultimo valor do array
console.log(valores.pop())
console.log(valores)

//delete remove um valor especifico do array
delete valores[0]
console.log(valores)

//array em JavaScript é um objeto 
console.log(typeof valores)