function parImpar(numero) {
    return numero % 2 == 0 ? 'par' : 'ímpar'
}

console.log(`Ex 1 -> O valor é ${parImpar(7)}`)


// Uso de parâmetros pré-definidos, caso não sejam passados
function soma(num1=0, num2=0) {
    return num1 + num2
}

console.log(`Ex 2 -> A soma dos valores é: ${soma(2)}`)


let valor = function(x) {
    return x*2
}

console.log(`Ex 3 -> O dobro é: ${valor(5)}`)


function fatorial(valor) {
    let fat = 1
    for (let cont = valor; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

console.log(`Ex 4a -> O fatorial é ${fatorial(5)}`)


function fat(v) {
    let fat = 1
    for (v; v > 1; v--) {
        fat *= v
    }
    return fat
}

console.log(`Ex 4b -> O fatorial é ${fat(5)}`)


function fatorialRecursivo(valor) {
    return valor == 1 ? 1 : valor * fatorialRecursivo(valor - 1)
}

console.log(`Ex 4c -> O fatorial é ${fatorialRecursivo(5)}`)