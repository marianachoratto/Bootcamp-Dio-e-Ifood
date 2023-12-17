const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
    },
};

//função aleatória de quadrados + adicionar inimigo
function randomSquare(){
    //1º: remover inimigo
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy")
    })
    //2º Sortear um número aleatório
    let randomNumber = Math.floor(Math.random()*9)
    let randomSquare = state.view.squares[randomNumber]
    //Em que ponto isso faz uma lista? 
    
    //3º Colocar o inimigo dentro do numero aleatório
    randomSquare.classList.add("enemy")

    //4º Guardar a posição do inimigo para fazer a comparação na função ListenerHitbox
    state.values.hitPosition = randomSquare.id;
}

//Função que move o inimigo em X tempo
function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
    //a cada X tempo eu vou chamar a função moveEnemy para ela sortear um novo número na função randomSquare
}

//Listener de quando o usuário clica no inimigo
function addListenerHitbox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", ()=>{
            if(square.id === state.values.hitPosition){
                // se acertar o inimigo a pontuação sobe +1
                state.values.result++
                state.view.score.textContent = state.values.result;
                //impedir de aumentar + de 1 ponto 
                state.values.hitPosition = null
            }
        } )
    })
}
//Eu sempre tenho que falar para o jogo onde está meu inimigo

//Toda a vez que o jogo inicia: o inimigo se move, o listener inicia
function initialize(){
    moveEnemy();
    addListenerHitbox();
}

initialize();