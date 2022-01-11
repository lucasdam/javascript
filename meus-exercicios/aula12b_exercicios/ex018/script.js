function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('text-ano')
    var resultado = document.querySelector('div#resultado')

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('radio-sexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        
        if (formularioSexo[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) {
                // criança
                imagem.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                // jovem
                imagem.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                // adulto
                imagem.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // idoso
                imagem.setAttribute('src', 'imagens/idoso-m.png')
            }

        } else if (formularioSexo[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                // criança
                imagem.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                // jovem
                imagem.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50) {
                // adulto
                imagem.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                // idoso
                imagem.setAttribute('src', 'imagens/idoso-f.png')
            }

        }
        
        resultado.style.textAlign = 'center'
        imagem.style.paddingTop = '15px'

        resultado.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        resultado.appendChild(imagem)

    }

}