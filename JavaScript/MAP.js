/*
    pode pegar 3 posições:
    item do array
    index (posição)
    array completo

    ele nao altera o array, ele cria um novo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const doble = number.map(item => {
    const iten = item * 2
    return iten
})

console.log(doble)