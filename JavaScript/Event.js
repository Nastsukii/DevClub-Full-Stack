
const input = document.querySelector("#entrada") 
const paragrafo = document.querySelector(".paragrafo")




function cliqueiNoBotao(){  // no html ele esta sendo chamado e ta fazendo isso q esta pedindo
    paragrafo.innerText = input.value // ao clicar no botao ele vai colocar o texto do input no paragrafo
}

function cliqueiEmAlgo(){

 console.log(input.value) // aqui esta puxando o valor do input la do html


}

