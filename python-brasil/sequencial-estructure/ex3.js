// Faça um Programa que converta metros para centímetros.
// do a program that converts meters to centimeters

let meters = prompt('Informe o valor em metros')
meters = Number(meters)

const metersToCentimeters = meters / 100

alert(
  `O valor em metros é ${meters}m e o valor convertido para centímetros é ${metersToCentimeters}cm`
)
