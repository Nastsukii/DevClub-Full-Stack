

const titulo = document.querySelector(".titulo")  // pegando um texto pela class

titulo.innerHTML = " <i>Este </i> é meu titulo agora" // alterando o texto com o estilo html

console.log(titulo.textContent) // só traz o html
console.log(titulo.innerText) //Leva em conta o css, ele vai trazer o que da para ver
console.log(titulo.innerHTML) // traz tudo e permite adicionar html


const botao = document.querySelector("#botao") //pegando um botao pelo id e alterando a cor

botao.style.backgroundColor = "#ffff10" // aqui eu altero oque eu quero e quando tiver o - troca para uma letra maiuscula