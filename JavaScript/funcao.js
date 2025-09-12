function digaMeuNome(nome){ // vai pegar o valor la de baixo
    console.log(`O nome é ${nome}`) // vai colocar o valor da variavel
}

digaMeuNome("Luiz") // mando algo para dentro da variavel na funcao variavel com um valor

function soma(valor1, valor2){ // se colocar mais de 
    console.log(`a soma dos dois numero são ${valor1 + valor2}`)
}

soma(1, 4)
soma(980, 35)
soma(23, 5)

function valorPadrao(valor = 'Luiz'){ // vai dar um valor padrao para quando nao for enviado nada para a variavel
    console.log(valor)
}

valorPadrao()

const numeroValor = 50 // vai ser o valor padrao

function valorPadrao(valor = numeroValor){ // vai dar um valor padrao para quando nao for enviado nada para a variavel
    console.log(valor)
}

valorPadrao()