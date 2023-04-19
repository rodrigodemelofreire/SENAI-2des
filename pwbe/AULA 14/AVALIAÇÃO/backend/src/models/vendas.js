class Vendas {
    
    constructor(i) {
        this.id = i.id
        this.data = i.data
        this.quantidade = i.quantidade
        this.produtoId = i.produtoId
        this.vendedorId = i.vendedorId
    }
    
    create() {
        return `INSERT INTO vendas VALUES ('${this.id}', '${this.data}', '${this.quantidade}', '${this.produtoId}', '${this.vendedorId}')`
    }
    
    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = '${this.id}'`
    }
    
    update() {
        return `UPDATE vendas SET quantidade = '${this.quantidade}', produtoId = '${this.produtoId}', vendedorId = '${this.vendedorId}' WHERE id = '${this.id}'`
    }
    
    delete() {
        return `DELETE FROM vendas WHERE id = '${this.id}'`
    }
   
}

module.exports = Vendas
