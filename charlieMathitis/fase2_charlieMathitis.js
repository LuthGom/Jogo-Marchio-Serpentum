// prompt para o usuário inserir resposta
//eu preciso que, quando o usuário clicar em responder, apareça o prompt de comando
function redireciona(outraPagina) {
    location.replace(outraPagina)
}
function pagina(paginaSeguinte, certaResposta) {

    while (true) {
        var respostaDoUsuário = prompt("1 - pegou o crucifixo para pôr no pescoço como escudo\n 2- pegou o crucifixo para para usar ativamente contra a figura que tomou a forma de sua Tia Irene")
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
