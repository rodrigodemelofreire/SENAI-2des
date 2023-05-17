api.get("/current.json?key=88561b2a95064831abd115814231004&Q=Maceio&lang=pt")
.then( resp=>{
    let temperatura = resp.data.current.temp_c;
    document.getElementById("temperatura").innerHTML = `A temperatura atual em Maceió é `;
  })
function obterClima() {
  let cidade = document.getElementById("cidadeInput").value;
  api.get(`/current.json?key=88561b2a95064831abd115814231004&q=${cidade}&lang=pt`)
  
  
  
  .then(resp => {
      let condicaoClima = resp.data.current.condition.text;
      document.getElementById("condicaoClima").innerHTML = `Condição do clima em ${cidade}: ${condicaoClima}`;
      let imagemClima = document.getElementById("imagemClima");
      imagemClima.src = obterImagemClima(condicaoClima);
    })
    .catch(error => {
      console.log(error);
    });
}