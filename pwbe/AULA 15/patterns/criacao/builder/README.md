# Builder (Exemplo ChatGPT)
O padrão de projeto Builder é usado para separar a construção de um objeto complexo de sua representação final, permitindo que o mesmo processo de construção possa criar diferentes representações. Aqui está um exemplo de como usar o padrão Builder em JavaScript:

```javascript
class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  listParts() {
    console.log(`Partes do produto: ${this.parts.join(', ')}`);
  }
}

class Builder {
  buildPart1() {}
  buildPart2() {}
  buildPart3() {}
}

class ConcreteBuilder1 extends Builder {
  constructor() {
    super();
    this.product = new Product();
  }

  buildPart1() {
    this.product.addPart('Parte 1 do produto construída pelo Construtor 1');
  }

  buildPart2() {
    this.product.addPart('Parte 2 do produto construída pelo Construtor 1');
  }

  buildPart3() {
    this.product.addPart('Parte 3 do produto construída pelo Construtor 1');
  }

  getProduct() {
    return this.product;
  }
}

class ConcreteBuilder2 extends Builder {
  constructor() {
    super();
    this.product = new Product();
  }

  buildPart1() {
    this.product.addPart('Parte 1 do produto construída pelo Construtor 2');
  }

  buildPart2() {
    this.product.addPart('Parte 2 do produto construída pelo Construtor 2');
  }

  buildPart3() {
    this.product.addPart('Parte 3 do produto construída pelo Construtor 2');
  }

  getProduct() {
    return this.product;
  }
}

class Director {
  constructor() {
    this.builder = null;
  }

  setBuilder(builder) {
    this.builder = builder;
  }

  buildMinimalProduct() {
    this.builder.buildPart1();
  }

  buildFullProduct() {
    this.builder.buildPart1();
    this.builder.buildPart2();
    this.builder.buildPart3();
  }
}

// Exemplo de uso:

const director = new Director();
const builder1 = new ConcreteBuilder1();
const builder2 = new ConcreteBuilder2();

director.setBuilder(builder1);
director.buildFullProduct();
const product1 = builder1.getProduct();
product1.listParts();

director.setBuilder(builder2);
director.buildMinimalProduct();
const product2 = builder2.getProduct();
product2.listParts();
```