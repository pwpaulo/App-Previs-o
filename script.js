const key = "e0283766cee7e7e70be7e75409ae8042"
var quantidadePesquisas = 0;

function pesquisar() {
    let cidade = document.querySelector('.input-cidade').value
    dados(cidade)
}

async function dados(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    inserirDados(dados)
} 

function inserirDados(dados){
    console.log(dados)
    document.querySelector('.titulo-previsao').innerHTML = "Tempo em " + dados.name
    document.querySelector('title').innerHTML = dados.name + " | Previsão"
    quantidadePesquisas = quantidadePesquisas + 1;
    console.log(quantidadePesquisas)
    document.querySelector('.quantidadeDePesquisas').innerHTML = "Pesquisas: " + quantidadePesquisas
    document.querySelector('.graus').innerHTML = + Math.floor(dados.main.temp) + " °C"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade Relativa: " + (dados.main.humidity) + "%"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

function limpar(){
    document.querySelector('.titulo-previsao').innerHTML = ""
    document.querySelector('.graus').innerHTML = ""
    document.querySelector('.umidade').innerHTML = ""
    document.querySelector('.texto-previsao').innerHTML = ""
    document.querySelector('.img-previsao').src = ""
    document.getElementById("input-cidade").value = ""
}

document.addEventListener("keypress",function (e) {
    if (e.key === "Enter"){
        const btn = document.querySelector(".btn");
        btn.click();
    }
})
