var altura = 0
var largura = 0
var vidas = 1
var tempo = 10


var nivel = window.location.search

nivel = nivel.replace('?', '')

var criaMoscaTempo = 2000

if (nivel === 'normal') {

    //tempo 2000
    criaMoscaTempo = 2000

} else if (nivel === 'dificil') {

    //tempo 1250
    criaMoscaTempo = 1250

} else {

    //tempo 750
    criaMoscaTempo = 750

}


function ajustaTamanhoPalcoJogo() {

    //altura
    altura = window.innerHeight

    //largura
    largura = window.innerWidth

    console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

var crono = setInterval(function() {
    
    tempo -= 1

    if (tempo < 0) {

        clearInterval(crono)
        clearInterval(criaMosca)

        window.location.href = 'vitoria.html'

    } else {

        document.getElementById('crono').innerHTML = tempo

    }

}, 1000)

function posicaoRandomica () {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        //console.log('Elemento selecionado foi: v' + vidas)
        if (vidas > 3) {

            window.location.href = 'game-over.html'

        } else {

            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'

            vidas++

        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 120
    var posicaoY  = Math.floor(Math.random() * altura) - 120

    //Operador ternário (Controle)
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)

}

function tamanhoAleatorio () {

    var classe = Math.floor(Math.random() * 3)

    switch(classe) {

        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }

}

function ladoAleatorio () {

    var classe = Math.floor(Math.random() * 2)

    switch(classe) {

        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}


function iniciarJogo() {

    var nivel = document.getElementById('nivel').value
    
    if (nivel == '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }
    
}
