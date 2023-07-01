// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

const numero = 37
let divisiveis = 0
for (let contador = 0; contador <= numero; contador++) {
  if (numero % contador == 0) {
    divisiveis++
  }
}
if (divisiveis > 2) {
  console.log(`não é primo ${divisiveis}`)
} else console.log(`é primo ${divisiveis}`)
