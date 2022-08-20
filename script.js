// Test function to return a random string
// 

        const value = ['rock', 'paper', 'scissors'];
                
        function getComputerChoice() {
            return randomMove = value[Math.floor(Math.random() * value.length)]
        }

        const computerSelection = getComputerChoice(); 
        const answer = prompt('Choose: Rock, Paper, or Scissors');
        const playerSelection = answer;
        
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