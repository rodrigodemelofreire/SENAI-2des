const express = require("express");
const Vendas = require("../controllers/vendas.js");

const router = express.Router();

router.get('/vendas', Vendas.teste);
router.post('/vendas/criar', Vendas.criar);
router.get('/vendas/listar', Vendas.listar);
router.get('/vendas/listar/:id', Vendas.listar);
router.put('/vendas/alterar', Vendas.alterar);
router.delete('/vendas/excluir/:id', Vendas.excluir);

module.exports = router;