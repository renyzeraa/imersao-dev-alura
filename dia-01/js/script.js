// media
const inputNota1 = document.querySelector('#nota1')
const inputNota2 = document.querySelector('#nota2')
const inputNota3 = document.querySelector('#nota3')
let notaFinal = document.querySelector('.notaFinal')
const result = document.querySelector('.result')
const button = document.querySelector('.btn')
let aprovacao = document.querySelector('.aprovacao')
let media

// conversor
const button2 = document.querySelector('.btn2')
const result2 = document.querySelector('.result2')
const degreeFinal = document.querySelector('.js-degree')
let degree = document.querySelector('#degree')

// calcular media final

function mediaFinal(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3
  notaFinal.innerHTML = media.toFixed(2)

  if (media >= 7 && media <= 10) {
    aprovacao.innerHTML = `Aprovado !`
  } else {
    aprovacao.innerHTML = `Reprovado !`
  }

  if (nota1 === 0 && nota2 === 0 && nota3 === 0) {
    return alert('Digite uma nota maior que 0')
  }

  result.classList.add('active')
}

button.addEventListener('click', () => {
  let nota1 = Number(inputNota1.value)
  let nota2 = Number(inputNota2.value)
  let nota3 = Number(inputNota3.value)

  mediaFinal(nota1, nota2, nota3)
})

// conversor celsius ou fahrenheit

function transformDegree(deg) {
  const celsiusExists = deg.toUpperCase().includes('C')
  const fahrenheitExists = deg.toUpperCase().includes('F')

  if (!fahrenheitExists && !celsiusExists) {
    return alert('Invalid degree: ' + deg)
  }

  if (deg.toUpperCase().includes('C')) {
    const regexp = new RegExp(/[c]$/i)
    const n = regexp.test(deg)
    if (!n) {
      return alert('Invalid degree: ' + deg)
    }
  }

  if (deg.toUpperCase().includes('F')) {
    const regexp = new RegExp(/[f]$/i)
    const n = regexp.test(deg)
    if (!n) {
      return alert('Invalid degree: ' + deg)
    }
  }

  //fluxo ideal F -> C
  let updatedDegree = Number(deg.toUpperCase().replace('F', ''))
  let formula = fahrenheit => (fahrenheit - 32) * (5 / 9)
  let degreeSign = ' Celsius'

  //fluxo alternativo
  if (celsiusExists) {
    updatedDegree = Number(deg.toUpperCase().replace('C', ''))
    formula = celsius => celsius * (9 / 5) + 32
    degreeSign = ' Fahrenheit'
  }

  let resultDegree = formula(updatedDegree).toFixed(2) + degreeSign

  degreeFinal.innerHTML = resultDegree
  result2.classList.add('active')
  return
}

button2.addEventListener('click', () => {
  let deg = degree.value
  transformDegree(deg)
})
