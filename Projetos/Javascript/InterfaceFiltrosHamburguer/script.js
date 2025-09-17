const botaoForEach = document.getElementById('for-each')  // aqui pega o botao do html
const lista = document.querySelector('ul') // vai pegar a ul que esta vazia no html
const botaoMapear = document.getElementById('map')



const mostrarTudo = (produto) => {  // vai receber um valor que vai ser um array
    let myLi = '' // vai criar um array de li vazia

    produto.forEach(item => { // vai fazer passar de item por item no array recebido
        myLi += // vai adicionar a li na lista de li vazia e sempre adicionando mais um para ir sempre uma li nova
        ` 
     <li> 
           <img src=${item.src}>
           <p>${item.name}</p>
           <p>R$ ${item.price}</p>
        </li>
    `
    })
    lista.innerHTML = myLi // vai jogar toda a array de li para a tela

}

const darDesconto = () => {
    const newPrice = menuOptions.map(item => ({ // vai mapear o menuoptions e ja retornar o valor
        ...item, // os ... coloca todos os itens na mesa para podermos utlizar apenas uma parte deles
        price: item.price * 0.9 // vai dar os 10% de desconto e deixar o resto como está
    }))
    mostrarTudo(newPrice) // vai enviar os novos valores pro foreach
}


botaoForEach.addEventListener('click', () => mostrarTudo(menuOptions)) // esse ele vai pegar o evento de click do botao e chamar a funcao ja com um valor
botaoMapear.addEventListener('click', darDesconto)