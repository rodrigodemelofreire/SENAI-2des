--1- Quantas tabelas ele possui?
--R: 5
USE pizzaria
SHOW tables

--2-Quantos clientes cadastrados?
--R: 105
SELECT * FROM clientes

--3-Quantas pizzas cadastradas?
--R: 41
SELECT * FROM pizzas

--4-Quantas pizzas o pedido N°3 possui?
--R:  21
SELECT * FROM pizzas;
SELECT * FROM pedidos;
SELECT * FROM itens_pedidos;
SELECT * FROM itens_pedidos WHERE pedido_id = 3;
SELECT count (quantidade) FROM itens-pedido WHERE pedido_id 3;
SELECT sum(quantidade) FROM itens_pedido WHERE pedido_id = 3;

--5-Qual cliente fez o pedido N° 3?
--R: Adriano da Silva Ferreira
DESCRIBE pedidos
DESCRIBE clientes
SELECT * FROM pedidos WHERE pedido_id = 3
SELECT * FROM clientes WHERE cliente_id = 2
	--Querry com junção de tabelas
SELECT c.nome FROM pedidos p INNER JOIN clientes c
ON c.cliente_id = p.cliente_id
WHERE p.pedido_id = 3

 	
--6-Quais os nomes das pizzas do pedido N° 3?
--Bauru, Atum, Caipira, Calabresa, Aliche, Camponesa, Firensse
 