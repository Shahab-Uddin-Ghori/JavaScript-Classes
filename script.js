const inputElement = document.getElementById('input');
const checkButton = document.getElementById('check');
const messageElement = document.getElementById('massage');

function checkNumber(event) {
    event.preventDefault(); 

    const userInput = parseInt(inputElement.value);

    const secretNumber = Math.floor(Math.random() * 10);

    if (userInput == secretNumber) {
        messageElement.textContent = "Congratulations! You guessed the secret number!";
    } else if (Math.abs(userInput - secretNumber) <= 1) {
        messageElement.textContent = "So close! But the secret number was: " + secretNumber;
    } else {
        messageElement.textContent = "Wrong guess! The secret number was: " + secretNumber;
    }
}

document.getElementById('inputBox').addEventListener('submit', checkNumber);

