const botaoConverter = document.getElementById("converter"); // Está pegando o botão de converter do HTML 
const selecionarMoeda = document.querySelector(".selecionar-moeda") // Está pegando a seleção de moedas do HTML

function converteMoeda(){ // Abertura da função
    const inputValor = document.getElementById("inputValor").value; // Vai pegar a quantia que foi digitado pelo usuario no input
    const moeda = document.querySelector(".moeda"); // Este é o o valor da moeda que vai ser convertida
    const moedaConversao = document.querySelector(".moeda-conversao"); // Este é o valor da moeda que foi já esta convertida
  

    const valorDolar = 5.50; // Valor do dolar
    const valorEuro = 6.50; // Valor do Euro
    
        moeda.innerHTML = new Intl.NumberFormat("pt-BR", { // Está pegando o valor da moeda e colocando no html utilzando do NumberFormat
        style: "currency", // Configura para entender que quer formatar para moeda
        currency: "BRL" // Configura para o Real
    }).format(inputValor) // Vai colocar esse valor dentro do paragrafo

    if(selecionarMoeda.value == "dolar"){ // Vai identificar se o valor da moeda selecionada é igual ao que esta pedindo, se nao for, ele pula para o proximo if
        moedaConversao.innerHTML = new Intl.NumberFormat("en-US", { // Formata o valor da moeda e colocando no html utilzando do NumberFormat
        style: "currency",
        currency: "USD"
    }).format(inputValor/valorDolar) // Vai colocar no paragrafo o valor ja convertido fazendo a conta

    }
    if(selecionarMoeda.value == "euro"){ // Faz a mesma coisa que o de cima, porem com o valor euro
        moedaConversao.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor/valorEuro)

    }
    

    console.log(moedaConversao.textContent) // Aparecer no console o valor convertido
}

function alterarLogo(){ // Toda vez que o evento de trocar a moeda acontercer, vai chamar a função
    const nomeDaMoeda = document.querySelector(".nome-da-moeda") // Pega o paragrafo do nome da moeda convertida
    const logoDaMoeda = document.getElementById("logo-moeda-converter") // Pega a Imagem de logo da moeda convertida
    
    if(selecionarMoeda.value == "dolar"){   // Ira ver se o valor é igual a dolar, se nao for, passa para o proximo if
        nomeDaMoeda.innerHTML = "Dólar Americano"   // Vai mudar o nome da moeda
        logoDaMoeda.src = './assets/usa.png' // vai mudar a logo da moeda
    }
    if(selecionarMoeda.value == "euro"){ // faz a mesma coisa de cima
        nomeDaMoeda.innerHTML = "Euro"
        logoDaMoeda.src = './assets/euro.png'
    }

    converteMoeda() // chama a função de converter para dar um refresh nos valores e puxar o certo
}

selecionarMoeda.addEventListener("change", alterarLogo) // Vai pegar o evento de trocar de opção do selecionar as moedas e chamar a função
botaoConverter.addEventListener("click", converteMoeda)  // Vai pegar o evento de click do botao de converter e chamar a função