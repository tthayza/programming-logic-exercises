// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit
// do a program that request the temperature in celsius degrees, transform and show in fahrenheit degrees

const temperatureC = Number(prompt('Informe a temperatura em graus Celsius'))
const temperatureF = temperatureC * (9 / 5) + 32

alert(`A temperatura convertida para graus Fahrenheit é ${temperatureF}`)
