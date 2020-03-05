//entrategia 1 para gerar um valor padrao

function soma (a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0))

//entrategia 2, 3, 4 para gerar um valor padrao
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = b in arguments ? b : a
    c = isNaN(c) ? 1 : c

    return a + b + c

}

console.log(soma2(), soma(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrao do ES2015

function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))