// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

const numero = Number(prompt('De qual número deseja ver a tabuada?'))
for (let i = 0; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`)
}