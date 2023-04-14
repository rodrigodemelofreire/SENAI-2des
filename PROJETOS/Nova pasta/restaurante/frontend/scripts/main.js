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