// Return a random choice from an array of 3 strings
// Generate a random number between 0-2
// Use array index to select 1 of the strings and return it

let playerValue = 0;
let computerValue = 0;

// Name user buttons to add event listeners
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

function computerPlay() {
    let weapons = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    return weapons[number];
}

function playRound(playerCorrected, computerSelection) {
    playerCorrected = this.dataset.button;
    computerSelection = computerPlay();
    this.classList.add('userClick');
    if (playerCorrected === "rock" && computerSelection === "scissors") {
        playerValue += 1;
        computerValue -= 1;
    } else if (playerCorrected === "rock" && computerSelection === "paper") {
        playerValue -= 1;
        computerValue += 1;
    } else if (playerCorrected === "rock" && computerSelection === "rock") {
        playerValue += 0;
        computerValue -= 0;
    } else if (playerCorrected === "scissors" && computerSelection === "paper") {
        playerValue += 1;
        computerValue -= 1;
    } else if (playerCorrected === "scissors" && computerSelection === "rock") {
        playerValue -= 1;
        computerValue += 1;
    } else if (playerCorrected === "scissors" && computerSelection === "scissors") {
        playerValue += 0;
        computerValue -= 0;
    } else if (playerCorrected === "paper" && computerSelection === "rock") {
        playerValue += 1;
        computerValue -= 1;
    } else if (playerCorrected === "paper" && computerSelection === "scissors") {
        playerValue -= 1;
        computerValue += 1;
    } else if (playerCorrected === "paper" && computerSelection === "paper") {
        playerValue += 0;
        computerValue -= 0;
    }
    playerScore.textContent = `${playerValue}`;
    computerScore.textContent = `${computerValue}`;
    return (playerValue, computerValue);
}

// Add event listeners to user buttons
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
