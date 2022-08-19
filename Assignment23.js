//Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//The user should have 5 chance to guess the number.

const num = Math.round(Math.random() * 100);
let guess;
let guesses = 0;
while (guess !== num && guesses < 5) {
    guess = prompt("Guess The Number (0-100)");
    if (!isNaN(parseInt(guess)) && parseInt(guess) < num) {
        guesses++;
        window.alert(`Too Low! You have ${5 - guesses} guesses remaining.`);
    } else if (!isNaN(parseInt(guess)) && parseInt(guess) > num) {
        guesses++;
        window.alert(`Too High! You have ${5 - guesses} guesses remaining.`);
    } else if (!isNaN(parseInt(guess)) && parseInt(guess) === num) {
        window.alert(`You got it!!! You won in ${guesses} guess(es)`);
        break;
    } else {
        guesses++;
        window.alert(`Invalid! You have ${5 - guesses} guesses remaining.`);
    }
}
if (guesses == 5) {
    window.alert(`You Lose! The number was ${num}`);
}
