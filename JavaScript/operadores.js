// ======= Operador Matematico =======

let soma = 2
soma++ // adicoana mais um soma-- iria diminuir 1
console.log(soma)
let exponecial = 5 ** 3 // vai fazer cinco elevado ao cubo


// ======= Atribuição =======  
let igual = 3 // atribui um valor 
igual += 5 // vai somar ele mesmo com o valor
igual -= 2 // vai diminuir do valor da variavel
igual /= 3 // vai dividir pelo valor
igual *= 5 // vai fazer ele vezes o valor
igual %= 21 // vai trazer o resto da divisao
console.log(igual)

// ======= Comparaçao =======

    const numero = 3
    const numero2 = 2

    if(numero == numero2){ // compara o o valor, sem contar o tipo. já === ele comparar tudo, tipo e valor
        console.log("certo")
    }else{
        console.log("Falso")
    }

    if(numero != numero2){  // vai verificar se é diferente independente do tipo
        console.log("certo")
    }else{
        console.log("Falso")
    }

    if(numero !== numero2){ // vai verigicar até se o tipo é diferente
        console.log("certo")
    }else{
        console.log("Falso")
    }

    if(numero >= numero2){ // vai verigicar se é maior ou igual
        console.log("certo")
    }else{
        console.log("Falso")
    }

    if(numero <= numero2){ // vai verigicar se é menor ou igual
        console.log("certo")
    }else{
        console.log("Falso")
    }