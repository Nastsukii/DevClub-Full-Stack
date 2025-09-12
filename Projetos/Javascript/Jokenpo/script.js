const result = document.querySelector('.resultado') // vai mapear o paragrafo de resultado
const myPoints = document.getElementById('meusPontos') // vai mapear o span dos meus pontos
const AlexaPoints = document.getElementById('pontosAlexa') // vai mapear os pontos do oponente

let personPoints = 0 // os valores dos pontos vao iniciar zerados
let machinePoints = 0

const playPerson = (valor) => { // vai pegar o valor que foi escolhido la do html
    playMatch(valor, playMachine())
}

const playMachine = () => { // vai criar a escolha da maquina
    const options = ['pedra', 'papel', 'tesoura'] // ele seta que tera essas tres opções para escolher
    const choice = Math.floor(Math.random() * 3) // vai fazer ele escolher um numero de 0 a 1 e vai multiplicar por 3 e arredondar para baixo

    return options[choice]  // vai retornar o valor da posição que foi sorteado
}

const playMatch = (valuePerson, valueMachine) => { // vai criar as configurações de perca ou ganho

    console.log('Pessoa: ' + valuePerson + ' Maquina: ' + valueMachine) // vai jogar no console oque cada um tirou

    if (valuePerson === valueMachine) { // se os valores sairem iguais da empate
        result.innerHTML = 'Deu empate'

    } else if ((valuePerson === 'pedra' && valueMachine === 'tesoura') ||
        (valuePerson === 'tesoura' && valueMachine === 'papel') ||
        (valuePerson === 'papel' && valueMachine === 'pedra')) { // se as combinações de valores sairem iguais essas, vou sair como vitorioso

        personPoints++
        myPoints.innerHTML = personPoints
        result.innerHTML = 'Você ganhou!!' // vai mudar o resultado falando que eu ganhei
    } else { // se nao sair nenhuma das alternativas a maquina vai ter ganhado
        machinePoints++
        AlexaPoints.innerHTML = machinePoints
        result.innerHTML = 'Você perdeu' // vai mudar o resultado para perdido
    }
}