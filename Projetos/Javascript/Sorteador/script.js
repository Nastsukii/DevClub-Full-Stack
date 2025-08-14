const botaoSortear = document.getElementById("botao-sortear")


function sortear(){
    const numSortP = document.getElementById("numero-sorteado")
    let min = document.getElementById("de").value
    let max = document.getElementById("ate").value    
    min = Math.ceil(min)
    max = Math.floor(max)
    
    if (min <= max){
        const numeroSorteado = Math.floor(Math.random() * (max - min) + min)
        numSortP.style.color = "#c0a3a3"
        numSortP.innerHTML = numeroSorteado
    }else{
        numSortP.style.color = "#fc0606"
        numSortP.innerHTML = "Erro! O valor minimo esta maior que o valor maximo."
    }

}


botaoSortear.addEventListener("click", sortear)