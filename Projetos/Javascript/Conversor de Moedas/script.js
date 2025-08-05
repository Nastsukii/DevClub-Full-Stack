const botaoConverter = document.getElementById("converter"); // Está pegando o botão de converter do HTML 
const selecionarMoedaParaConverter = document.querySelector(".selecionar-moeda") // Está pegando a seleção de moedas do HTML
const selecionarMoeda = document.querySelector(".selecionar-moeda-de"); // Vai pegar o Select que esta selecionando a moeda original

const valoresMoedas = { // um objeto para guardar os valores das moedas
    real: 1,
    dolar: 5.50,
    euro: 6.50,
    libra: 7.45,
    bitcoin: 662252.33,
}

const configMoedas = { // Um objeto para guardar as configurações dos formatos das moedas
    real: {locale: "pt-BR", currency: "BRL"},
    dolar: {locale: "en-US", currency: "USD"},
    euro: {locale: "de-DE", currency: "EUR"},
    libra: {locale: "en-GB", currency: "GBP"},
    bitcoin: {locale: "en-US", currency: "BTC"},
}
    
function formatarMoeda(valor, tipoMoeda){ // essa função vai formatar a moeda, recebendo dois valores
    const {locale, currency} = configMoedas[tipoMoeda] // esta pegando o locale e currency das configs moeda de acordo com oq vem dentro da função
    return new Intl.NumberFormat(locale, { // aqui esta colocando o locale e puxando do que foi mandado
        style: "currency",
        currency: currency // pegando a moeda da informação que venho
    }).format(valor) // mandando o valor que venho 
}

function converterParaReal(valor, tipoMoeda){ // aqui vai converter para real sempre recebendo esses dois valores
    return valor = valor * valoresMoedas[tipoMoeda] // vai retornar o valor vezes o valor da moeda que foi chamada la de cima
}

function converterDeRealPara(valorReal, tipoMoeda){ // aqui vai converter de real para a moeda selecionada com os dois valores
    return valorReal/valoresMoedas[tipoMoeda] // vai dividir o valor pelo valor chamado
}

function converteMoeda(){ // Abertura da função
    const inputValor = document.getElementById("inputValor").value; // Vai pegar a quantia que foi digitado pelo usuario no input
    const moeda = document.querySelector(".moeda"); // Este é o o valor da moeda que vai ser convertida
    const moedaConversao = document.querySelector(".moeda-conversao"); // Este é o valor da moeda que foi já esta convertida
  
    const valorReal = converterParaReal(inputValor, selecionarMoeda.value); // esta colocando na variavel o valor vindo da funçao e enviando as informações
   
    moeda.innerHTML = formatarMoeda(inputValor, selecionarMoeda.value) // esta chamando a função e dando os valores do valor = inputValor e o tipoMoeda = selecionarMoeda.value

    const valorConvertido = converterDeRealPara(valorReal, selecionarMoedaParaConverter.value); // vai colocar o valor na variavel segundo a função enviada
    moedaConversao.innerHTML = formatarMoeda(valorConvertido, selecionarMoedaParaConverter.value); // vai colocar no p o formato da moeda
}

const infoMoedas = { // vai guardar tudo as informações das imagens das moedas e os nomes
    real: { nome: "Real Brasileiro", imagem: "./assets/brasil.png" },
    dolar: { nome: "Dólar Americano", imagem: "./assets/usa.png" },
    euro: { nome: "Euro", imagem: "./assets/euro.png" },
    libra: { nome: "Libra", imagem: "./assets/libra.png" },
    bitcoin: { nome: "Bitcoin", imagem: "./assets/bitcoin.png" }
}

function atualizarMoedaVisual(tipoMoeda, nomeElemento, imagemElemento) { // vai receber o esses tres valores e utilizar
    const { nome, imagem } = infoMoedas[tipoMoeda]; // vai usar a desestruturação de objeto para pegar os dois itens do objeto e colocar o valor de acordo com oq vier
    nomeElemento.innerHTML = nome; // vai mudar o nome do elemento de acordo com oque chegar
    imagemElemento.src = imagem; // vai mudar o src da imagem de acordo com
}

function alterarLogo(){ // Toda vez que o evento de trocar a moeda acontercer, vai chamar a função
    const nomeDaMoeda = document.querySelector(".nome-da-moeda") // Pega o paragrafo do nome da moeda convertida
    const logoDaMoeda = document.getElementById("logo-moeda-converter") // Pega a Imagem de logo da moeda convertida
    const logoDaMoedaDe = document.getElementById("logo-moeda-de")
    const moedaOrigem = document.querySelector(".moeda-origem")

    atualizarMoedaVisual(selecionarMoedaParaConverter.value, nomeDaMoeda, logoDaMoeda); // vai enviar esses dados para a função

    atualizarMoedaVisual(selecionarMoeda.value, moedaOrigem, logoDaMoedaDe); // vai enviar esses dados para a outra função

    converteMoeda() // chama a função de converter para dar um refresh nos valores e puxar o certo
}

selecionarMoeda.addEventListener("change", alterarLogo)
selecionarMoedaParaConverter.addEventListener("change", alterarLogo) // Vai pegar o evento de trocar de opção do selecionar as moedas e chamar a função
botaoConverter.addEventListener("click", converteMoeda)  // Vai pegar o evento de click do botao de converter e chamar a função