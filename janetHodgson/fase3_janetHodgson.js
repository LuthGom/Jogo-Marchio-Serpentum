// prompt para o usuário inserir resposta
//eu preciso que, quando o usuário clicar em responder, apareça o prompt de comando
function redireciona (outraPagina) {
    location.replace(outraPagina)
}
function pagina (paginaSeguinte, certaResposta) {
   
    while(true) {
        var respostaDoUsuário = prompt("1 - usa o nome do demônio contra ele\n 2 - tenta correr")
        if (respostaDoUsuário === '1' || respostaDoUsuário === '2') {
            if (respostaDoUsuário === certaResposta){
                redireciona(paginaSeguinte)     
            }
            else if (respostaDoUsuário === '2') {
                alert ("Infelizmente você morreu!😵")
                redireciona('gameOver.html')
            }
            break;
        }
    }
}
