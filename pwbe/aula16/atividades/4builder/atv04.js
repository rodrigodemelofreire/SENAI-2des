class CompraComponent {
    getTotal() {
      throw new Error("getTotal() must be implemented");
    }
  }
  
  class Compra extends CompraComponent {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
      super();
      this.id = id;
      this.data = new Date(data);
      this.produto = produto;
      this.cliente = cliente;
      this.totalParcelas = totalParcelas;
      this.preco = preco;
      this.quantidade = quantidade;
      this.total = this.getTotal();
      this.parcelas = [];
    }
  
    getTotal() {
      return this.preco * this.quantidade;
    }
  
    addParcela(parcela) {
      this.parcelas.push(parcela);
    }
  }
  
  class Parcela extends CompraComponent {
    constructor(id, compra, dataVencimento, dataPagamento) {
      super();
      this.id = id;
      this.compra = compra;
      this.dataVencimento = new Date(dataVencimento);
      this.dataPagamento = dataPagamento != undefined ? new Date(dataPagamento) : undefined;
      this.valorParcela = this.getValorParcela();
      this.Juros = this.getJuros();
    }
  
    getValorParcela() {
      return this.compra.totalParcelas > 0 ? this.compra.total / this.compra.totalParcelas : this.compra.total;
    }
  
    getDiasAtraso() {
      if (this.dataPagamento == undefined || this.dataPagamento == null)
        return 0;
      else if (this.dataPagamento > this.dataVencimento) {
        const diferencaEmMilissegundos = this.dataPagamento - this.dataVencimento;
        const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
        return Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
      } else {
        return 0;
      }
    }
  
    getJuros() {
      return this.valorParcela * 0.01 * this.getDiasAtraso();
    }
  
    getTotal() {
      return this.valorParcela + this.Juros;
    }
  }
  
  class CompraComposite extends CompraComponent {
    constructor() {
      super();
      this.compras = [];
    }
  
    addCompra(compra) {
      this.compras.push(compra);
    }
  
    getTotal() {
      let total = 0;
      for (const compra of this.compras) {
        total += compra.getTotal();
      }
      return total;
    }
  }
  
  const comprasComposite = new CompraComposite();
  
  const compra1 = new Compra(1, "2022-03-25", "TV LCD 4K 50' LG", "Jair Santana", 4, 2800.0, 2);
  const compra2 = new Compra(2, "2022-05-12", "TV LCD 4K 50' Sansung", "Jurema Santana", 2, 3100.0, 1);
  const compra3 = new Compra(3, "2022-06-08", "TV LCD 4K 50' LG", "Mariana Silva", 3, 2850.0, 2);
  const compra4 = new Compra(4, "2023-02-17", "TV LCD 4K 50' Sansung", "Marta Oliveira", 5, 2899.9, 1);
  
  comprasComposite.addCompra(compra1);
  comprasComposite.addCompra(compra2);
  comprasComposite.addCompra(compra3);
  comprasComposite.addCompra(compra4);
  
  const parcelas = [
    new Parcela(1, compra1, "2022-04-25", "2022-04-23"),
    new Parcela(2, compra1, "2022-05-25", "2022-05-24"),
    new Parcela(3, compra1, "2022-06-25", "2022-06-27"),
    new Parcela(4, compra1, "2022-07-25", "2022-07-30"),
    new Parcela(5, compra2, "2022-06-12", "2022-06-12"),
    new Parcela(6, compra2, "2022-07-12", "2022-07-15"),
    new Parcela(7, compra3, "2022-07-08", "2022-07-18"),
    new Parcela(8, compra3, "2022-08-08", "2022-08-08"),
    new Parcela(9, compra3, "2022-09-08", "2022-09-06"),
    new Parcela(10, compra4, "2023-03-17", "2023-03-20"),
    new Parcela(11, compra4, "2023-04-17", "2023-04-22"),
    new Parcela(12, compra4, "2023-05-17", null),
    new Parcela(13, compra4, "2023-06-17", null),
    new Parcela(14, compra4, "2023-07-17", null),
  ];
  
  console.log(parcelas);
  