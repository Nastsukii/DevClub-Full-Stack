 
const temperatura = 556

switch (temperatura) { //  vai pegar a variavel
    case 30: // vai ver se o valor é esse, e se for ele executa o console log e sai, e nao ele passa pro proximo
        console.log("Esta bom")
        break; // vai sair do switch case
    case 20:
        console.log("Esta meio frio")
        break;
    case 55:
        console.log("esta muito quente")
        break;
    case 10:
        console.log("esta muito frio")
        break;
    case 0:
        console.log("Congelou")
        break;
    default: // se nao tiver nenhum dos resultados, vai cair aqui
        console.log("Morreu")
        break;
}