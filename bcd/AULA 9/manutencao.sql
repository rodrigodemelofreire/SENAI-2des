DROP DATABASE IF EXISTS manutencoes;

CREATE DATABASE manutencoes CHARSET=UTF8 COLLATE utf8_general_ci;
USE manutencoes;

CREATE TABLE funcionario (
    matricula INT NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE telefone (
    matricula INT NOT NULL,
    numero VARCHAR(20) NOT NULL,
    FOREIGN KEY (matricula) REFERENCES funcionario(matricula)
);

CREATE TABLE veiculo(
    placa VARCHAR(10) NOT NULL PRIMARY KEY,
    modelo VARCHAR(10) NOT NULL,
    marca VARCHAR(10) NOT NULL,
    ano INT NOT NULL
);

CREATE TABLE manutencao(
    id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10) NOT NULL,
    matricula INT NOT NULL,
    inicio DATE NOT NULL,
    fim date,
    descricao TEXT,
    FOREIGN KEY (placa) REFERENCES veiculo(placa) ON UPDATE CASCADE,
    FOREIGN KEY (matricula) REFERENCES funcionario(matricula) ON UPDATE CASCADE
);