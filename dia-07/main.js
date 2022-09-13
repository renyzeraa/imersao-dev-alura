const carta1 = {
  nome: 'bubasauro',
  atributos: {
    ataque: 7,
    defesa: 2,
    magia: 12
  }
}

const carta2 = {
  nome: 'dragão azul',
  atributos: {
    ataque: 11,
    defesa: 6,
    magia: 5
  }
}

const carta3 = {
  nome: 'tutancamon',
  atributos: {
    ataque: 8,
    defesa: 9,
    magia: 6
  }
}

const cartas = [carta1, carta2, carta3]

let cartaMaquina
let cartaJogador

function sortearCarta() {
  const numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  const numeroCartaJogador = parseInt(Math.random() * cartas.length)

  if (numeroCartaMaquina !== numeroCartaJogador) {
    cartaMaquina = cartas[numeroCartaMaquina]
    cartaJogador = cartas[numeroCartaJogador]

    document.querySelector('#btnSortear').disabled = true
    document.querySelector('#btnJogar').disabled = false

    exibirOpcoes()
  } else {
    return sortearCarta()
  }
}

function exibirOpcoes() {
  const opcoes = document.querySelector('#opcoes')
  let opcoesTexto = ''

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `
    <input 
    type="radio" 
    name="atributo" 
    value="${atributo}"
    >
    ` + atributo
    opcoes.innerHTML = opcoesTexto
  }
}

function pegarAtributoSelecionado() {
  const radioAtributos = document.getElementsByName('atributo')
  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  const atributoSelecionado = pegarAtributoSelecionado()

  const maquina = cartaJogador.atributos[atributoSelecionado]
  const jogador = cartaMaquina.atributos[atributoSelecionado]

  if (maquina > jogador) {
    document.getElementById(
      'resultado'
    ).innerHTML = `<h1> Maquina Ganhou com a carta ${cartaMaquina.nome}, e voce tinha ${cartaJogador.nome}! </h1>`
  } else if (maquina == jogador) {
    document.getElementById('resultado').innerHTML = `<h1>EMPATE !</h1>`
  } else {
    document.getElementById(
      'resultado'
    ).innerHTML = `<h1> Você Ganhou com a carta ${cartaJogador.nome}, e a maquina tinha ${cartaMaquina.nome}! </h1>`
  }
}
