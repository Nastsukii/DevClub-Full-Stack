const botaoConverter = document.getElementById("converter");

function converteMoeda(){
    const valorDolar = 5.50;
    const inputValor = document.getElementById("inputValor").value;
    let valorConvertido = inputValor/valorDolar;

    console.log(valorConvertido)
}

botaoConverter.addEventListener("click", converteMoeda)