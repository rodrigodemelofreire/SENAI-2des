const express = require("express");
const Vendedores = require("../controllers/vendedores.js");

const router = express.Router();

router.get('/vendedores', Vendedores.teste);
router.post('/vendedores/criar', Vendedores.criar);
router.get('/vendedores/listar', Vendedores.listar);
router.get('/vendedores/listar/:id', Vendedores.listar);
router.put('/vendedores/alterar', Vendedores.alterar);
router.delete('/vendedores/excluir/:id', Vendedores.excluir);

module.exports = router;