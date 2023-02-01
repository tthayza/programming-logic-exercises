function checkOddEven(par, dedo1, dedo2) {
  //alice = 0  bob = 1
  if (par == 0 || par == 1) {
    if (dedo1 >= 0 && dedo1 <= 5 && dedo2 >= 0 && dedo2) {
      winner = ''
      soma = dedo1 + dedo2
      if ((dedo1 + dedo2) % 2 == 0) {
        if (par == 0) {
          winner = '0'
        } else {
          winner = '1'
        }
      } else {
        if (par == 0) {
          winner = '1'
        } else {
          winner = '0'
        }
      }
      return winner
    }
  }
}
console.log(checkOddEven(0, 0, 3))
