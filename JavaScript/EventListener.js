const evento = document.querySelector(".meu-input")

evento.addEventListener("click", function(){ // ele vai ficar esperando acontecer o click e entao vai chamar uma funcao que vai fazer o que for pedido
    console.log(evento.value) // aqui vai mandar um console.log com o que tem no input ao clicalo
})

function teste (event){ // o event vai ser o nome da variavel que ira trazer todas as informações que foram enviadas
    console.log(event)
}

evento.addEventListener("keypress", teste) // aqui ao clicar em alguma tecla, ele chama a funcao teste