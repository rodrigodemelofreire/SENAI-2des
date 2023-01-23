/*alert("Olá mundo!")
console.log("teste")
parseInt("oi")

let a = "10"
console.log(a == 10) //comparação de coteudo
console.log(a === 10) //compara conteudo e seu tipo

if( a === 10){
    alert ("igual")
}*/

/*let opcao = prompt("1 a 3")
switch(opcao){
    case "1":
        console.log("escolheu op1")
        break
    case "2":
        console.log("escolheu op2")
        break
    case "3":
        console.log("escolheu op3")
        break
    default:
        console.log("opcao invalida")
        break
    }*/

/*for(let i = 1; i<=10; i++){
    console.log(i)
}

let i = 1
while(i <= 10){
console.log(i)
i++
}

    let num = 0

do {
        num = prompt("Diferente 10")
    console.log(num)
}while(num != 10)*/

/*let nomes = ["fulano", "Beltano", "Cicrano"]

for (let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}*/

let busca = (prompt("coloca um nome"))
let nomes = ["fulano", "Beltano", "Cicrano"]

for (let i = 0; i < nomes.length; i++){
    if(nomes[i] == busca)
        alert ("localizado")
    }
