        
        const value = ['rock', 'paper', 'scissors'];
                
        function getComputerChoice() {
            return randomMove = value[Math.floor(Math.random() * value.length)]
        } 
        
        function playRound (playerSelection, computerSelection) {  

        let win = "Player  : " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + 'You win! ';
        let lose = "Player  : " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + 'You lose! ';
        let tie = "Player  : " + playerSelection + '\n' + "Computer: " + computerSelection + '\n' + 'It\'s a tie.';


            if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
                return tie;                
            
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
                computerScore++;
                return lose + 'Paper beats rock.';
                
            
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
                playerScore++;
                return win;
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
                return tie;
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
                playerScore++;
                return win;
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
                computerScore++;
                return lose + 'Scissors beat paper.';
            
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
                return tie;

            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
                computerScore++;
                return lose + 'Rock beats scissors.';

            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
                playerScore++;
                return win;
            }   
        }

        let playerScore = 0
        let computerScore = 0

        function scoreBoard(playerScore, computerScore) {

            if (playerScore > computerScore) {
                return 'Scoreboard' + '\n' + 'Player  : ' + playerScore + '\n' + 'Computer: ' + computerScore

            } else {
                return 'Scoreboard' + '\n' + 'Player  : ' + playerScore + '\n' + 'Computer: ' + computerScore
            }
        }

        function game() {

            let matchResult

            for (i = 0; i < 7; i++) {
                
                const computerSelection = getComputerChoice(); 
                const choice = prompt('Choose: Rock, Paper, or Scissors');
                const playerSelection = choice;

                if (playerSelection === '' || playerSelection === null) {
                    return 'Game over. You lost.'
                } else {
                    console.log(playRound(playerSelection, computerSelection));
                    console.log(scoreBoard(playerScore, computerScore));
                }                
            }

            if (playerScore > computerScore) {
                return matchResult = 'Congratulations! You win!'
            } else {
                return matchResult = 'You lose, refresh page to try again!'
            }
        }

        console.log(game())


      