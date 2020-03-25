//O for of percorre encima do valores
//pode ser usado com o map, set, array etc...
for (let letras of "Cod3r") {
    console.log(letras)
}

//Enquanto o for In percorre encima dos indices

const assuntosEcma = ['Set', 'Map', 'Promise']
for (let assuntos in assuntosEcma) {
    console.log(assuntos)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

//exemplo com map

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

//percorrendo as chaves

for (let chave of assuntosMap.keys()) {
    console.log(chave)

}

//percorrendo os valores

for (let valores of assuntosMap.values()) {
    console.log(valores)
}

//desestruturando 

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}