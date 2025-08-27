
const users = [
    {name: 'luiz', age: 19, contato: '(45) 00098-0023'},
    {name: 'gabi', age: 17, contato: '(45) 00098-4564'},
    {name: 'junin', age: 32, contato: '(45) 34535-0023'}
]

users.forEach((item, posicao, array) => { // No Objeto de users, vai pegar item por item, o segundo valor pega a posicao do item e o terceiro valor pega o objeto inteiro
    console.log(item)
    console.log(posicao)
    console.log(array)
});