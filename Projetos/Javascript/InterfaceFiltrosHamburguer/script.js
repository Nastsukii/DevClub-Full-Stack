const botaoForEach = document.getElementById('for-each')
const lista = document.querySelector('ul')

let myLi = ''

const mostrarTudo = () => {
    
    menuOptions.forEach(item => {
        myLi = myLi + `
     <li> 
           <img src=${item.src}>
           <p>${item.name}</p>
           <p>R$ ${item.price},00</p>
        </li>
    `
        lista.innerHTML = myLi
    })
    
}

botaoForEach.addEventListener('click', mostrarTudo)