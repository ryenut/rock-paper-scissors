// Test function to return a random string
// 

        const compMove = ['rock', 'paper', 'scissors'];
                
        function getComputerChoice() {
            return randomMove = compMove[Math.floor(Math.random() * compMove.length)]
        }

        const computerSelection = getComputerChoice(); 
        const playerSelection = 'rock';
        
        function singleRound (playerSelection, computerSelection) {           
            if (playerSelection === 'rock' && computerSelection === 'rock') {
                return 'It\'s a tie!';
            
            } else if (playerSelection === 'rock' && computerSelection === 'paper'){
                return 'You lose! Paper beats rock.';
            
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                return 'You win!';
        }
    }

        console.log(singleRound(playerSelection, computerSelection));