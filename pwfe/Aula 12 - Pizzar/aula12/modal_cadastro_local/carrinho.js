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
        const excluir = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        excluir.innerHTML = `<button onclick="excluirDados(${i})">excluir</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(excluir);
        tcorpo.appendChild(linha)
    })
}

function abrirModal(i) {
    detalhes.classList.toggle("oculto");
    document.querySelector("#id").value = dados[i].id;
    document.querySelector("#nome").value = dados[i].nome;
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
    //Abrir ou iniciar a lista de pedidos
    const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
    //Acrescentar o novo item na lista
    pedidos.push(pedido)
    //Salvar a lista no armazenamento local
    window.localStorage.setItem("pedidos", JSON.stringify(pedidos))

    //Recarregar a página
    window.location.href = "./pedidos.html"

    window.localStorage.removeItem("produtos")

}