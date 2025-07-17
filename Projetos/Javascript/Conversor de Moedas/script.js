const botaoConverter = document.getElementById("converter");
const selecionarMoeda = document.querySelector(".selecionar-moeda")

function converteMoeda(){
    const inputValor = document.getElementById("inputValor").value;
    const moeda = document.querySelector(".moeda");
    const moedaConversao = document.querySelector(".moeda-conversao");
  

    const valorDolar = 5.50;
    const valorEuro = 6.50;
    
        moeda.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)

    if(selecionarMoeda.value == "dolar"){
        moedaConversao.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValor/valorDolar)

    }
    if(selecionarMoeda.value == "euro"){
        moedaConversao.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor/valorEuro)

    }

    console.log(moedaConversao.textContent)
}

function alterarLogo(){
    const nomeDaMoeda = document.querySelector(".nome-da-moeda")
    const logoDaMoeda = document.getElementById("logo-moeda-converter")
    
    if(selecionarMoeda.value == "dolar"){
        nomeDaMoeda.innerHTML = "Dólar Americano"
        logoDaMoeda.src = './assets/usa.png'

    }
    if(selecionarMoeda.value == "euro"){
        nomeDaMoeda.innerHTML = "Euro"
        logoDaMoeda.src = './assets/euro.png'
    }
    
    converteMoeda()
}

selecionarMoeda.addEventListener("change", alterarLogo)
botaoConverter.addEventListener("click", converteMoeda)