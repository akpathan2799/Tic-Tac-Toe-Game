//Winning Patterns
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8]
];
document.querySelector('#reset-game').addEventListener('click',resetGame);
document.querySelector('.new-game').addEventListener('click',newGame);
const winnerPage = document.querySelector('.winner-loser-message-display');
const winnerImageSource = document.querySelector('.winner-image');
const winnerNews = document.querySelector('.winner-news');
let count = 0;
let winner = false;
// x turns be true
let xTurn = true;

// Getting Player turn element 
const playerTurnHeading = document.querySelector('.player-turn-heading');

// Getting buttons
const buttons = document.querySelectorAll('.grid-item');

// Adding event listners to buttons
buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        if(xTurn){
            button.innerHTML="X";
            playerTurnHeading.innerHTML="O's Turn"
            xTurn = false;
        }else{
            button.innerHTML="O";
            playerTurnHeading.innerHTML="X's Turn"
            xTurn=true;
        }
        count = count + 1;
        button.setAttribute('disabled','')
        button.classList.add("disabled-courser");
        checkWinner();
    })
})


// Adding check Winner functionality
function checkWinner(){

    console.log(count);
    winningPattern.forEach((winPattern)=>{
        let[winPattern_1,winPattern_2,winPattern_3] = winPattern;
       let winPosition_1 = buttons[winPattern_1].innerText;
       
       let winPosition_2 = buttons[winPattern_2].innerText;
       let winPosition_3 = buttons[winPattern_3].innerText;

       if(winPosition_1 != '' && winPosition_2 !='' && winPosition_3 !=''){
            if(winPosition_1 === winPosition_2 && winPosition_2 === winPosition_3 ){
                showWinnerMessage(winPosition_1);
            }
            if(count === 9 && winner === false){
                showWinnerMessage('Match is Draw')
            }
       }
    })
}

// Adding winner Showcase message functionality
function showWinnerMessage(message){

    if(message === "X" || message === "O"){

        winnerNews.innerHTML = `${message} is Winner`;
        winnerImageSource.src = './partypopper-removebg-preview.png';
    }
    else{
        winnerNews.innerHTML = `${message}`;
        winnerImageSource.src = './emoji.png';
    }


    winnerPage.style.display = 'block';

}

// Adding functionality for Reset Game
function resetGame(){
    buttons.forEach((button)=>{
        button.innerHTML='';
        button.removeAttribute('disabled','')
        button.classList.remove("disabled-courser");
    })
    count=0;
    winner=false;
    xTurn=true;
    playerTurnHeading.innerHTML="X's Turn"
}

// Adding new Game functionality

function newGame(){
    resetGame();

    winnerPage.style.display = 'none';

}
