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
        // numOfUserWins++;
        return outputWin;
    } else if ((lowerCaseComputer === 'rock' && lowerCasePlayer === 'scissors') || (lowerCaseComputer === 'paper' && lowerCasePlayer === 'rock') || (lowerCaseComputer === 'scissors' && lowerCasePlayer === 'paper') ) {
        // numOfComputerWins++;
        return outputLose;
    } else {
        // numOfTies++;
        return outputTie;
    }
}

function game () {
    let currentRound = 1;
    let numOfUserWins = 0;
    let numOfComputerWins = 0;
    let numOfTies = 0;

    let bttnRock = document.querySelector('#rock');
    let bttnPaper = document.querySelector('#paper');
    let bttnScissors = document.querySelector('#scissors');
    let resultsDiv = document.querySelector('.resultsContainer');
    let result = document.createElement('p');
    resultsDiv.appendChild(result);
    let numOfRounds = 5;
    console.log(currentRound);



    bttnRock.addEventListener('click', () => {
        result.textContent = (gameRound('rock', getComputerChoice()));
        currentRound++;
        console.log(`Current round: ${currentRound}`);
        if (currentRound > numOfRounds) endGame();
    });

    bttnPaper.addEventListener('click', () => {
        result.textContent = (gameRound('paper', getComputerChoice()));
        currentRound++;
        console.log(currentRound);
        if (currentRound > numOfRounds) endGame();

    });
    bttnScissors.addEventListener('click', () => {
        result.textContent = (gameRound('scissors', getComputerChoice()));
        currentRound++;
        console.log(currentRound);
        if (currentRound > numOfRounds) endGame();

    });

    // console.log(`Current  round: ${currentRound} of 5.`)

    // console.log(`Number of computer wins so far: ${numOfComputerWins}.`);
    // console.log(`Number of user wins so far: ${numOfUserWins}.`);
    // console.log(`Number of ties so far: ${numOfTies}.`);




    function endGame () {
     if (numOfUserWins > numOfComputerWins) {
        console.log(`You won the match! Your wins: ${numOfUserWins} | Computer wins: ${numOfComputerWins} | Ties: ${numOfTies} ties.`);
    } else if (numOfComputerWins > numOfUserWins) {
       console.log(`You lost the match! Your wins: ${numOfUserWins} | Computer wins: ${numOfComputerWins} | Ties: ${numOfTies} ties.`);
    } else if (numOfUserWins === 0 && numOfComputerWins == 0) {
        console.log(`Nobody won the match! You had ${numOfUserWins} wins and the computer had ${numOfComputerWins}, but there were ${numOfTies} ties!`);
    }   
    }
  
}

game();




