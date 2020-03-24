const port = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))


app.get('/produtos', (req, res, netx) => {
        res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res, netx) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, netx) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos:id', (req, res, netx) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos:id', (req, res, netx) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
