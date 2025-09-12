const resultado = document.querySelector(".resultado")
const meusPontos = document.getElementById("meusPontos")
const alexaPontos = document.getElementById("pontosAlexa") 


let contadorPontosEu = 0 // os contadores vao iniciar em 0
let contadorPontosAlexa = 0

const playHuman = (escolhaDoUsuario) => { // vai pegar o valor que o usuario escolheu do html
    playGame(escolhaDoUsuario, playMachine()) // quando o usuario escolher o valor ele vai enviar o valor escolhido e o da maquina para essa função   
}

const playMachine = () => { // vai criar a escolha da maquina
    const opcoes = ['pedra', 'tesoura', 'papel'] // vai dar essas 3 opções iguais da pessoa
    const randomNumber = Math.floor (Math.random() * 3) // vai escolher um numero entre 0 e 1 e vai fazer vezes 3 e aarredondar para o menor para dar um numero inteiro

    return opcoes[randomNumber] // vai escolher aleatóriamente uma das 3 posições e puxando o valor dela
}

const playGame = (jogadorHumano, jogadorAlexa) => { // vai configurar quem ganhou e os pontos recebendo os dois valores da pessoa e maquinha 
    console.log("Humano" + jogadorHumano + "Maquina" + jogadorAlexa) // vai jogar no console os valores escolhidos


    if (jogadorHumano === jogadorAlexa){ // vai dizer quando for empate
        resultado.innerHTML = "Deu empate"

    } else if ((jogadorHumano === "papel" && jogadorAlexa === "pedra") ||
     (jogadorHumano === "pedra" && jogadorAlexa === "tesoura" ) ||
     (jogadorHumano === "tesoura" && jogadorAlexa === "papel")){ // vai puxar todas as chances da pessoa ganhar com && vai dizer que as duas opções tem q ser verdadeira e o || é para falar que pode ser aquelas condições tbm
        
        contadorPontosEu++ // aqui sempre que o humano ganhar ele vai somar mais um la nas variaveis dos pontos 

        meusPontos.innerHTML = contadorPontosEu // vai substituir o texto pelo valor
        resultado.innerHTML = "Você venceu"
    }else{ // aqui se nao der nem empate e nem o humano vencer entao a maquina ganhou 
        contadorPontosAlexa++ // vai somar 1 nos pontos da maquina

        alexaPontos.innerHTML = contadorPontosAlexa // vai substituir os valores
        resultado.innerHTML = "Você perdeu"
    }
}

