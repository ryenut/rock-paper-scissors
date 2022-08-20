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
            if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
                return 'It\'s a tie!';
            
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
                return 'You lose! Paper beats rock.';
            
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
                return 'You win!';
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
                return 'It\'s a tie!';
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
                return 'You lose! Rock beats paper.'
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
                return 'You lose! Scissors beat paper.'
            
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
                return 'It\'s a tie!'

            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
                return 'You lose! Rock beats scissors.'

            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
                return 'You win!'
            }   
    }

        const playerScore
        const computerScore

        function game() {}
        