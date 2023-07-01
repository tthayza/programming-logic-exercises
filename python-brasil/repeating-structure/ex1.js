// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let control = true
while (control) {
  const answer = Number(prompt('Informe uma nota de 0 a 10'))
  if (answer > 10 || answer < 0) {
    control = false
    alert('Valor inválido')
  }
}
