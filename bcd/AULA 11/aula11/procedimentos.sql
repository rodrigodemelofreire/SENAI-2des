-- O cliente WAlter PAulo Costenarro quer 1 pizza de atum e 2 pizza napolitano
SELECT valor FROM pizzas WHERE pizza_id = 5;
SELECT valor FROM pizzas WHERE pizza_id = 28;

INSERT INTO pedidos values
(default, 98, CURDATE(), NOW(), null);

SELECT FROM * pedidos ORDER BY pedido_id DESC LIMIT 1;
SELECT LAST_INSERT_ID();

INSERT INTO itens_pedido VALUES
(27,5,1,(SELECT valor FROM pizzas WHERE pizza_id = 5)),
(27,28,2,(SELECT valor FROM pizzas WHERE pizza_id = 28));

SELECT * FROM itens_pedido WHERE pedido_id = 27;

SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27;
UPDATE pedidos
SET valor - (SELECT sum(valo + quantidade) FROM itens_pedido WHERE pedido_id = 27)
    WHERE pedido_id = 27;

SELECT * FROM pedidos WHERE pedido_id = 27; 