function checkDelivery(altuBox, profBox, largBox, alt, larg) {
  parameters = [altuBox, profBox, largBox, alt, larg]
  for (i = 0; i < parameters.lenght - 1; i++) {
    if (parameters[i] < 1 || parameters[i] > 100) {
      return 'N'
    }
  }
  if ((alt > altuBox || alt > largBox) && (larg > altuBox || larg > largBox)) {
    return 'S'
  }
  return 'N'
}

console.log(checkDelivery(20, 22, 5, 20, 10))
