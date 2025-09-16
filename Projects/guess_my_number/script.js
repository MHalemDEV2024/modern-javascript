/* Multiplayer Guess the Number Game
   --------------------------------------------
   Description:
   A browser-based number guessing game for 1 or more players. 
   - Players try to guess a secret number between 1 and 20.
   - Supports single-player and multiplayer turn-based modes.
   - Scores increase when a player wins.
   - Includes "Play Again" and "Restart" options.

   Author: Mohamed Saeed
   Date: 2025-09-16
*/

'use strict';

// ================================
// DOM References
// ================================
const setupDiv = document.getElementById('game-setup');
const numPlayersInput = document.getElementById('numPlayers');
const playerNamesDiv = document.getElementById('player-names');
const generateBtn = document.getElementById('generatePlayers');
const startBtn = document.getElementById('startBtn');

const gameDiv = document.getElementById('game-play');
const playersArea = document.getElementById('players-area');
const turnIndicator = document.querySelector('.turn-indicator');

const playAgainBtn = document.querySelector('.play-again');
const restartBtn = document.querySelector('.restart');
const numberEl = document.querySelector('.number');

// ================================
// Game State
// ================================
let secretNumber;
let players = [];
let currentPlayerIndex = 0;
let isSinglePlayer = false;

// ================================
// Helpers
// ================================

// Generate random number between 1 and 20
const genSecret = () => Math.trunc(Math.random() * 20) + 1;

// Update turn indicator and highlight active player
function updateTurn() {
  document
    .querySelectorAll('.player')
    .forEach((p, i) => p.classList.toggle('active', i === currentPlayerIndex));

  const playerName = players[currentPlayerIndex].name;
  turnIndicator.textContent = isSinglePlayer
    ? `🎯 ${playerName}, it's your turn`
    : `🎯 It's ${playerName}'s turn`;
}

// Render all players dynamically
function renderPlayers() {
  playersArea.innerHTML = players
    .map(
      (p, i) => `
      <section class="player" id="player-${i}">
        <h2>${p.name}</h2>
        <input type="number" class="guess guess${i}" placeholder="1 - 20" />
        <button class="btn check" data-index="${i}">Check!</button>
        <p class="message message${i}">Waiting...</p>
        <div class="scoreboard">
          💯 Score: <span class="score score${i}">${p.score}</span><br />
          🏆 Highscore: <span class="highscore highscore${i}">${p.highscore}</span>
        </div>
      </section>`
    )
    .join('');

  // Attach event listeners for each "Check!" button
  document
    .querySelectorAll('.check')
    .forEach(btn => btn.addEventListener('click', handleGuess));
}

// Reset and start a new game round
function initGame() {
  secretNumber = genSecret();
  numberEl.textContent = '?';
  document.body.style.backgroundColor = '#222';
  renderPlayers();
  updateTurn();
}

// ================================
// Gameplay Logic
// ================================
function handleGuess(e) {
  const idx = +e.target.dataset.index;
  if (!isSinglePlayer && idx !== currentPlayerIndex) return; // Restrict out-of-turn moves

  const guessInput = document.querySelector(`.guess${idx}`);
  const guess = +guessInput.value;

  const messageEl = document.querySelector(`.message${idx}`);
  if (!guess) {
    messageEl.textContent = '⛔ Enter a number!';
    return;
  }

  if (guess === secretNumber) {
    // Winning state
    turnIndicator.textContent = `🏆 ${players[idx].name} is the Winner!`;
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    // Disable inputs and buttons
    document
      .querySelectorAll('.guess, .check')
      .forEach(el => (el.disabled = true));

    // Update score
    players[idx].score++;
    document.querySelector(`.score${idx}`).textContent = players[idx].score;
  } else {
    // Hint message
    messageEl.textContent =
      guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';

    // Switch turn in multiplayer
    if (!isSinglePlayer) {
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      updateTurn();
    }
  }

  guessInput.value = '';
  guessInput.focus();
}

// ================================
// Setup Flow
// ================================
generateBtn.addEventListener('click', () => {
  const num = +numPlayersInput.value;

  // Generate player name input fields
  playerNamesDiv.innerHTML = Array.from({ length: num }, (_, i) => {
    return `<input type="text" id="player${
      i + 1
    }-name" placeholder="Enter Player ${i + 1} name" />`;
  }).join('');

  // Hide setup texts + number input + button
  document.querySelector('#game-setup h2').classList.add('hidden');
  document.querySelector('label[for="numPlayers"]').classList.add('hidden');
  numPlayersInput.classList.add('hidden');
  generateBtn.classList.add('hidden');

  // If you have "Enter a number between 1 and 6" as <p>, hide it too
  const helper = document.querySelector('#game-setup p');
  if (helper) helper.classList.add('hidden');

  // Show Start Game button
  startBtn.classList.remove('hidden');

  // Focus on first name field
  document.getElementById('player1-name').focus();
});
// ================================
// Start Game (after setup)
// ================================
startBtn.addEventListener('click', () => {
  const num = +numPlayersInput.value;
  isSinglePlayer = num === 1;

  // Build players array from entered names (or fallback to Player X)
  players = Array.from({ length: num }, (_, i) => ({
    name:
      document.getElementById(`player${i + 1}-name`).value.trim() ||
      `Player ${i + 1}`,
    score: 0,
    highscore: 0,
  }));

  // Remove setup section completely (clean UI, no scroll issues)
  setupDiv.remove();

  // Show game section and initialize
  gameDiv.classList.remove('hidden');
  initGame();

  // Ensure page is scrolled to top for consistent UX
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================================
// Control Buttons
// ================================
playAgainBtn.addEventListener('click', () => {
  currentPlayerIndex = 0; // Reset turn order
  initGame();
});

restartBtn.addEventListener('click', () => window.location.reload());
