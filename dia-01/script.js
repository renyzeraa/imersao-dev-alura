const inputNota1 = document.querySelector('#nota1')
const inputNota2 = document.querySelector('#nota2')
const inputNota3 = document.querySelector('#nota3')
let notaFinal = document.querySelector('.notaFinal')
const result = document.querySelector('.result')
const button = document.querySelector('.btn')
let aprovacao = document.querySelector('.aprovacao')
let media

function mediaFinal(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3
  notaFinal.innerHTML = media.toFixed(2)

  if (media >= 7 && media <= 10) {
    aprovacao.innerHTML = `Aprovado !`
  } else {
    aprovacao.innerHTML = `Reprovado !`
  }
}

button.addEventListener('click', () => {
  let nota1 = Number(inputNota1.value)
  let nota2 = Number(inputNota2.value)
  let nota3 = Number(inputNota3.value)

  if (nota1 === 0 && nota2 === 0 && nota3 === 0) {
    return alert('Digite uma nota maior que 0')
  }

  mediaFinal(nota1, nota2, nota3)

  result.classList.add('active')
})
