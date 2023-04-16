let puntosJugador = 0;
let puntosComputadora = 0;
let roundsTotales = 0;

const body = document.querySelector("body");

const btnRock       = document.querySelector("#rock");
const btnPaper      = document.querySelector("#paper");
const btnScissor    = document.querySelector("#scissor");
const resultado     = document.querySelector(".resultado");
let btnReseteo;

btnRock.addEventListener("click", function () { playRound(0) }); //Le pasa como parametro a la funcion que eligio piedra
btnPaper.addEventListener("click", function () { playRound(1) }); 
btnScissor.addEventListener("click", function () { playRound(2) });


function resetear(){
    btnPaper.disabled = false;
    btnRock.disabled = false;
    btnScissor.disabled = false;
    puntosComputadora = 0;
    puntosJugador = 0;
    roundsTotales = 0;
    resultado.textContent = "Resultado:";
    btnReseteo.remove();
}


function computerChoice(){
    // 0=Piedra | 1=Papel | 2=Tijera
    let computerChoice = Math.random();
    if( computerChoice <= 0.33 ){
        computerChoice = 0;
    } else if( computerChoice <= 0.66) {
        computerChoice = 1;
    } else{
        computerChoice = 2;
    }
    return computerChoice;
}

function playRound( playerChoice){
    let compuChoice = computerChoice();
    roundsTotales++;
    if(playerChoice > compuChoice ){
        puntosJugador++;
    }else if(playerChoice < compuChoice){
        puntosComputadora++;
    }else{
        puntosComputadora++;
        puntosJugador++;
    }

    if( roundsTotales == 5 ){
        if( puntosJugador > puntosComputadora ){
            resultado.textContent = "Ganaste";
        }else if( puntosComputadora > puntosJugador){
            resultado.textContent = "Perdiste"
        }else{
            resultado.textContent = "Empataste"
        }
        
        //Desactivo botones
        btnPaper.disabled = true;
        btnRock.disabled = true;
        btnScissor.disabled = true;

        //Creo boton de reseteo
        crearBtnReseteo();
    }

}

function crearBtnReseteo() {
    btnReseteo = document.createElement('button');
    btnReseteo.textContent = "Jugar de nuevo";
    btnReseteo.className = "btnClass";
    btnReseteo.addEventListener("click", function() { resetear(); });
    body.appendChild(btnReseteo);
}

