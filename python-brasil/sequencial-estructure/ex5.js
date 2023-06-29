// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
// do a program that calculate the area of a square, after show the double of this area to the user.

let squareBase = prompt('Informe o valor da base do quadrado')
let squareHeight = prompt('Informe o valor da altura do quadrado')
squareBase = Number(squareBase)
squareHeight = Number(squareHeight)

const squareArea = squareBase * squareHeight

alert(
  `A área do quadrado é ${squareArea} e o dobro da sua área é ${squareArea * 2}`
)
