DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes CHARSET=UTF8 COLLATE utf8_general_ci;
USE restaurantes;

CREATE TABLE Cliente (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);


CREATE TABLE Categoria (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE Restaurante (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  categoriaId INT NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  FOREIGN KEY (categoriaId) REFERENCES Categoria(id)
);

CREATE TABLE Cardapio (
  id INT PRIMARY KEY AUTO_INCREMENT,
  restauranteId INT NOT NULL,
  descricao VARCHAR(200) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (restauranteId) REFERENCES Restaurante(id)
);

CREATE TABLE Avaliacao (
  restauranteId INT NOT NULL,
  clienteId INT NOT NULL,
  data DATE NOT NULL,
  nota INT NOT NULL,
  descricao VARCHAR(200) NOT NULL,
  FOREIGN KEY (restauranteId) REFERENCES Restaurante(id),
  FOREIGN KEY (clienteId) REFERENCES Cliente(id)
);

INSERT INTO cliente VALUES
    (NULL, "Rodrigo Melo", "(19)94585-1544", "diggoreidelas@gmail.com", "caldocana"),
    (NULL, "Matheus Oliveira", "(13)97123-4018", "noiadigital@gmail.com", "sinuca10"),
    (NULL, "Gabriel Jesus", "(19)99724-8065", "jesuscabelo@gmail.com", "itatinga"),
    (NULL, "João Rodrigues", "(19)99952-0750", "patamansa@gmail.com", "maosfofas"),
    (NULL, "Karen Costa", "(19)9982-8922", "egrilogotica@gmail.com", "botafogo"),
    (NULL, "João Pedro Tomaz", "(19)9999-9999", "juauntiktokerofc@gmail.com", "vascainos");

INSERT INTO categoria VALUES
    (NULL, "Brasileira"),
    (NULL, "Marmita"),
    (NULL, "Lanches"),
    (NULL, "Saldável"),
    (NULL, "Japonesa"),
    (NULL, "Italiana"),
    (NULL, "Pizza"),
    (NULL, "Doces & Bolos"),
    (NULL, "Salgados"),
    (NULL, "Pastel"),
    (NULL, "Açaí"),
    (NULL, "Sorvetes");

INSERT INTO restaurante VALUES
    (NULL, "Mix Açaí", 11, "Rua dos Açaí, 35"),
    (NULL, "Contra Filé", 4, "Rua dos vegano, 66"),
    (NULL, "Bar dos lagos", 1, "Rua do parque dos lagos, 78"),
    (NULL, "Marchesini", 1, "Rua dos marquiesi, 875"),
    (NULL, "Subway", 3, "Rua perto do hospital, 15"),
    (NULL, "McDonald's", 3, "Rua do centro, 65"),
    (NULL, "Salad Fresh", 3, "Rua n sei, 96"),
    (NULL, "Oggi", 12, "Rua pao, 69");

INSERT INTO cardapio VALUES
    (NULL, 1, "ACAI 500ml", 15.5),
    (NULL, 2, "Carne de soja", 25.9),
    (NULL, 3, "cervejinha", 5.9 ),
    (NULL, 3, "cervejinha", 5.9 );

INSERT INTO avaliacao VALUES 
   (1, 1, '2023-04-11', 5.0, "DOREI O NOME DO RESTAURANTE VEGANO SER CONTRAFILÉKKKKKKKKK");
