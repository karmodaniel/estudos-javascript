//map é um for com proposito
//tranforma um array em outro array dado a condição de mesmo tamanho
const nums = [1, 2, 3, 4, 5]

let result = nums.map(function(element) {
    return element * 2
})

console.log(result)