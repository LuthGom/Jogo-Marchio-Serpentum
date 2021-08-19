function redireciona (outraPagina) {
    location.replace(outraPagina)
}
function pagina (paginaSeguinte, certaResposta) {
   
    while(true) {
        var respostaDoUsuário = prompt("1 - tenta correr pela porta da sacristia\n 2 - agarra o jarro de água benta do altar e enfrenta o espírito")
        if (respostaDoUsuário === '1' || respostaDoUsuário === '2') {
            if (respostaDoUsuário === certaResposta){
                redireciona(paginaSeguinte)     
            }
            else {
                alert ("Infelizmente você morreu!😵")
                redireciona('gameOver.html')
            }
            break;
        }
    }
}
