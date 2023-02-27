const sprite = new Image()
sprite.src = './sprite.png'

const somAI = new Audio()
somAI.src = './AIAIAIAIAI.mp3'
const somvitoria = new Audio()
somvitoria.src = './ISSO AI.mp3'


const canvas =  document.querySelector('#game-canvas')
const contexto = canvas.getContext('2d')
let frame = 0

const telajogo = {
    desenha(){
        sky()
        chocolate.desenha()
        floor.desenha()
        floor.atualiza()
        bengala.desenha()
        bengala.colisao()
        sorvete.desenha()
        sorvete.colisao()
        suco.desenha()
        cake.desenha()
        cake.colisao()
        person.desenha()
        person.atualiza()
    },
    click(){
        person.jump()
    }
}

const telaInicio = {
    desenha(){
        sky()
        chocolate.desenha()
        floor.desenha()
        bengala.desenha()
        sorvete.desenha()
        suco.desenha()
        cake.desenha()
        person.desenha()
        menu.desenha()
    },
    click(){
        tela = telajogo
        floor.x = 0
        person.y = floor.y-70
        person.x = 100
    }
}


function loop(){
    frame += 1
    tela.desenha()
    requestAnimationFrame(loop)
}

var tela = telaInicio
function mudaTela(){
    tela.click()
}
window.addEventListener('click', mudaTela)


function sky(){
    contexto.fillStyle = '#70c5ec'
    contexto.fillRect(0,0,canvas.clientWidth,canvas.height)
}

const menu = {
    spriteX: 1285,
    spriteY: 15,
    spriteL: 520,
    spriteA: 300,
    x: 120,
    y: 100,
    largura: 260,
    altura: 150,

    desenha(){
        contexto.drawImage(
            sprite,
            menu.spriteX, menu.spriteY,
            menu.spriteL, menu.spriteA,
            menu.x, menu.y,
            menu.largura, menu.altura
        )
    }
}


const floor = {
    spriteX: 0,
    spriteY: 1200,
    spriteL: 3500,
    spriteA: 300,
    x: 0,
    y: 330,
    largura: 3000,
    altura: 150,

    desenha(){
        contexto.drawImage(
            sprite,
            floor.spriteX, floor.spriteY,
            floor.spriteL, floor.spriteA,
            floor.x, floor.y,
            floor.largura, floor.altura
        )
        contexto.drawImage(
            sprite,
            floor.spriteX, floor.spriteY,
            600, floor.spriteA,
            floor.x + 3600, floor.y,
            700, floor.altura
        )
    },
    atualiza(){
        if(person.x>600){
            tela=telaInicio
            somvitoria.play()}
        if(floor.x<=-3800){person.x+=3}
        else{floor.x-=3} 
    }
}

const chocolate = {
    spriteX: 265,
    spriteY: 87,
    spriteL: 165,
    spriteA: 315,
    x: floor.x,
    y: 380,
    largura: 150,
    altura: 150,

    desenha(){
        chocolate.x = floor.x
        contexto.drawImage(
            sprite,
            chocolate.spriteX, chocolate.spriteY,
            chocolate.spriteL, chocolate.spriteA,
            chocolate.x  + 490, chocolate.y,
            chocolate.largura, chocolate.altura
        )
        contexto.drawImage(
            sprite,
            chocolate.spriteX, chocolate.spriteY,
            chocolate.spriteL, chocolate.spriteA,
            chocolate.x  + 1270, chocolate.y,
            chocolate.largura, chocolate.altura
        )
        var i =  3000
        while(i<=3600){
            contexto.drawImage(
                sprite,
                chocolate.spriteX, chocolate.spriteY,
                chocolate.spriteL, chocolate.spriteA,
                chocolate.x  + i, chocolate.y,
                chocolate.largura, chocolate.altura
            )
            i += 150
        }
    },

}

const bengala = {
    spriteX: 144,
    spriteY: 90,
    spriteL: 41,
    spriteA: 50,
    x: floor.x,
    y: 290,
    largura: 40,
    altura: 50,

    desenha(){
        bengala.x = floor.x
        var i = 900
        while(i<=980){
            contexto.drawImage(
                sprite,
                bengala.spriteX,bengala.spriteY,
                bengala.spriteL,bengala.spriteA,
                bengala.x + i ,bengala.y,
                bengala.largura,bengala.altura
            )
            i += 40
        }

        var j = 3600
        while(j<=3760){
            contexto.drawImage(
                sprite,
                bengala.spriteX,bengala.spriteY,
                bengala.spriteL,bengala.spriteA,
                bengala.x + j ,bengala.y,
                bengala.largura,bengala.altura
            )
            j += 40
        }
    },

    colisao(){
        if(person.x+person.largura>=bengala.x+900&&person.x<=bengala.x+980&&person.y+person.altura>bengala.y){
            somAI.play()
            tela=telaInicio

        }
        if(person.x+person.largura>=bengala.x+3600&&person.x<=bengala.x+3760&&person.y+person.altura>bengala.y){
            somAI.play()
            tela=telaInicio
        }
    }


}

const sorvete = {
    spriteX: 200,
    spriteY: 90,
    spriteL: 35,
    spriteA: 50,
    x: floor.x,
    y: 180,
    largura: 105,
    altura: 150,

    desenha(){
        sorvete.x = floor.x + 2000
        contexto.drawImage(
            sprite,
            sorvete.spriteX, sorvete.spriteY,
            sorvete.spriteL, sorvete.spriteA,
            sorvete.x, sorvete.y,
            sorvete.largura, sorvete.altura
        )
    },

    colisao(){
        if(person.x+person.largura>=sorvete.x&&person.x<=sorvete.x+sorvete.largura&&person.y>sorvete.y){
            tela=telaInicio
            somAI.play()}
    }
}

const suco = {
    spriteX: [35,115,35],
    spriteY: [195,195,240],
    spriteL: 70,
    spriteA: 35,
    x: floor.x,
    y: floor.y-100,
    largura: 70,
    altura: 35,

    desenha(){
        suco.x = floor.x + 1900
        contexto.drawImage(
            sprite,
            suco.spriteX[1], suco.spriteY[1],
            suco.spriteL, suco.spriteA,
            suco.x, suco.y,
            suco.largura, suco.altura
        )
        
        suco.x2 = floor.x + 3200
        contexto.drawImage(
            sprite,
            suco.spriteX[0], suco.spriteY[0],
            suco.spriteL, suco.spriteA,
            suco.x2, suco.y,
            suco.largura, suco.altura
        )

        suco.x3 = floor.x + 3550
        suco.y3 = suco.y+30
        contexto.drawImage(
            sprite,
            suco.spriteX[2], suco.spriteY[2],
            suco.spriteL, suco.spriteA,
            suco.x3, suco.y3,
            suco.largura, suco.altura
        )
    }
}

const cake = {
    spriteX: 75,
    spriteY: 90,
    spriteL: 50,
    spriteA: 35,
    x: floor.x,
    y: floor.y,
    largura: 30,
    altura: 30,

    desenha(){
        var i = 2500
        while(i<=2625){
            cake.y = floor.y
            cake.x = floor.x
            cake.x += i
            contexto.drawImage(
                sprite,
                cake.spriteX, cake.spriteY,
                cake.spriteL, cake.spriteA,
                cake.x, cake.y-cake.altura,
                cake.largura, cake.altura
            )
            if(i==2531||i==2562||i==2593){
                cake.y = floor.y
                cake.y = cake.y-(cake.altura*2)
                contexto.drawImage(
                    sprite,
                    cake.spriteX, cake.spriteY,
                    cake.spriteL, cake.spriteA,
                    cake.x, cake.y,
                    cake.largura, cake.altura
                )
            }

            if(i==2562){
                cake.y = floor.y
                cake.y = cake.y-(cake.altura*3)
                contexto.drawImage(
                    sprite,
                    cake.spriteX, cake.spriteY,
                    cake.spriteL, cake.spriteA,
                    cake.x, cake.y,
                    cake.largura, cake.altura
                )
            }


            i += cake.largura+1
            cake.x = floor.x
        }
    },
    colisao(){
        var z = 0
        if(person.x+person.largura>=cake.x+2500&&person.x<=cake.x+2530&&person.y+person.altura>=cake.y-cake.altura){z=1}
        if(person.x+person.largura>=cake.x+2531&&person.x<=cake.x+2561&&person.y+person.altura>=cake.y-(cake.altura*2)){z=1}
        if(person.x+person.largura>=cake.x+2562&&person.x<=cake.x+2592&&person.y+person.altura>=cake.y-(cake.altura*3)){z=1}
        if(person.x+person.largura>=cake.x+2593&&person.x<=cake.x+2624&&person.y+person.altura>=cake.y-cake.altura){z=1}
        if(person.x+person.largura>=cake.x+2625&&person.x<=cake.x+2655&&person.y+person.altura>=cake.y-cake.altura){z=1}
        if(z==1){
            tela=telaInicio
            somAI.play()
        }
    }
}

const person = {
    spriteX: [450,535,660,750,660],
    spriteY: 10,
    spriteL: 80,
    spriteA: 125,
    x: floor.x+100,
    y: floor.y-70,
    largura: 50,
    altura: 70,
    queda: 4,
    i: 0,

    desenha(){

        contexto.drawImage(
            sprite,
            person.spriteX[person.i], person.spriteY,
            person.spriteL, person.spriteA,
            person.x, person.y,
            person.largura, person.altura
        )
    },

    atualiza(){
        if(person.y<=floor.y-70){person.queda+=0.1}
        else if(person.y>floor.y-70&&person.x<chocolate.x+490||person.x>chocolate.x+490+chocolate.largura&&person.x<chocolate.x+1270||person.x>chocolate.x+1270+chocolate.largura&&person.x<chocolate.x+3000||person.x>chocolate.x+3600+chocolate.largura){person.y= floor.y-70}
        if(person.y+person.altura>chocolate.y){
            tela=telaInicio
            somAI.play()}
        if(person.x+50>suco.x&&person.x<suco.x+70&&person.y+70<suco.y+suco.altura&&person.y+70>suco.y){
            person.y = suco.y-70
        }
        if(person.x+50>suco.x2&&person.x<suco.x2+70&&person.y+70<suco.y+suco.altura&&person.y+70>suco.y){
            person.y = suco.y-70
        }
        if(person.x+50>suco.x3&&person.x<suco.x3+70&&person.y+70<suco.y3+suco.altura&&person.y+70>suco.y3){
            person.y = suco.y3-70
        }
        person.y+=person.queda


        if(frame%20==0){
            if(person.y<floor.y-70){person.i=1}
            if(person.y>=floor.y-70){
            person.i += 1
            if(person.i>4){
                person.i = 1
            }
        }
        }
    },

    jump(){
        if(person.x+50>suco.x&&person.x<suco.x+70&&person.y+70<suco.y+suco.altura&&person.y+70>suco.y){}
        else if(person.x+50>suco.x2&&person.x<suco.x2+70&&person.y+70<suco.y+suco.altura&&person.y+70>suco.y){}
        else if(person.x+50>suco.x3&&person.x<suco.x3+70&&person.y+70<suco.y3+suco.altura&&person.y+70>suco.y3){}
        else if(person.y<floor.y-70){return}
        person.queda = -5
    }
}


loop()