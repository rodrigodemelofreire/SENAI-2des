drop database if exists vendas_balcao;
create database vendas_balcao;
use vendas_balcao;
create table vendedor(
	id int not null primary key auto_increment,
	nome varchar(50) not null
);

create table cliente(
	id int not null primary key  auto_increment,
	nome varchar(50) not null,
	telefone varchar(15)
);

create table venda(
	id int not null primary key auto_increment,
	id_vendedor int,
	id_cliente int,
	data TIMESTAMP not null,
	valor float(8,2) not null
);

ALTER TABLE venda ADD CONSTRAINT fk_vende FOREIGN key (id_vendedor) REFERENCES vendedor(id);
ALTER TABLE venda ADD CONSTRAINT fk_compra FOREIGN key (id_cliente) REFERENCES cliente(id);

insert into vendedor(nome) VALUES
("Ana"),
("Maria"),
("Bruna");

insert into cliente(nome, telefone) VALUES
("Marcos",null),
("Rita","19-99787-7979"),
("Fernanda","19-99154-4445"),
("Marcelo",null);

Insert into venda VALUES
(default, null, null, TIMESTAMPADD(MINUTE,-1440,now()), 100.00),
(default, 1, null, TIMESTAMPADD(MINUTE,-1400,now()), 200.00),
(default, 3, 4, TIMESTAMPADD(MINUTE,-1345,now()), 150.00),
(default, null, null, TIMESTAMPADD(MINUTE,-1305,now()), 79.90),
(default, 1, null, TIMESTAMPADD(MINUTE,-1250,now()), 79.90),
(default, 2, 2, TIMESTAMPADD(MINUTE,-1180,now()), 89.90),
(default, 1, 2, TIMESTAMPADD(MINUTE,-1040,now()), 99.90),
(default, 3, null, TIMESTAMPADD(MINUTE,-1000,now()), 179.90),
(default, 1, 2, TIMESTAMPADD(MINUTE,-60,now()), 119.90),
(default, 2, 3, TIMESTAMPADD(MINUTE,-45,now()), 69.90),
(default, 3, 4, TIMESTAMPADD(MINUTE,-30,now()), 29.90),
(default, 3, null, TIMESTAMPADD(MINUTE,-20,now()), 29.90),
(default, null, null, TIMESTAMPADD(MINUTE,-10,now()), 29.90);

-- ex1
SELECT v.id, c.nome AS cliente, v.data, v.valor
FROM venda v
JOIN vendedor ve ON v.id_vendedor = ve.id
LEFT JOIN cliente c ON v.id_cliente = c.id
WHERE ve.nome = 'Maria';

--ex2

SELECT v.id, ve.nome AS vendedor, v.data, v.valor
FROM venda v
JOIN cliente c ON v.id_cliente = c.id
LEFT JOIN vendedor ve ON v.id_vendedor = ve.id
WHERE c.nome = 'Marcelo';

--ex3