// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.
let contador = 1
let atual = 1
const limite = 8
let ultimo = 1
let penultimo = ultimo - 1
while (contador <= limite) {
  atual = ultimo + penultimo
  penultimo = ultimo
  ultimo = atual

  contador++
}
