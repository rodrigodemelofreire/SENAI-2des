class Restaurante {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.telefone = i.telefone
        this.email = i.email
        this.senha = i.senha

    }

    create() {
        return `INSERT INTO restaurante VALUES ('${this.id}', '${this.nome}', '${this.telefone}', '${this.email}', '${this.senha}')`;
    }
    

    read() {
        if (this.id == undefined)
            return `SELECT id,nome,telefone,email FROM restaurante`
        else
            return `SELECT id,nome,telefone,email FROM restaurante WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE restaurante SET nome = '${this.nome}', telefone = '${this.telefone}', email = '${this.email}', senha = '${this.senha}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM restaurante WHERE id = '${this.id}'`
    }
} 

module.exports = Restaurante;
