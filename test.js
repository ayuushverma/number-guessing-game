let number = parseInt(Math.random() * 100 + 1);
let submit = document.querySelector('.submit');
let input = document.querySelector('.input');
let guessSlot = document.querySelector('.guess-array');
let remaining = document.querySelector('.remaining-guess');
let loOrHi = document.querySelector('.loOrHi');
let startOver = document.querySelector('.startOver');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a value greater than 1");
    } else if (guess > 100) {
        alert("Please enter a value smaller than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${number}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {

    if (guess === number) {
        displayMessage(`You Guessed it RIGHT`);
        endGame();
    } else if (guess > number) {
        displayMessage(`The Guess is HIGH`);
    } else if (guess < number) {
        displayMessage(`There Guess is SMALL`);
    }
}

function displayGuess(guess) {
    //clean up for new game
    input.value = "";
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    loOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    input.disabled = true;
    let newGameButton = document.createElement('button');
    newGameButton.classList.add('button');
    newGameButton.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(newGameButton);
    playGame = false;
    newGameButton.addEventListener('click', newGame);
}

function newGame() {
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    playGame = true;
    guessSlot.innerHTML = "";
    remaining.innerHTML = "10";
    loOrHi.innerHTML = "";
    input.value = "";
    input.disabled = false;
    startOver.innerHTML = "";
}
