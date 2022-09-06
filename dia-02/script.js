// ======== libra
function converterLibra() {
  const valueInput = document.querySelector('#valor')
  if (Number(valueInput.value) === 0) {
    return alert('Insira um valor maior que zero')
  } else {
    document.querySelector('.final-euro').classList.remove('active')
    document.querySelector('.final-dolar').classList.remove('active')
    document.querySelector('.final-libra').classList.add('active')
    const valueLibra = Number(valueInput.value) * 6.04

    document.querySelector('.result-libra').innerHTML = valueLibra.toFixed(2)
  }
}

// ======== euro
function converterEuro() {
  const valueInput = document.querySelector('#valor')
  if (Number(valueInput.value) === 0) {
    return alert('Insira um valor maior que zero')
  } else {
    document.querySelector('.final-libra').classList.remove('active')
    document.querySelector('.final-euro').classList.add('active')
    document.querySelector('.final-dolar').classList.remove('active')

    const valueEuro = Number(valueInput.value) * 5.19

    document.querySelector('.result-euro').innerHTML = valueEuro.toFixed(2)
  }
}

// ======== dolar
function converterDolar() {
  const valueInput = document.querySelector('#valor')
  if (Number(valueInput.value) === 0) {
    return alert('Insira um valor maior que zero')
  } else {
    document.querySelector('.final-libra').classList.remove('active')
    document.querySelector('.final-euro').classList.remove('active')
    document.querySelector('.final-dolar').classList.add('active')
    const valueDolar = Number(valueInput.value) * 5.24

    document.querySelector('.result-dolar').innerHTML = valueDolar.toFixed(2)
  }
}
