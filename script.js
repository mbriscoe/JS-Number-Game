// Get the DOM elements and initialize the game
const inputElement = document.querySelector('input');
const messageElement = document.querySelector('.message');
const checkButton = document.querySelector('button');
const remainingGuesses = document.querySelector('.guesses-left');

// Set the focus on input field
inputElement.focus();

// gcreate a random number
let randomNumber = Math.floor(Math.random() * 100);

// set number of guesses left
let guessesLeft = 10;

// Listen for the click event on the check button
checkButton.addEventListener('click', buttonClicked);

// process the button clicked event
function buttonClicked() {
    // if replay reload page
    if (checkButton.textContent === 'Replay') {
        window.location.reload();
    }
    // Decrement the chance variable on every click
    guessesLeft--;

    // Get the value from the input field
    let inputValue = inputElement.value;

    // Check if the input value is equal to the random number
    if (inputValue === randomNumber) {
        // Update guessed number, disable input, check button text and color.
        messageElement.textContent = `Congratulations - ${inputValue} is correct!`;
        inputElement.disabled = true;
        messageElement.style.fontWeight = 'bold';
        checkButton.textContent = 'Replay';
        messageElement.style.color = 'green';

        //Check if input value is > random number and within 1-99 range.
    } else if (inputValue > randomNumber && inputValue < 100) {
        // Update the guess text and remaining chances
        messageElement.textContent = 'Your guess is high';
        remainingGuesses.textContent = guessesLeft;
        messageElement.style.color = '#333';

        //Check if input value is < random number and within 1-99 range.
    } else if (inputValue < randomNumber && inputValue > 0) {
        // Update the guessed number text and remaining chances
        messageElement.textContent = 'Your guess is low';
        remainingGuesses.textContent = guessesLeft;
        messageElement.style.color = '#333';

        // If the input value is not within the range of 1 to 99
    } else {
        console.log(inputValue);

        // Update the guessed number text, color and remaining chances
        messageElement.textContent = 'Your number is invalid';
        remainingGuesses.textContent = guessesLeft;
        messageElement.style.color = '#DE0611';
    }

    // Check if the chance is zero
    if (guessesLeft === 0) {
        //Update check button, disable input, and clear input value.
        // Update guessed number text and color to indicate user loss.
        checkButton.textContent = 'Replay';
        inputElement.disabled = true;
        inputValue = '';
        messageElement.textContent = 'You lost the game';
        messageElement.style.color = '#DE0611';
    }

    // game over reload the page
    if (guessesLeft < 0) {
        window.location.reload();
    }
    // Set the focus on input field
    inputElement.focus();
    inputElement.value = '';
}
