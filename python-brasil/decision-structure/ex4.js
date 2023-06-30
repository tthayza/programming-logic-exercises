// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

const typedLetter = prompt('Informe uma letra')
const vowels = ['a', 'e', 'i', 'o', 'u']
let isVowel = false
for (vowel of vowels) {
  if (typedLetter === vowel) isVowel = typedLetter === vowel ? true : false
}
alert(`${isVowel ? 'é vogal' : 'não é vogal'}`)
