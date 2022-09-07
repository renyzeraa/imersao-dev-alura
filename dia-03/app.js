const aleatorioString = parseInt(Math.random() * 10).toFixed()

const aleatorio = Number(aleatorioString)

function checkNumber() {
  const resultado = document.querySelector('#resultado')
  const dica = document.querySelector('#dica')
  const valorDigitado = document.querySelector('#valor')

  const valor = valorDigitado.value

  if (+valor < 0 || +valor > 10 || valor === '') {
    return (resultado.innerHTML = 'DIGITE UM VALOR VÁLIDO')
  } else {
    if (valor - aleatorio > 0) {
      dica.innerHTML = 'Dica >  Menor'
    } else if (valor - aleatorio < 0) {
      dica.innerHTML = 'Dica >  Maior'
    }
    if (+valor === aleatorio) {
      resultado.innerHTML = 'Parabéns você acertou !'
      dica.innerHTML = ''
    } else {
      resultado.innerHTML = 'Errouuu'
    }
  }
}
