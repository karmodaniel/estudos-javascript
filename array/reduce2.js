const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const bolsistas = alunos.map(bolsista => bolsista.bolsista)
todosBolsistas = (resultado, bolsista) => resultado && bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(bolsistas.reduce(todosBolsistas))
console.log(bolsistas.reduce(algumBolsista))
