function getComputerChoice () {
    let options = ['Rock', 'Paper', 'Scissors']
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice.toString();
}


function gameRound (playerSelection, computerSelection) {
    let lowerCasePlayer = playerSelection.toLowerCase();
    let lowerCaseComputer = computerSelection.toLowerCase();
    let outputWin = `You win! ${playerSelection} beats ${lowerCaseComputer}`;
    let outputLose = `You lose! ${computerSelection} beats ${lowerCasePlayer}`;
    let outputTie = `It's a tie! You both chose ${lowerCasePlayer}`;
    

    if ((lowerCaseComputer === 'rock' && lowerCasePlayer === 'paper') || (lowerCaseComputer === 'paper' && lowerCasePlayer === 'scissors') || (lowerCaseComputer === 'scissors' && lowerCasePlayer === 'rock') ) {
        return outputWin;
    } else if ((lowerCaseComputer === 'rock' && lowerCasePlayer === 'scissors') || (lowerCaseComputer === 'paper' && lowerCasePlayer === 'rock') || (lowerCaseComputer === 'scissors' && lowerCasePlayer === 'paper') ) {
        return outputLose;
    } else {
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
    let scoreDiv = document.querySelector('.scoreContainer');
    let score = document.createElement('p');
    resultsDiv.appendChild(result);
    resultsDiv.style.display = 'hide';
    scoreDiv.appendChild(score);
    let numOfRounds = 5;
    let bttnRounds = document.querySelector('.bttnRounds');
    bttnRounds.addEventListener('click', () => {
        inputValue = document.querySelector('input').value;
        if (!inputValue) {
            return;
        } else {
            numOfRounds = inputValue;
            score.textContent = `Current round: ${currentRound} of ${numOfRounds}`;   
        }

    })
    
    
    score.textContent = `Current round: ${currentRound} of ${numOfRounds}`;   

    bttnRock.addEventListener('click', () => {
        let winner = result.textContent = (gameRound('Rock', getComputerChoice()));
        currentRound++;
        resultsDiv.style.display = 'block';
        if (winner.includes('lose')) {
            numOfComputerWins++;
        } else if (winner.includes('win')) {
            numOfUserWins++;
        } else {
            numOfTies++;
        }
        if (currentRound > numOfRounds) {
          endGame();  
        } else {
            score.textContent = `Current round: ${currentRound} of ${numOfRounds}`;   
        }
    });

    bttnPaper.addEventListener('click', () => {
        let winner = result.textContent = (gameRound('Paper', getComputerChoice()));
        currentRound++;
        if (winner.includes('lose')) {
            numOfComputerWins++;
        } else if (winner.includes('win')) {
            numOfUserWins++;
        } else {
            numOfTies++;
        }

        if (currentRound > numOfRounds) {
            endGame();  
          } else {
            score.textContent = `Current round: ${currentRound} of ${numOfRounds}`;   
          }
    });

    bttnScissors.addEventListener('click', () => {
        let winner = result.textContent = (gameRound('Scissors', getComputerChoice()));
        currentRound++;
        if (winner.includes('lose')) {
            numOfComputerWins++;
        } else if (winner.includes('win')) {
            numOfUserWins++;
        } else {
            numOfTies++;
        }

        if (currentRound > numOfRounds) {
            endGame();  
          } else {
            score.textContent = `Current round: ${currentRound} of ${numOfRounds}`;   
          }
    });

    // console.log(`Current  round: ${currentRound} of 5.`)

    // console.log(`Number of computer wins so far: ${numOfComputerWins}.`);
    // console.log(`Number of user wins so far: ${numOfUserWins}.`);
    // console.log(`Number of ties so far: ${numOfTies}.`);




    function endGame () {
        resultsDiv.style.display = 'none';
        scoreDiv.style.display = 'none';

        let winnerDiv = document.querySelector('.winnerContainer');
        let winner = document.createElement('p');
        winnerDiv.appendChild(winner);

        let bttnContainer = document.querySelector('.buttonContainer');
        bttnContainer.style.display = 'none';

        
        if (numOfUserWins > numOfComputerWins) {
            winner.textContent = `You won the match! Your wins: ${numOfUserWins} | Computer wins: ${numOfComputerWins} | Ties: ${numOfTies}`;
        } else if (numOfComputerWins > numOfUserWins) {
        winner.textContent = `You lost the match! Your wins: ${numOfUserWins} | Computer wins: ${numOfComputerWins} | Ties: ${numOfTies}`;
        } else if (numOfUserWins === numOfComputerWins) {
            winner.textContent = `It's a tie! You had ${numOfUserWins} wins and the computer had ${numOfComputerWins}.`
        } else if (numOfUserWins === 0 && numOfComputerWins == 0) {
            winner.textContent = `Nobody won the match! You had ${numOfUserWins} wins and the computer had ${numOfComputerWins}, but there were ${numOfTies} ties!`;
        } 
        
        let resetGameBttn = document.createElement('button');
        resetGameBttn.textContent = 'Play again';
        winnerDiv.appendChild(resetGameBttn);
        resetGameBttn.addEventListener('click', resetGame);
    
    
        function resetGame () {
            winnerDiv.removeChild(resetGameBttn);
            winnerDiv.removeChild(winner);
            bttnContainer.style.display = 'block';
            resultsDiv.style.display = 'hide';
            scoreDiv.style.display = 'block';
            currentRound = 1;
            score.textContent = `Current round: ${currentRound} of ${numOfRounds}`;
            numOfRounds = 5;
            numOfUserWins = 0;
            numOfComputerWins = 0;
            numOfTies = 0;
        }
    }

  
}

game();




