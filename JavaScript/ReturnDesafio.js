const carrinho = [1, 50, 34, 90, 12, 40, 344]
let valorFinal = 0


function calcularDesconto(valorProduto, desconto) {
    const resultado = (valorProduto * desconto) / 100
    return resultado
}


carrinho.forEach((valor) => {
    if (valor > 30) {
        const desconto = calcularDesconto(valor, 10)
        valorFinal = valorFinal + (valor - desconto)
    }
    else {
        valorFinal = + valor
    }

});

console.log(valorFinal)
