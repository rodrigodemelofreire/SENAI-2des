class Usuario{
    endereco = {}
    constructor (i){
        this.id = i.id
        this.cpf = i.cpf
        this.email = i.email
        this.senha = i.senha
        this.nascto = i.nascto
        this.endereco.cep = i.cep
        this.endereco.numero = i.numero
        this.endereco.complemento = i.complemento
        this.telefones = i.telefones == undefined ? [] : i.telefones.split(',')
    }

    read() {
        if(this.id == undefined)
            return `SELECT * FROM 
            users`
        else
            return `SELECT * FROM users WHERE id = ${this.id}`
    }

    login(){
        return `SELECT * FROM users WHERE email = '${this.email}' AND senha = password('${this.senha}')`
    }

    update(){
        return `UPDATE vw_usuarios SET nome = '${this.nome}', cpf = '${this.cpf}', 
        email = '${this.email}', senha = '${this.senha}', cep = '${this.endereco.cep}',
        numero = '${this.endereco.numero}',complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`
    }
}



module.exports = Usuario;