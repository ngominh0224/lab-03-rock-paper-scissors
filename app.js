// import functions and grab DOM elements
import { getRandomThrow, checkResults } from './utils.js';

const button = document.querySelector('#guess-button');
const resetButton = document.getElementById('reset-button');
const current = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const draws = document.querySelector('#draws');
const resets = document.querySelector('#resets');
const total = document.querySelector('#total');

// initialize state
let winsData = 0;
let drawsData = 0;
let lossesData = 0;
let totalGuesses = 0;
let resetCount = 0;

button.addEventListener('click', () => {
    totalGuesses++;

    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;


    const computerThrow = getRandomThrow();

    const getResult = checkResults(userGuess, computerThrow);


    if (getResult === 'draw') {
        drawsData++;
        current.textContent = 'You got a draw';
    } else if (getResult === 'win') {
        winsData++;
        current.textContent = 'YOU WON';
    } else if (getResult === 'lose') {
        lossesData++;
        current.textContent = 'YOU LOST';
    }

    total.textContent = 'total: ' + totalGuesses;
    wins.textContent = 'wins: ' + winsData;
    losses.textContent = 'losses: ' + lossesData;
    draws.textContent = 'draws: ' + drawsData;
});

const resetTheGame = () => {
    const doReset = window.confirm('Would you like to play again?');

    if (doReset === true) {

        resetCount++;

        resets.textContent = 'resets: ' + resetCount++;
        renderResults();
    } else {
        return false;
    }
};
resetButton.addEventListener('click', resetTheGame);
function renderResults() {
    let winsData = 0;
    let drawsData = 0;
    let lossesData = 0;
    let totalGuesses = 0;
    total.textContent = 'total plays: ' + totalGuesses;
    wins.textContent = 'wins: ' + winsData;
    losses.textContent = 'losses: ' + lossesData;
    draws.textContent = 'draws: ' + drawsData;
}