function checkQuantity(students, monitors) {
  if ((students < 50) || (monitors < 50)) {
    total = students + monitors
    if (total <= 50) {
      return 'S'
    }
  }
  return 'N'
}
console.log(checkQuantity(39, 11))