const url = "http://localhost:3000"
const novo = document.querySelector("#novo")
const venda = document.querySelector("#venda")
const total = document.querySelector("#total")
var dados = []

function carregar() {
    fetch(url + '/rvendas', { method: 'GET' })
        .then(resp => resp.json())
        .then(resp => {
            dados = resp
            console.log(dados);
            preencherTabela()
        })
        .catch(err => alert(err));
}

function preencherTabela() {
    dados.forEach((e) => {
        let linha = document.createElement("tr")
        linha.setAttribute('id', 'linha' + e.id)
        let td = []

        for (let i = 0; i < 4; i++) {
            td.push(document.createElement("td"))
            if (i < 8) td[i].setAttribute("data-label", Object.keys(e)[i].charAt(0).toUpperCase() + Object.keys(e)[i].substr(1)+":")
            else if (i == 8) td[i].setAttribute("data-label", "Alterar:")
            else td[i].setAttribute("data-label", "Excluir:")
        }

        // td[0].innerHTML = e.id
        // td[1].innerHTML = e.nome
        // td[1].setAttribute("contenteditable", "true")
        // td[2].innerHTML = `<input type="date" value="${e.data.split("T")[0]}">`
        // td[3].innerHTML = e.peso
        // td[3].setAttribute("contenteditable", "true")
        // td[4].innerHTML = e.altura
        // td[4].setAttribute("contenteditable", "true")
        // td[5].innerHTML = e.idade
        // td[6].innerHTML = e.imc.toFixed(2)
        // td[7].innerHTML = e.diagnostico
        // let btUpdate = document.createElement('button')
        // btUpdate.innerHTML = '*'
        // btUpdate.setAttribute('onclick', `alterar(${e.id})`)
        // td[8].appendChild(btUpdate)
        // let btDel = document.createElement('button')
        // btDel.innerHTML = '-'
        // btDel.setAttribute('onclick', `excluir(${e.id})`)
        // --td[9].appendChild(btDel)

        td[0].innerHTML = e.data;
        td[1].innerHTML = e.produto;
        td[2].innerHTML = e.quantidade;
        td[3].innerHTML = e.vendedor;
        

        for (let i = 0; i < 4; i++)
            linha.appendChild(td[i])

        venda.appendChild(linha)
    })
    total.innerHTML += ' ' + dados.length
}

novo.addEventListener('submit', e => {
    e.preventDefault()
    const body = {
        "quantidade": novo.quantidade.value,
        "IdVendedor": novo.IdVendedor.value,
        "IdProduto": novo.IdProduto.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(url + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function excluir(id) {
    fetch(url + '/excluir/' + id, { method: 'DELETE' })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 204)
                window.location.reload()
            else
                alert('Produto não encontrado')
        })
}

function alterar(id) {
    let linha = document.querySelector(`#linha${id}`)
    if (!isNaN(linha.childNodes[3].innerHTML) && !isNaN(linha.childNodes[4].innerHTML)) {
        const body = {
            "id": id,
            "produto": linha.childNodes[1].innerHTML,
            "data": linha.childNodes[2].childNodes[0].value,
            "quantidade": Number(linha.childNodes[3].innerHTML),
            "valor": Number(linha.childNodes[4].innerHTML),
        }
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };

        options.body = JSON.stringify(body)

        fetch(url + '/alterar', options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 202) window.location.reload()
                else alert('Erro ao alterar dados')
            })
    } else {
        alert("bababoy")
    }
}