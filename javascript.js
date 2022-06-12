// Return a random choice from an array of 3 strings
// Generate a random number between 0-2
// Use array index to select 1 of the strings and return it

function computerPlay() {
    let weapons = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    return weapons[number];
}

function playGame(playerSelection, computerSelection) {

    let playerCorrected = playerSelection.toLowerCase();
    if (playerCorrected === "rock" && computerSelection === "scissors") {
        return "Congratulations. The computer says to say you're a chump."
    } else if (playerCorrected === "rock" && computerSelection === "paper") {
        return "Heh heh heh. The computer wraps its crinkley paper crunch around your weak, stoney frame..."
    } else if (playerCorrected === "rock" && computerSelection === "rock") {
        return 'The computer says "I picked rock!!! STOP COPYING ME!!!"'
    } else if (playerCorrected === "scissors" && computerSelection === "rock") {
        return "You won. That's pretty neat. Maybe you should think about the ways a computer could hurt you. If it got mad..."
    } else if (playerCorrected === "scissors" && computerSelection === "paper") {
        return "You'll never know the sweet pleasure my scissors felt slicing through your puny paper. I cut it into a million tiny pieces..."
    } else if (playerCorrected === "scissors" && computerSelection === "scissors") {
        return "We both picked scissors. If I were human, I would have quickly cut off your hands with my scissors and won the game."
    }
}