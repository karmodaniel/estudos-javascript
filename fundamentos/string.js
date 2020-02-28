const escola = "Cod3r"
//charAt mostra uma letra especifica na string
console.log(escola.charAt(4));
//indexOf mostra o index de um elemento 
console.log(escola.indexOf('3'));
//substring mostra a string a partir de um elemento até outro sem considerar o ultimo elemento
console.log(escola.substring(1, 3));
//concat concatena literias (conteúdo não amarzenado em uma variavel) com constantes etc..
console.log('I love study in '.concat(escola).concat(` ${escola}`));
//replace substitui um elemeneto pelo outro
console.log(escola.replace(3, 'e'));
//split transforma a string em um array
console.log('Daniel,Davi,Leonardo'.split(','));
//.includes motra se o elemento existe na string(true, false)
console.log(escola.includes('r'));


let nome = "Daniel"
console.log(nome.substring(1))