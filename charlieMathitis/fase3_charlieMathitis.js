// prompt para o usuário inserir resposta
//eu preciso que, quando o usuário clicar em responder, apareça o prompt de comando
function redireciona(outraPagina) {
    location.replace(outraPagina)
}
function pagina(paginaSeguinte, certaResposta) {

    while (true) {
        var respostaDoUsuário = prompt("1 - tenta entrar no carro e sair o mais rápido possível\n 2 - pega o cruxifixo que ganhou de Ed e aponta para o espírito, fazendo uma oração ")
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
