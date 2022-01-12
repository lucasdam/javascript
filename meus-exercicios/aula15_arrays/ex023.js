let numeros = [5, 8, 4]

console.log(numeros)
console.log(`Nosso vetor é o: ${numeros}`)

console.log(`O primeiro valor do vetor é: ${numeros[1]}`)

numeros[3] = 6
numeros.push(1)

console.log(`Após adicionar 6 e 7: ${numeros}`)

console.log(`A quantidade de elementos do array é: ${numeros.length}`)

console.log(`O mesmo array na ordem crescente: ${numeros.sort()}`)

// PERCORRENDO O VETOR
for (let i = 0; i < numeros.length; i++) {
    console.log(`A posição ${i} tem o valor ${numeros[i]}`)
}

for (let i in numeros) {
    console.log(numeros[i])
}

console.log(`O índice do valor 6 é ${numeros.indexOf(6)}`)

// Se o retorno for -1, significa que o valor não foi encontrado
console.log(`O índice do valor 3 é ${numeros.indexOf(3)}`)