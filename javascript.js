// Return a random choice from an array of 3 strings
// Generate a random number between 0-2
// Use array index to select 1 of the strings and return it

// Name user buttons to add event listeners
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

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
        console.log("Congratulations. The computer says to say you're a chump.");
    } else if (playerCorrected === "rock" && computerSelection === "paper") {
        console.log("Heh heh heh. The computer wraps its crinkley paper crunch around your weak, stoney frame...");
    } else if (playerCorrected === "rock" && computerSelection === "rock") {
        console.log('The computer says "I picked rock!!! STOP COPYING ME!!!"');
    } else if (playerCorrected === "scissors" && computerSelection === "paper") {
        console.log("You won. That's pretty neat. Maybe you should think about the ways a computer could hurt you. If it got mad...");
    } else if (playerCorrected === "scissors" && computerSelection === "rock") {
        return "I bring my rock smashing down on top of your scissors. Oops, is your hand bleeding? Maybe don't bring scissors to a rock fight next time?"
    } else if (playerCorrected === "scissors" && computerSelection === "scissors") {
        return "We both picked scissors. If I were human, I would have quickly cut off your hands with my scissors and won the game."
    } else if (playerCorrected === "paper" && computerSelection === "rock") {
        return "Your paper wrapped around my rock, so you won. Enjoy your paper covered rocks. I'm a computer so I'm going to play a video game donkey."
    } else if (playerCorrected === "paper" && computerSelection === "scissors") {
        return "You'll never know the sweet pleasure my scissors felt slicing through your puny paper. I cut it into a million tiny pieces...";
    } else if (playerCorrected === "paper" && computerSelection === "paper") {
        return "We both have a piece of paper. Were you expecting to fight or something? Were you going to draw a picture of a weapon?"
    } else {
        return "This game is called Rock, Paper, Scissors. Maybe you should find someone smart enough to type in one of those 3 words."
    }
}

function testRock () {
    let testString = this.dataset.button;
    if (testString === "rock") {
        console.log(true);
    } else {
        console.log(false);
    }
}
/* 
function testPaper () {
    console.log("Hello Paper");
}

function testScissors () {
    console.log("Hello Scissors");
} */
// Add event listeners to user buttons
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
