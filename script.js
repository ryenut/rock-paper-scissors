let playerScore = 0;
let computerScore = 0;
let endMatch = document.querySelector('.end-match')

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')      


const playerSpan = document.querySelector('.user-score')
const computerSpan = document.querySelector('.computer-score')
const message = document.querySelector('.action');
const div = document.querySelector('.container');


const img = document.createElement('img')
img.src = 'images/reset2.png';

img.style.width = "60px";

const resetBtn = document.createElement('button')
resetBtn.classList.add('play-again')
resetBtn.appendChild(img);
resetBtn.style.marginTop = '20px';
resetBtn.style.backgroundColor = '#fff';
resetBtn.style.border = '3px solid #51557E';
resetBtn.style.borderRadius = "50%";
resetBtn.style.boxShadow = '0 0 10px #2a37b8'


const value = ['rock', 'paper', 'scissors'];


function getComputerChoice() {            
    return randomMove = value[Math.floor(Math.random() * value.length)]
} 

function makeUppercase(move) {
    if(move === 'rock') return 'Rock';
    if(move === 'paper') return 'Paper';
    if (move === 'scissors') return 'Scissors';
}

function playAgain () {
    playerScore = 0;
    computerScore = 0;
    playerSpan.textContent = 0;
    computerSpan.textContent = 0;
    rockBtn.removeAttribute("disabled", 1);
    paperBtn.removeAttribute("disabled", 1);
    scissorsBtn.removeAttribute("disabled", 1);
}

function win(player, computer) {
    const playerDiv = document.getElementById(player);

    playerScore++;
    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;
    message.textContent = `${makeUppercase(player)} beats ${makeUppercase(computer)}. You win!`
    playerDiv.classList.add('win-glow');
    setTimeout(() => playerDiv.classList.remove('win-glow'), 250);

    if (playerScore === 5) {
        message.textContent = "Congratulations! You win 🎉"; 
        rockBtn.setAttribute("disabled", 1);
        paperBtn.setAttribute("disabled" ,1);
        scissorsBtn.setAttribute("disabled", 1);
        div.appendChild(resetBtn);
    }
}

function lose(player, computer) {
    const playerDiv = document.getElementById(player);

    computerScore++;
    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;
    message.textContent = `${makeUppercase(player)} beats ${makeUppercase(computer)}. You lose!`
    playerDiv.classList.add('lose-glow');
    setTimeout(() => playerDiv.classList.remove('lose-glow'), 250);
    if (computerScore === 5){
        message.textContent = "Game over. You lose 💩";
        rockBtn.setAttribute("disabled", 1);
        paperBtn.setAttribute("disabled" ,1);
        scissorsBtn.setAttribute("disabled", 1);
        div.appendChild(resetBtn);
    }
}

function tie(player, computer) {
    const playerDiv = document.getElementById(player);
    message.textContent = `It\'s a draw. ${makeUppercase(player)} beats ${makeUppercase(computer)}.`;
    playerDiv.classList.add('draw-glow');
    setTimeout(() => playerDiv.classList.remove('draw-glow'), 250);
}

function playRound (playerSelection) {

    const computerSelection = getComputerChoice(); 

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        tie(playerSelection, computerSelection);

    
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        lose(playerSelection, computerSelection);
        
    
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        win(playerSelection, computerSelection);
    
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        tie(playerSelection, computerSelection);
    
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        win(playerSelection, computerSelection);
    
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
       lose(playerSelection, computerSelection);
    
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        tie(playerSelection, computerSelection);

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        lose(playerSelection, computerSelection);

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        win(playerSelection, computerSelection);     
    }   
}


rockBtn.addEventListener('click', () => playRound('rock'));        

paperBtn.addEventListener('click', () => playRound('paper'));

scissorsBtn.addEventListener('click', () => playRound('scissors'));        

resetBtn.addEventListener('click', () => playAgain());

resetBtn.addEventListener('click', () => resetBtn.remove());