function buscaBinaria(item) {
  var listaNumeros = [4, 14, 44, 54]
  var primeiro = 0
  var ultimo = listaNumeros.length - 1
  var achou = false
  console.log(ultimo)
  while (primeiro <= ultimo && !achou) {
    var meio = Math.round((primeiro + ultimo) / 2)
    if (item == listaNumeros[meio]) {
      achou = true
    } else {
      if (item < listaNumeros[meio]) {
        ultimo = meio - 1
        console.log(ultimo)

      } else {
        primeiro = meio + 1
      }
    }
  }
  return achou
}

console.log(buscaBinaria(4))
