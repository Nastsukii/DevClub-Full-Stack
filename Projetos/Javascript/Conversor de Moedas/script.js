const botaoConverter = document.getElementById("converter"); // Está pegando o botão de converter do HTML 
const selecionarMoedaParaConverter = document.querySelector(".selecionar-moeda") // Está pegando a seleção de moedas do HTML
const selecionarMoeda = document.querySelector(".selecionar-moeda-de"); // Vai pegar o Select que esta selecionando a moeda original




function formatarMoeda(valor, tipoMoeda){
    const configMoedas = {
    real: {locale: "pt-BR", currency: "BRL"},
    dolar: {locale: "en-US", currency: "USD"},
    euro: {locale: "de-DE", currency: "EUR"},
    libra: {locale: "en-GB", currency: "GBP"},
    bitcoin: {locale: "en-US", currency: "BTC"},
}

    const {locale, currency} = configMoedas[tipoMoeda]

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    }).format(valor)
}


function converteMoeda(){ // Abertura da função
    const inputValor = document.getElementById("inputValor").value; // Vai pegar a quantia que foi digitado pelo usuario no input
    const moeda = document.querySelector(".moeda"); // Este é o o valor da moeda que vai ser convertida
    const moedaConversao = document.querySelector(".moeda-conversao"); // Este é o valor da moeda que foi já esta convertida
  
    const valorDolar = 5.50; // Valor do dolar
    const valorEuro = 6.50; // Valor do Euro
    const valorLibra = 7.45; // Valor da Libra
    const valorBitcoin = 662252.33; // Valor do Bitcoin

    let valorReal = 0;
    
    if (selecionarMoeda.value == "real"){
        valorReal = inputValor;
    }
    if (selecionarMoeda.value == "dolar") {
        valorReal = inputValor * valorDolar; // Converte dólar para real
    }
    if (selecionarMoeda.value == "euro") {
        valorReal = inputValor * valorEuro;
    }
    if (selecionarMoeda.value == "libra") {
        valorReal = inputValor * valorLibra;
    }
    if (selecionarMoeda.value == "bitcoin") {
        valorReal = inputValor * valorBitcoin;
    }
    console.log(valorReal)

    // Mostra o valor original formatado

    moeda.innerHTML = formatarMoeda(inputValor, selecionarMoeda.value)
    

    if(selecionarMoedaParaConverter.value == "real"){
        moedaConversao.innerHTML = new Intl.NumberFormat("pt-BR", { // Está pegando o valor da moeda e colocando no html utilzando do NumberFormat
        style: "currency", // Configura para entender que quer formatar para moeda
        currency: "BRL" // Configura para o Real
    }).format(valorReal) // Vai colocar esse valor dentro do paragrafo

    }
    if(selecionarMoedaParaConverter.value == "dolar"){ // Vai identificar se o valor da moeda selecionada é igual ao que esta pedindo, se nao for, ele pula para o proximo if
        moedaConversao.innerHTML = new Intl.NumberFormat("en-US", { // Formata o valor da moeda e colocando no html utilzando do NumberFormat
        style: "currency",
        currency: "USD"
    }).format(valorReal/valorDolar) // Vai colocar no paragrafo o valor ja convertido fazendo a conta

    }
    if(selecionarMoedaParaConverter.value == "euro"){ // Faz a mesma coisa que o de cima, porem com o valor euro
        moedaConversao.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorReal/valorEuro)

    }
    if(selecionarMoedaParaConverter.value == "libra"){
        moedaConversao.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(valorReal/valorLibra)
    }
    if(selecionarMoedaParaConverter.value == "bitcoin"){
        moedaConversao.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
        }).format(valorReal/valorBitcoin)
    }

    console.log(moedaConversao.textContent) // Aparecer no console o valor convertido
}


function alterarLogo(){ // Toda vez que o evento de trocar a moeda acontercer, vai chamar a função
    const nomeDaMoeda = document.querySelector(".nome-da-moeda") // Pega o paragrafo do nome da moeda convertida
    const logoDaMoeda = document.getElementById("logo-moeda-converter") // Pega a Imagem de logo da moeda convertida
    const logoDaMoedaDe = document.getElementById("logo-moeda-de")
    const moedaOrigem = document.querySelector(".moeda-origem")


    // altera a logo da moeda convertida
    if(selecionarMoedaParaConverter.value == "real"){
        nomeDaMoeda.innerHTML = "Real Brasileiro"
        logoDaMoeda.src = "./assets/brasil.png"
    }
    if(selecionarMoedaParaConverter.value == "dolar"){   // Ira ver se o valor é igual a dolar, se nao for, passa para o proximo if
        nomeDaMoeda.innerHTML = "Dólar Americano"   // Vai mudar o nome da moeda
        logoDaMoeda.src = './assets/usa.png' // vai mudar a logo da moeda
    }
    if(selecionarMoedaParaConverter.value == "euro"){ // faz a mesma coisa de cima
        nomeDaMoeda.innerHTML = "Euro"
        logoDaMoeda.src = './assets/euro.png'
    }
    if(selecionarMoedaParaConverter.value == "libra"){
        nomeDaMoeda.innerHTML = "Libra"
        logoDaMoeda.src = "./assets/libra.png"
    }
    if(selecionarMoedaParaConverter.value == "bitcoin"){
        nomeDaMoeda.innerHTML = "Bitcoin"
        logoDaMoeda.src = "./assets/bitcoin.png"
    }

    // altera a logo da moeda para converter
    if(selecionarMoeda.value == "real"){
        moedaOrigem.innerHTML = "Real Brasileiro"
        logoDaMoedaDe.src = "./assets/brasil.png"
    }
    if(selecionarMoeda.value == "dolar"){   // Ira ver se o valor é igual a dolar, se nao for, passa para o proximo if
        moedaOrigem.innerHTML = "Dólar Americano"   // Vai mudar o nome da moeda
        logoDaMoedaDe.src = './assets/usa.png' // vai mudar a logo da moeda
    }
    if(selecionarMoeda.value == "euro"){ // faz a mesma coisa de cima
        moedaOrigem.innerHTML = "Euro"
        logoDaMoedaDe.src = './assets/euro.png'
    }
    if(selecionarMoeda.value == "libra"){
        moedaOrigem.innerHTML = "Libra"
        logoDaMoedaDe.src = "./assets/libra.png"
    }
    if(selecionarMoeda.value == "bitcoin"){
        moedaOrigem.innerHTML = "Bitcoin"
        logoDaMoedaDe.src = "./assets/bitcoin.png"
    }

    converteMoeda() // chama a função de converter para dar um refresh nos valores e puxar o certo
}

selecionarMoeda.addEventListener("change", alterarLogo)
selecionarMoedaParaConverter.addEventListener("change", alterarLogo) // Vai pegar o evento de trocar de opção do selecionar as moedas e chamar a função
botaoConverter.addEventListener("click", converteMoeda)  // Vai pegar o evento de click do botao de converter e chamar a função