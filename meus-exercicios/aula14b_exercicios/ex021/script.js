function contar() {
    let inicio = document.getElementById('text-inicio')
    let fim = document.getElementById('text-fim')
    let passo = document.getElementById('text-passo')
    let resultado = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let num_inicio = Number(inicio.value)
        let num_fim = Number(fim.value)
        let num_passo = Number(passo.value)

        if (num_passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            num_passo = 1
        }

        if (num_inicio < num_fim) { // Contagem crescente
            for (let cont = num_inicio; cont <= num_fim; cont += num_passo) {
                resultado.innerHTML += `${cont} &#x1F449 `
            }
        } else { // Contagem regressiva
            for (let cont = num_inicio; cont >= num_fim; cont -= num_passo) {
                resultado.innerHTML += `${cont} &#x1F449 `
            }
        }

        resultado.innerHTML += '&#x1F3C1'
    }

}