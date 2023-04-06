DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE clientes(
    nome varchar(50) not null,
    cpf VARCHAR(14) not null,
    primary key (cpf)
);

CREATE TABLE telefone(
    cpf VARCHAR(14) not null,
    telefone varchar(15) not null,
    foreign key (cpf) references clientes(cpf)
);

CREATE TABLE endereco (
  cpf VARCHAR(14) not null,
  Rua varchar(50) not null,
  Bairro varchar(50) not null,
  Cidade varchar(50) not null,
  UF char(2) not null,
  foreign key (cpf) references clientes(cpf)
);


CREATE TABLE carro(
    placa varchar(8) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    ano int not null,
    diaria int not null
);

CREATE TABLE aluguel(
    placa varchar(8) not null,
    id_aluguel int not null primary key auto_increment,
    aluguel date not null,
    devolucao date,
    valor varchar(100) not null,
    observacao text not null,
    cpf VARCHAR(14) NOT NULL,
    foreign key (placa) references carros(placa) on update cascade,
    foreign key (cpf) references clientes(cpf) on update cascade
);

LOAD DATA INFILE 'E:/Rodrigo/SENAI-2des/bcd/AULA 10/entregar/cliente.CSV'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Rodrigo/SENAI-2des/bcd/AULA 10/entregar/telefone.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Rodrigo/SENAI-2des/bcd/AULA 10/entregar/endereco.CSV'
INTO TABLE endereco
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'E:/Rodrigo/SENAI-2des/bcd/AULA 10/entregar/carro.CSV'
INTO TABLE carro
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Rodrigo/SENAI-2des/bcd/AULA 10/entregar/aluga.CSV'
INTO TABLE aluguel
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;