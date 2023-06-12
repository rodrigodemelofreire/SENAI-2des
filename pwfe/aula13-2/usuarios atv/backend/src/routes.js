const express = require("express");
const router = express.Router();

const Usuarios = require('./controllers/usuarios');

router.get('/usuarios/listar', Usuarios.listar);
router.get('/usuarios/listar/:id', Usuarios.listar);
router.post('/usuarios/login', Usuarios.login);

module.exports = router