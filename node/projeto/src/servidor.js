const port = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req, res, netx) => {
        res.send({nome: 'Notebook', preco: '123.45'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
