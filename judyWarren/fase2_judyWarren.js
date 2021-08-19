// prompt para o usuário inserir resposta
//eu preciso que, quando o usuário clicar em responder, apareça o prompt de comando
function redireciona(outraPagina) {
    location.replace(outraPagina)
}
function pagina(paginaSeguinte, certaResposta) {

    while (true) {
        var respostaDoUsuário = prompt("1 - Ela grita e sai correndo\n 2 - ela pega seu terço, começa a rezar e expulsa o espírito de seu quintal")
        if (respostaDoUsuário === '1' || respostaDoUsuário === '2') {
            if (respostaDoUsuário === certaResposta) {
                redireciona(paginaSeguinte)
            }
            else {
                alert("Infelizmente você morreu!😵")
                redireciona('gameOver.html')
            }
            break;
        }
    }
}
