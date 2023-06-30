// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
// do a program that requests the four bimonthly notes and show the average

let primeiraNota = prompt('Informe a primeira nota')
let segundaNota = prompt('Informe a segunda nota')
let terceiraNota = prompt('Informe a terceira nota')
let quartaNota = prompt('Informe a quarta nota')

primeiraNota = Number(primeiraNota)
segundaNota = Number(segundaNota)
terceiraNota = Number(terceiraNota)
quartaNota = Number(quartaNota)
const resultado = primeiraNota + segundaNota + terceiraNota + quartaNota

alert(
  `A soma das notas é igual a ${resultado} e a média é igual a ${resultado / 4}`
)
