// Faça um Programa que peça dois números e imprima o maior deles.
// make a program that request two number and print the biggest of them

const firstNumber = Number(prompt('Informe o primeiro número'))
const secondNumber = Number(prompt('Informe o segundo número'))

const biggest = firstNumber > secondNumber ? firstNumber : secondNumber

alert(`O maior número é ${biggest}`)
