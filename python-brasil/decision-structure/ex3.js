// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
// make a program that verify if a letter typed is 'f' or 'm'. According to a letter write: f female, m male, invalid gender.

const gender = prompt('Informe o gênero')
if (gender === 'f') {
  alert('F feminino')
} else if (gender === 'm') {
  alert('M masculino')
} else alert('Sexo inválido')
