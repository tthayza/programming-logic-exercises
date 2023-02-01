function checkPalindrome(word) {
  word = word.replace(/ /g, '')
  newStr = ''
  for (i = word.length - 1; i >= 0; i--) {
    newStr += word[i]
  }
  return word == newStr
}

word = 'a  r  a r a '
console.log(checkPalindrome(word))
