const selectCategorias = document.querySelector('#opcoes-categorias');
const fetchCategorias = async () => {
    const response = fetch("http://localhost:3000/categoria/listar")
    const categories = (await response).json()
    return categories
}
fetchCategorias()
    .then((data) => {
        showOptionsCategorias(data)
    })

const showOptionsCategorias = async (data) => {
    data.forEach(element => {
        const option = document.createElement("option")
        option.textContent = element.nome
        option.value = element.nome
        selectCategorias.append(option)
    });
}

var botao = document.getElementById('ver-mais');
botao.addEventListener('click', function() {

    $.ajax({
    url: 'localhost:3000/cardapio/listar',
    success: function(dados) {
 
        var tabela = document.getElementById('minha-tabela');
      tabela.innerHTML = dados;
  
      tabela.style.display = 'table';
    }
  });
});

