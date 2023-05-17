DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes CHARSET=UTF8 COLLATE utf8_general_ci;
USE restaurantes;

CREATE TABLE cliente(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    telefone varchar (50) not null,
    email text,
    senha varchar(50) not null
);

CREATE TABLE categoria(
    id varchar(5) not null primary key,
    nome varchar(50) not null
);

CREATE TABLE restaurante(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    categoriaId varchar(50) not null,
    endereco varchar(50) not null
);

CREATE TABLE cardapio(
    id varchar(5) not null primary key,
    restauranteId varchar(50) not null,
    descricao varchar(50) not null,
    valor varchar(50) not null
);

CREATE TABLE avaliacao(
    restauranteId varchar(50) not null primary key,
    clienteId VARCHAR(50) not null,
    data date not null  ,
    nota varchar(50) not null,
    avaliacao varchar(50) not null
);

