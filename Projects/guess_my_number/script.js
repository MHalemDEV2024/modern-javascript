'use strict';

// DOM references
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

let secretNumber;
let players = [];
let currentPlayerIndex = 0;
let isSinglePlayer = false; // ✅ نحدد لو اللعبة لاعب واحد

// ---------- Helpers ----------
function genSecret() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Render player sections dynamically
function renderPlayers() {
  playersArea.innerHTML = '';

  players.forEach((p, i) => {
    const section = document.createElement('section');
    section.classList.add('player');
    section.id = `player-${i}`;

    section.innerHTML = `
      <h2>${p.name}</h2>
      <input type="number" class="guess guess${i}" placeholder="1 - 20" />
      <button class="btn check" data-index="${i}">Check!</button>
      <p class="message message${i}">Waiting...</p>
      <div class="scoreboard">
        💯 Score: <span class="score score${i}">${p.score}</span><br />
        🏆 Highscore: <span class="highscore highscore${i}">${p.highscore}</span>
      </div>
    `;
    playersArea.appendChild(section);
  });

  // Add listeners to each Check button
  document.querySelectorAll('.check').forEach(btn => {
    btn.addEventListener('click', handleGuess);
  });
}

// Update the UI for whose turn it is
function updateTurn() {
  document.querySelectorAll('.player').forEach((p, i) => {
    p.classList.toggle('active', i === currentPlayerIndex);
  });

  if (isSinglePlayer) {
    turnIndicator.textContent = `🎯 ${players[0].name}, it's your turn`;
  } else {
    turnIndicator.textContent = `🎯 It's ${players[currentPlayerIndex].name}'s turn`;
  }
}

// Initialize / reset game
function initGame() {
  secretNumber = genSecret();
  numberEl.textContent = '?';
  document.body.style.backgroundColor = '#222';

  renderPlayers();
  updateTurn();
}

// Handle player guesses
function handleGuess(e) {
  const idx = Number(e.target.dataset.index);
  if (!isSinglePlayer && idx !== currentPlayerIndex) return; // ✅ بس اللاعب اللي دوره يلعب

  const guessInput = document.querySelector(`.guess${idx}`);
  const guess = Number(guessInput.value);

  if (!guess) {
    document.querySelector(`.message${idx}`).textContent = '⛔ Enter a number!';
    return;
  }

  if (guess === secretNumber) {
    // إعلان الفوز في المكان المخصص تحت الهيدر
    // ✅ رسالة الفوز بالاسم

    // ✨ كمان نوقف رسالة الدور ونخليها "Game Over"
    turnIndicator.textContent = `🏆 ${players[idx].name} is the Winner!`;

    document.body.style.backgroundColor = '#60b347';

    numberEl.textContent = secretNumber;
    // تعطيل الإدخال
    document.querySelectorAll('.guess').forEach(inp => (inp.disabled = true));
    document.querySelectorAll('.check').forEach(btn => (btn.disabled = true));

    // زيادة Score للفائز
    players[idx].score++;
    document.querySelector(`.score${idx}`).textContent = players[idx].score;
  } else {
    document.querySelector(`.message${idx}`).textContent =
      guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';

    // تبديل الدور لو أكتر من لاعب
    if (!isSinglePlayer) {
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      updateTurn();
    }
  }
  guessInput.value = '';
  guessInput.focus();
}

// ---------- Setup Flow ----------
generateBtn.addEventListener('click', () => {
  const num = +numPlayersInput.value;
  playerNamesDiv.innerHTML = '';

  for (let i = 1; i <= num; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `player${i}-name`;
    input.placeholder = `Enter Player ${i} name`;
    playerNamesDiv.appendChild(input);
  }

  startBtn.classList.remove('hidden');
});

startBtn.addEventListener('click', () => {
  const num = +numPlayersInput.value;
  players = [];

  isSinglePlayer = num === 1; // ✅ هنا نحدد إذا لاعب واحد

  for (let i = 1; i <= num; i++) {
    const name =
      document.getElementById(`player${i}-name`).value || `Player ${i}`;
    players.push({ name, score: 0, highscore: 0 });
  }

  setupDiv.classList.add('hidden');
  gameDiv.classList.remove('hidden');

  initGame();
});

// Play Again (same players)
playAgainBtn.addEventListener('click', () => {
  currentPlayerIndex = 0; // ✅ يرجع الدور لأول لاعب
  initGame();
});

// Restart (new setup)
restartBtn.addEventListener('click', () => window.location.reload());
