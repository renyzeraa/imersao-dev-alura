const nomeFilme = document.querySelector('#filme-name')

const posterFilme = document.querySelector('#filme-poster')

const button = document.querySelector('.mostrar')

button.onclick = () => {
  const filme = nomeFilme.value
  const poster = posterFilme.value

  document.querySelector('.js-name-filme').innerHTML = `O filme é: ${filme}`
  document.querySelector('.js-poster-filme').setAttribute('src', poster)
}
