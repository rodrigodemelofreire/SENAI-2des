const express = require("express");
const router = express.Router();

const Categoria = require('../controllers/categoria');

router.get('/', Categoria.teste);
router.post('/categoria/criar', Categoria.criar);
router.get('/categoria/listar', Categoria.listar);
router.get('/categoria/listar/:id', Categoria.listar);
router.put('/categoria/alterar', Categoria.alterar);
router.delete('/categoria/excluir/:id', Categoria.excluir);

module.exports = router
