api.get("/current.json?key=88561b2a95064831abd115814231004&Q=Maceio&lang=pt")
.then( resp=>{
    let temperatura = resp.data.current.temp_c;
    document.getElementById("temperatura").innerHTML = `A temperatura atual em Maceió é ${temperatura}°C.`;
  })
  .catch(error => {
    console.log(error);
  });
