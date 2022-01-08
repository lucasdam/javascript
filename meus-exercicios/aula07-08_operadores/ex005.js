// OPERADORES ARITMÉTICOS

console.log(5 + 2)      // Adição
console.log(9 % 2)      // Resto
console.log(9 / 2)      // Divisão
console.log(5 + 3 / 2)
//console.log(5 + / 2) -> SyntaxError

/* ORDEM DE PRECEDÊNCIA
(), **, * / %, + - */

var a = 5 + 3           // 8
var b = a % 5           // 5
var c = 5 * b ** 2      // 45
var d = 10 - a / 2      // 6
var e = 6 * 2 / d       // 2
var f = b % e + 4 / e   //3

// AUTO-ATRIBUIÇÕES

var n = 3
n = n + 4   // 7
n = n - 5   // 2
n = n * 4   // 8
n = n / 2   // 4
n = n ** 2  // 16
n = n % 5   // 1

n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5

// OPERADORES DE INCREMENTO

var x = 5
x++ // 6
x-- // 4