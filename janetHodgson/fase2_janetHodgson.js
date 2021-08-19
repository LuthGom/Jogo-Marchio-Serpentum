function redireciona(outraPagina) {
    location.replace(outraPagina)
}
function pagina(paginaSeguinte, certaResposta) {

    while (true) {
        var respostaDoUsuário = prompt("1 - grita por socorro e tenta acertar o espectro com um soco\n 2 - ordena que o espírito vá em bora em nome do sinal da cruz")
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
