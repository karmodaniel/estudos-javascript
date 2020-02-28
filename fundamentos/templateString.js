const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
//template string
const template = `
    Olá
        ${nome}!`

console.log(concatenacao, template);

//arrow function
const up = texto => texto.toUpperCase();

console.log(`Ei ... ${up('cuidado')}`);

