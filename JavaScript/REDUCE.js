const numbers = [1,2,3,4,5,6,7,8,9,10]

const sum = numbers.reduce((acumulador, item) => {
    return acumulador + item
    
}, 0)

console.log(sum)


const cart = [

    { productName: "Abobora", pricePorKg: 5, kg: 1},
    { productName: "Pepino", pricePorKg: 3.55, kg: 1.3 },
    { productName: "Limao", pricePorKg: 1.2, kg: 2},
    { productName: "Abacate", pricePorKg: 5.4, kg: 1.67 },
    { productName: "Morango", pricePorKg: 11.9, kg: 3 },
]


const totalSum = cart.reduce((acc, item) => {

    const vt = item.pricePorKg * item.kg

    return acc + vt
},0 )

console.log(totalSum)