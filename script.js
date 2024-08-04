var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {

    //altura
    altura = window.innerHeight

    //largura
    largura = window.innerWidth

    console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

function posicaoRandomica () {

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY  = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)

    console.log(tamanhoAleatorio())

}

function tamanhoAleatorio () {

    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe) {

        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }

}