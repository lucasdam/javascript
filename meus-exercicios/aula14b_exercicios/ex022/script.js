function tabuada() {
    let numero = document.getElementById('text-numero')
    let tabuada = document.getElementById('select-tabuada')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let num = Number(numero.value)
        let cont = 1
        tabuada.innerHTML = ''

        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont }`
            item.value = `tabuada${cont}`
            tabuada.appendChild(item)
            cont++
        }

    }
}