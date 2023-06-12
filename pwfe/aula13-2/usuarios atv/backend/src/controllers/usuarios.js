const con = require('../dao/connect')
const Usuario = require('../models/usuario')

function formatar(l) {
    const listar = []
    l.forEach(e => {
        listar.push(new Usuario(e))
    });
}


const listar = (req, res) => {
    let usuario = new Usuario(req.params)
    con.query(usuario.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
        else
            res.status(500).json('Banco de dados não respondeu').end()
    })
}

const login = (req, res) => {
    let usuario = new Usuario(req.body)
    con.query(usuario.login(), (err, result) => {
        if (err == null) {
            if (result.lenght > 0)
                res.status(202).json(formatar(result)).end()
            else
                res.status(404).json(formatar(result)).end()
        } else
            res.status(500).json('Banco de dados não respondeu').end()
    })
}
module.exports = {
    listar,
    login
}