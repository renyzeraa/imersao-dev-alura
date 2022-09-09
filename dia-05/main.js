const filmes = []

function adicionarFilme() {
  const filme = document.querySelector('#filme').value
  const checkLink =
    (filme.includes('http') && filme.includes('.jpg')) || filme.includes('.png')

  if (!checkLink) {
    return alert('Insira um Link válido')
  }

  filmes.push(filme)

  document.querySelector('#filme').value = ''

  if (filmes.length > 0) {
    document.querySelector('.show-btn').classList.add('show')
  }

  return filmes
}

function mostrarFilme() {
  for (let filme of filmes) {
    document.querySelector('#listaFilmes').innerHTML += `<img src="${filme}" />`
  }
}
