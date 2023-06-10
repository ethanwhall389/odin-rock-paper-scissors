function getComputerChoice () {
    let options = ['Rock', 'Paper', 'Scissors']
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice.toString();
}


function gameRound (playerSelection, computerSelection) {
    let lowerCasePlayer = playerSelection.toLowerCase();
    let lowerCaseComputer = computerSelection.toLowerCase();
    let outputWin = `You win! ${playerSelection} beats ${computerSelection}`;
    let outputLose = `You lose! ${computerSelection} beats ${playerSelection}`;
    let outputTie = `It's a tie! You both chose ${playerSelection}`;

    if ((lowerCaseComputer === 'rock' && lowerCasePlayer === 'paper') || (lowerCaseComputer === 'paper' && lowerCasePlayer === 'scissors') || (lowerCaseComputer === 'scissors' && lowerCasePlayer === 'rock') ) {
        return outputWin;
    } else if ((lowerCaseComputer === 'rock' && lowerCasePlayer === 'scissors') || (lowerCaseComputer === 'paper' && lowerCasePlayer === 'rock') || (lowerCaseComputer === 'scissors' && lowerCasePlayer === 'paper') ) {
        return outputLose;
    } else {
        return outputTie;
    }
}

function game () {
    let numOfUserWins = 0;
    let numOfComputerWins = 0;
    let numOfTies = 0;
    let currentRound = 1;
    for (let i = 0; i < 5; i++) {
        
        let bttnRock = document.querySelector('#rock');
        let bttnPaper = document.querySelector('#paper');
        let bttnScissors = document.querySelector('#scissors');
        bttnRock.addEventListener('click', () => {
            playerChoice = 'rock'
            console.log(gameRound('rock', getComputerChoice()));
        });
        bttnPaper.addEventListener('click', () => {
            playerChoice = 'paper'
            console.log(gameRound('paper', getComputerChoice()));
        });
        bttnScissors.addEventListener('click', () => {
            playerChoice = 'scissors'
            console.log(gameRound('scissors', getComputerChoice()));
        });

        
        if (winner.includes('lose')) {
            numOfComputerWins++;
        } else if (winner.includes('win')) {
            numOfUserWins++;
        } else {
            numOfTies++;
        }

        currentRound++;
        console.log(`Current  round: ${currentRound} of 5.`)

        console.log(`Number of computer wins so far: ${numOfComputerWins}.`);
        console.log(`Number of user wins so far: ${numOfUserWins}.`);
        console.log(`Number of ties so far: ${numOfTies}.`);
    }

    if (numOfUserWins > numOfComputerWins) {
        alert(`You won the match! Your wins: ${numOfUserWins} | Computer wins: ${numOfComputerWins} | Ties: ${numOfTies} ties.`);
    } else if (numOfComputerWins > numOfUserWins) {
        alert(`You lost the match! Your wins: ${numOfUserWins} | Computer wins: ${numOfComputerWins} | Ties: ${numOfTies} ties.`);
    } else if (numOfUserWins === 0 && numOfComputerWins == 0) {
        alert(`Nobody won the match! You had ${numOfUserWins} wins and the computer had ${numOfComputerWins}, but there were ${numOfTies} ties!`);
    }

}

game();




