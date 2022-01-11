function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd97'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }

}