'use strict';

// -------------------------DOM ELEMENTS------------------------- //
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const name0 = document.querySelector('#name--0');
const name1 = document.querySelector('#name--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNew2 = document.querySelector('.new-btn2');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// --------------------------DOM ELEMENTS---------------------------//

// --------------------------FUNCTIONS---------------------------- //
function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function showDice(randomNumber) {
  dice.setAttribute('src', 'dice-' + randomNumber + '.png');
  dice.classList.remove('hidden');
}

function switchPlayer() {
  currentScoreNum = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
// --------------------------FUNCTIONS---------------------------- //

//-------------------------VARIABLES---------------------------- //
let scores = [0, 0];
let currentScoreNum = 0;
let activePlayer = 0;
//-------------------------VARIABLES---------------------------- //

// Start condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randNum = randomNumber();
  showDice(randNum);

  if (randNum !== 1) {
    currentScoreNum += randNum;
    document.getElementById(`current--${activePlayer}`).textContent = currentScoreNum;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScoreNum;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  dice.classList.add('hidden');

  if (scores[activePlayer] >= 10) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`.current${activePlayer}`).style.display = 'none';
    document.querySelector('.winner-text').style.display = 'block';
    document.querySelector('.winner-text').textContent = `Player ${activePlayer + 1} wins`;
    btnRoll.style.display = 'none';
    btnHold.style.display = 'none';
    btnNew.style.display = 'none';
    document.querySelector('.new-btn2').style.display = 'block';
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  scores = [0, 0];
  currentScoreNum = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`.current${activePlayer}`).style.display = 'block';
  document.querySelector('.winner-text').style.display = 'none';
  btnRoll.style.display = 'block';
  btnHold.style.display = 'block';
  btnNew.style.display = 'block';
  document.querySelector('.new-btn2').style.display = 'none';

  activePlayer = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});

btnNew2.addEventListener('click', function () {
  scores = [0, 0];
  currentScoreNum = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`.current${activePlayer}`).style.display = 'block';
  document.querySelector('.winner-text').style.display = 'none';
  btnRoll.style.display = 'block';
  btnHold.style.display = 'block';
  btnNew.style.display = 'block';
  document.querySelector('.new-btn2').style.display = 'none';

  activePlayer = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});
