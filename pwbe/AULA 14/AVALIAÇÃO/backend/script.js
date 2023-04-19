const express = require("express");
const cors = require("cors");

const vendedoresRoutes = require("./src/routes/vendedores.js");
const vendasRoutes = require("./src/routes/vendas.js");
const produtosRoutes = require("./src/routes/produtos.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', vendedoresRoutes)
app.use('/', vendasRoutes)
app.use('/', produtosRoutes)


app.listen(3000, () => {
    console.log("tá Joia");
});