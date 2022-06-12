// Return a random choice from an array of 3 strings
// Generate a random number between 0-2
// Use array index to select 1 of the strings and return it

function computerPlay () {
    let weapons = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    return weapons[number];
}