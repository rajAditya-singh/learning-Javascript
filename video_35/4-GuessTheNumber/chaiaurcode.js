// console.log(Math.floor(Math.random()*100+1));
let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gussesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevguess = [] 
let numGuss = 1

let playGame = true;
if (playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value); 
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a number more than 1')
    } else if(guess>100){
        alert('Please enter a number less than 100')
    } else{
        prevguess.push(guess);
        if (numGuss === 11) {
            displayguess(guess)
            displayMessage(`Game Over. Random number = ${randomNumber}`)
            endGame();
        } else{
            displayguess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it Right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`) 
    }
}

function displayguess(guess) {
    userInput.value = ''
    gussesSlot.innerHTML += `${guess} `
    numGuss++;
    remaining.innerHTML = `${11 - numGuss}`
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
 userInput.value = ''
 userInput.setAttribute('disabled', '')
 p.classList.add('button');
 p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
 startOver.appendChild(p)   
 playGame = false;
 newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')  
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random()*100+1)
        prevguess = []
        numGuss = 1;
        gussesSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuss}` 
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}