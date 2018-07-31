//  Write a guessing game where the user has to guess a secret number. 
// After every guess the program tells the user whether their number was too large or too small. 
// At the end the number of tries needed should be printed. 
// I counts only as one try if they input the same number multiple times consecutively.

function guessingGame() {
    let count = 0;
    let guessedNumbers = [];  // holds numbers guessed by user to check if already guessed
    let secretNumber = Math.floor((Math.random() * 10) + 1); // create random number between 1 - 10
    let guess = Number(prompt("Try to guess the secret number. Choose a number between 1 and 10"));
    while (guess !== secretNumber) {
        if (guessedNumbers.indexOf(guess) === -1) {
            count++;
            guessedNumbers.push(guess);
        }
        if (guess > secretNumber) {
            guess = Number(prompt("Too high! Try again. Choose a number between 1 and 10"));
        } else {
            guess = Number(prompt("Too low! Try again. Choose a number between 1 and 10"));
        }
    }
    alert(`You got it! You took this many guesses: ${count}`);
}