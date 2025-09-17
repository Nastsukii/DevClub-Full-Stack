const number = [45, 102, 78, 150, 23, 99, 200, 87, 5, 300, 120, 60, 1, 450, 90];

const bigNumbers = number.filter(item => item > 100 // se eu mandar isso ele entende que se o number for maior q 100 vai retornar true, e se nao for ele vai retornar false
    // if (item > 100) return true
    // else return false 
)

console.log(bigNumbers)