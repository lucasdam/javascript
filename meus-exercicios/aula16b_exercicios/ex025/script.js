let numero = document.getElementById('text-numero')
let lista = document.getElementById('select-lista')
let resultado = document.querySelector('div#resultado')
let numeros = []

function checaNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(num, lis) {
    if (lis.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (checaNumero(numero.value) && !naLista(numero.value, numeros)) {
        numeros.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = '' // Limpa o campo
    numero.focus()    // Volta o foco do cursor para o campo
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let tamanho = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for (let i in numeros) {
            soma += numeros[i]
            if (numeros[i] > maior) { // Math.max.apply(null, nums)
                maior = numeros[i]
            }
            if (numeros[i] < menor) { // Math.min.apply(null, nums)
                menor = numeros[i]
            }
            media = soma / tamanho
        }

        resultado.innerHTML = `<p> Ao todo, temos ${tamanho} números cadastrados. </p>`
        resultado.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        resultado.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        resultado.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }

}