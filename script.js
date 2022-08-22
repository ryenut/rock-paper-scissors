// Test function to return a random string
// 

        const value = ['rock', 'paper', 'scissors'];
                
        function getComputerChoice() {
            return randomMove = value[Math.floor(Math.random() * value.length)]
        }
    
        
        function playRound (playerSelection, computerSelection) {               


            if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'It\'s a tie!';
                
            
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'You lose! Paper beats rock.'
                // , computerScore++;
            
            } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'You win!'
                // , playerScore++;
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'It\'s a tie!';
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'You win!'
                // , playerScore++;
            
            } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'You lose! Scissors beat paper.'
                // , computerScore++;
            
            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'It\'s a tie!'

            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'You lose! Rock beats scissors.'
                // , computerScore++;

            } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
                return "Player  :" + playerSelection + '\n' + "Computer:" + computerSelection + '\n' + 'You win!'
                // , playerScore++;
            }   

        }

             // console.log(playRound(playerSelection, computerSelection));

        // Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

        // Use loop to iterate 5 rounds
        // Console log the winner each round

        // Use console.log to display results at the end of each round
        // write a var where user/computer scores will be stored

        // let playerScore = 0
        // let computerScore = 0
        //  create a function that will keep track of scores and display them
        

        function game() {

            for (i = 0; i < 5; i++) {
                
                const computerSelection = getComputerChoice(); 
                const choice = prompt('Choose: Rock, Paper, or Scissors');
                const playerSelection = choice;

                if (playerSelection === '' || playerSelection === null) {
                    return 'Game over. You lost.'
                } else {
                    console.log(playRound(playerSelection, computerSelection));
                }

                // console.log(playRound(playerSelection, computerSelection));
                
            
                // if (computerScore > playerScore) {

                //     console.log('You lose! Try again.')
                    
                //     } else  {
                //         console.log('Congratulations! You win.');
                //     }             
            }
        }

        console.log(game())

      