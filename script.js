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
    let playerChoice = prompt('Would you like to play as Rock, Paper, or Scissors?');
    let numOfUserWins = 0;
    let numOfComputerWins = 0;
    for (let i = 0; i < 5; i++) {
        console.log(gameRound(playerChoice, getComputerChoice()));
    }

}

game();


