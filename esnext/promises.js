function falarDepoisDe(segundo, frase){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(frase)
        }, segundo * 1000)
        
    })
}

falarDepoisDe(3, 'Legal')
    .then(result => {
        console.log(result)
    })