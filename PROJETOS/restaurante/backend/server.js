
const express = require('express')
const cors = require('cors')

const clienteRouter = require('./src/routes/cliente')
const categoriaRouter = require('./src/routes/categoria')
const cardapioRouter = require('./src/routes/cardapio')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', clienteRouter)
app.use('/', categoriaRouter)
app.use('/', cardapioRouter)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})