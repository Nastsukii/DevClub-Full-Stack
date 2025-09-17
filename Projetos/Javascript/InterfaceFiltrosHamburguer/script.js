const botaoForEach = document.getElementById('for-each')  // aqui pega o botao do html
const lista = document.querySelector('ul') // vai pegar a ul que esta vazia no html

let myLi = '' // vai criar um array de li vazia

const mostrarTudo = () => { 
    
    menuOptions.forEach(item => { // vai fazer passar de item por item no array menuOptions
        myLi = myLi + // vai adicionar a li na lista de li vazia e sempre adicionando mais um para ir sempre uma li nova
        ` 
     <li> 
           <img src=${item.src}>
           <p>${item.name}</p>
           <p>R$ ${item.price},00</p>
        </li>
    `
        lista.innerHTML = myLi // vai jogar toda a array de li para a tela
    })
    
}

botaoForEach.addEventListener('click', mostrarTudo) // esse ele vai pegar o evento de click do botao e chamar a funcao