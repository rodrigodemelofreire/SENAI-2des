const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []

btFechar.addEventListener('click', () => {
    detalhes.classList.toggle("oculto");
})

function preecherTabela() {
    tcorpo.innerHTML = "";
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const excluir = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco;
        excluir.innerHTML = `<button id="banido" onclick="excluirDados(${i})">excluir</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(excluir);
        tcorpo.appendChild(linha)
    })
}

function abrirModal(i) {
    detalhes.classList.toggle("oculto");
    document.querySelector("#id").value = dados[i].id;
    document.querySelector("#nome").value = dados[i].nome;
    document.querySelector("#preco").value = dados[i].preco;
}

function excluirDados(indice) {
    produtos.splice(indice, 1);
    window.localStorage.setItem("produtos", JSON.stringify(produtos));
    preecherTabela();
}

function finalizarCompra() {
    const pedido = {
        data: new Date(),
        pizzas: produtos
    }
    const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
   
    pedidos.push(pedido)

    window.localStorage.setItem("pedidos", JSON.stringify(pedidos))

    window.location.href = "./pedidos.html"

    window.localStorage.removeItem("produtos")

}