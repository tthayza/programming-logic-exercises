// Faça um Programa que leia três números e mostre-os em ordem decrescente.

const numbers = [1, 2, 0]
let decreasingNumbers = []
let smallest = numbers[0]

for (number of numbers) {
  if (number < smallest) decreasingNumbers.push(number)
  else decreasingNumbers.unshift(number)
}

console.log(decreasingNumbers)
