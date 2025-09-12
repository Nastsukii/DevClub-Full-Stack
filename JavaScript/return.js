function naoRetorna (num1, num2){ 
    const soma = num1 + num2
    return soma // ele vai retornar o valor para a variavel que puxou os valores 
}
const result = naoRetorna(1,6) // vai colocar o result com o valor da soma dos dois
console.log(result) // vai dar um resultado


function naoRetorna (num1, num2){ 
    const soma = num1 + num2
    console.log(soma)
}
    
console.log(naoRetorna(1,6)) // nao vai retornar nada
