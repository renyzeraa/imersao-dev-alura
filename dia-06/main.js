let id = 0
const jogadores = []

function addNewPlayer() {
  const namePlayer = document.querySelector('#name-player')

  id++

  const player = {
    nome: namePlayer.value,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  }

  jogadores.push(player)

  return showPlayers(jogadores)
}

function calcularPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates

  return pontos
}

function showPlayers(jogadores) {
  let elemento = ''

  for (let i = 0; i < jogadores.length; i++) {
    elemento += `<tr><td> ${jogadores[i].nome} </td>`
    elemento += `<td>${jogadores[i].vitorias}</td>`
    elemento += `<td>${jogadores[i].empates}</td>`
    elemento += `<td>${jogadores[i].derrotas}</td>`
    elemento += `<td>${jogadores[i].pontos}</td>`
    elemento += `<td><button onClick='adicionarVitoria(${i})'>Vitória</button></td>`
    elemento += `<td><button onClick='adicionarEmpate()'>Empate</button></td>`
    elemento += `</tr>`
  }

  const tablePlayers = document.querySelector('#tabelaJogadores')

  tablePlayers.innerHTML = elemento
}

function adicionarVitoria(i) {
  for (let jogador of jogadores) {
    if (jogadores[i] !== jogador) {
      jogador.derrotas++
    }
  }

  const player = jogadores[i]
  player.vitorias++
  player.pontos = calcularPontos(player)

  showPlayers(jogadores)
}

function adicionarEmpate() {
  for (let player of jogadores) {
    player.empates++
    player.pontos = calcularPontos(player)
  }

  showPlayers(jogadores)
}

function zerarPontos() {
  for (let jogador of jogadores) {
    jogador.vitorias = 0
    jogador.derrotas = 0
    jogador.empates = 0
    jogador.pontos = 0
  }
  showPlayers(jogadores)
}
