const express = require('express')
const cors = require('cors')

const clienteRouter = require('./src/routes/cliente')
const categoriaRouter = require('./src/routes/categoria')
const cardapioRouter = require('./src/routes/cardapio')
const avaliacaoRouter = require('./src/routes/avaliacao')
const restauranteRouter = require('./src/routes/restaurante')

const app = express()
app.use(express.json())
app.use(cors())
app.use(clienteRouter)
app.use(categoriaRouter)
app.use(cardapioRouter)
app.use(avaliacaoRouter)
app.use(restauranteRouter)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})