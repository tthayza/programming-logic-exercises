// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).

// do a program that request the temperature in Fahrenheit degrees, transform and show the temperature in celsius degrees.

const temperatureF = Number(prompt('Informe a temperatura em Fahrenheit'))

const temperatureC = 5 * ((temperatureF - 32) / 9)

alert(`A temperatura convertida para graus celsius é ${temperatureC}`)
