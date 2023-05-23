const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");

const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []

btFechar.addEventListener('click', () => {
    detalhes.classList.toggle("oculto");
})

function preecherTabela() {
    console.log(pedidos)
    tcorpo.innerHTML = "";
    pedidos.forEach((e) => {
        const linha = document.createElement("tr");
        const data = document.createElement("td");
        const Assando = document.createElement("td");
        data.innerHTML = e.data.split("T")[0];
        e.pizzas.forEach((p) => {
            const id = document.createElement("p");
            const nome = document.createElement("p");
            const preco = document.createElement("p");
            id.innerHTML = p.id;
            nome.innerHTML = p.nome;
            preco.innerHTML = p.preco;
            Assando.appendChild(id);
            Assando.appendChild(nome);
            Assando.appendChild(preco);
        })
        linha.appendChild(data);
        linha.appendChild(Assando);
        tcorpo.appendChild(linha)
    })
}

function abrirModal(i) {
    detalhes.classList.toggle("oculto");
    document.querySelector("#id").value = produtos[i].id;
    document.querySelector("#nome").value = produtos[i].nome;
  }

function limparDados() {
    window.localStorage.removeItem("produtos");
    window.location.reload();
}
  
  preecherTabela();
 
  
  
  