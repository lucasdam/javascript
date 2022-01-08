// OPERADORES RELACIONAIS

console.log(5 > 2)      // true
console.log(7 < 4)      // false
console.log(8 >= 8)     // true
console.log(9 <= 7)     // false
console.log( 5 == 5)    // true
console.log(4 != 4)     // false

// IDENTIDADE (OPERADOR DE IGUALDADE RESTRITA)

console.log(5 == 5)     // true
console.log(5 == '5')   // true, mesma grandeza, o JS não testa o tipo
console.log(5 === '5')  // false, pois não são idênticos
console.log(5 === 5)    // true

// OPERADORES LÓGICOS

console.log(!true) // false
console.log(!true) // true

console.log(true && true)     // true
console.log(true && false)    // false
console.log(false && true)    // false
console.log(false && false)   // false

console.log(true || true)     // true
console.log(true || false)    // true
console.log(false || true)    // true
console.log(false || false)   // false

// PRECEDÊNCIA OPERADORES LÓGICOS: !, &&, ||

/* PRECEDÊNCIA
Operadores Aritméticos
Operadores Relacionais
Operadores Lógicos
*/

// OPERADORES TERNÁRIOS

/* teste ? true : false
teste: Teste lógico
true: O que acontece se der true
false: O que acontece se der false
*/

var media = 9
console.log(media > 7 ? 'Aprovado' : 'Reprovado')