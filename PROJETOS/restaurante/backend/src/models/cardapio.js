class Cardapio {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.telefone = i.telefone
        this.email = i.email
        this.senha = i.senha

    }

    //id INT PRIMARY KEY AUTO_INCREMENT,
    //restauranteId INT NOT NULL,
    //descricao VARCHAR(200) NOT NULL,
    //valor DECIMAL(10, 2) NOT NULL,
    // FOREIGN KEY (restauranteId) REFERENCES Restaurante(id)

    create() {
        return `INSERT INTO cardapio VALUES ('${this.id}', '${this.nome}', '${this.telefone}', '${this.email}', '${this.senha}')`;
    }
    

    read() {
        if (this.id == undefined)
            return `SELECT id,nome,telefone,email FROM cardapio`
        else
            return `SELECT id,nome,telefone,email FROM cardapio WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE cardapio SET nome = '${this.nome}', telefone = '${this.telefone}', email = '${this.email}', senha = '${this.senha}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM cardapio WHERE id = '${this.id}'`
    }
} 

module.exports = Cardapio