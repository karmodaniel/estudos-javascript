console.log(typeof String)
console.log(typeof Object)
console.log(typeof Array)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Aprendendo JS'.reverse())

Array.prototype.first = function () {
    return this[0]
}

array = [1, 2, 3, 4]
console.log(array.first())