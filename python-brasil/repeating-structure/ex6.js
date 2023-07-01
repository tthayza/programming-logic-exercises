// identificando números primos em um intervalo

const inicioIntervalo = 1
const fimIntervalo = 107

const numerosPrimos = []
for (let contador = 1; contador <= fimIntervalo; contador++) {
  let numeroAtual = contador
  let divisiveisNumeroAtual = 0
  for (
    let contadorDivisiveis = 1;
    contadorDivisiveis <= fimIntervalo;
    contadorDivisiveis++
  ) {
    if (numeroAtual % contadorDivisiveis === 0) {
      divisiveisNumeroAtual++
    }
  }
  if (divisiveisNumeroAtual === 2) {
    numerosPrimos.push(numeroAtual)
  }
}
console.log(numerosPrimos)
