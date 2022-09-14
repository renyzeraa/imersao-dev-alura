var carta1 = {
  nome: 'Bulbasauro',
  imagem:
    'https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg',
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
}

var carta2 = {
  nome: 'Darth Vader',
  imagem:
    'https://www.arrobanerd.com.br/wp-content/uploads/2022/03/starwars-omnibus-Copia.jpg',
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
}

var carta3 = {
  nome: 'Shiryu de dragão',
  imagem: 'https://s.aficionados.com.br/imagens/shiryu.jpg',
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)

  if (numeroCartaMaquina !== numeroCartaJogador) {
    cartaMaquina = cartas[numeroCartaMaquina]
    cartaJogador = cartas[numeroCartaJogador]

    document.querySelector('#btnSortear').disabled = true
    document.querySelector('#btnJogar').disabled = false
    exibirCartaJogador()
  }
}

function pegarAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = pegarAtributoSelecionado()

  var jogador = cartaJogador.atributos[atributoSelecionado]
  var maquina = cartaMaquina.atributos[atributoSelecionado]

  if (maquina > jogador) {
    document.getElementById(
      'resultado'
    ).innerHTML = `<p class="resultado-final"> PERDEU ! </p>`
  } else if (maquina == jogador) {
    document.getElementById(
      'resultado'
    ).innerHTML = `<p class="resultado-final"> EMPATE ! </p>`
  } else {
    document.getElementById(
      'resultado'
    ).innerHTML = `<p class="resultado-final"> GANHOU ! </p>`
  }

  document.querySelector('#btnSortear').disabled = false
  document.querySelector('#btnJogar').disabled = true

  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`

  var tagHTML = `<div id="opcoes" class="carta-status">`
  var opcoes = document.querySelector('.opcoes')
  var opcoesTexto = ''

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `
    <input 
    type="radio" 
    name="atributo" 
    value="${atributo}"
    >
    ` +
      atributo +
      ' ' +
      cartaJogador.atributos[atributo] +
      '<br>'

    opcoes.innerHTML = opcoesTexto
  }

  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`

  var tagHTML = `<div id="opcoes" class="carta-status">`

  var opcoesTexto1 = ''

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto1 +=
      `
    <p 
    type="text" 
    name="atributo" 
    value="${atributo}"
    >
    ` +
      atributo +
      ' ' +
      cartaMaquina.atributos[atributo] +
      '</p>'

    opcoes.innerHTML = opcoesTexto1
  }

  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto1 + '</div>'
}
