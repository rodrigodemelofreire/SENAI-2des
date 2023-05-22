const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("pedidos")) || []

btFechar.addEventListener('click', () => {
    detalhes.classList.toggle("oculto");
})

function preecherTabela() {
    tcorpo.innerHTML = "";
    produtos.forEach((e) => {
        const linha = document.createElement("tr");
        const data = document.createElement("td");
        const Assando = document.createElement("td");
        data.innerHTML = e.data;
        linha.appendChild(data);
        linha.appendChild(Assando);
        tcorpo.appendChild(linha)
    })
}

function abrirModal(i) {
    detalhes.classList.toggle("oculto");
    document.querySelector("#id").value = dados[i].id;
    document.querySelector("#nome").value = dados[i].nome;
}

function limparDados() {
    window.localStorage.removeItem("produtos");
    window.location.reload();
}
