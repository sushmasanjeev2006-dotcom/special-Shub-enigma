/* ========== COIN GAME ========== */

let score = 0;
let activeInterval;

const gameArea = document.getElementById("game-area");
if (gameArea) {
    document.getElementById("start-btn").onclick = startGame;
}

function startGame() {
    score = 0;
    document.getElementById("score").innerText = score;

    activeInterval = setInterval(spawnCoin, 700);

    setTimeout(() => {
        clearInterval(activeInterval);
        window.location.href = "stage-2.html";
    }, 15000);
}

function spawnCoin() {
    const coin = document.createElement("div");
    coin.className = "coin";
    coin.innerText = "🪙";
    coin.style.left = Math.random() * 80 + "%";
    coin.style.top = "-20px";

    coin.onclick = () => {
        score++;
        document.getElementById("score").innerText = score;
        coin.remove();
    };

    gameArea.appendChild(coin);

    setTimeout(() => coin.remove(), 3000);
}

/* ========== TASK SWITCHING ========== */

let taskIndex = 0;
function nextTask() {
    const tasks = document.querySelectorAll(".task-card");
    tasks[taskIndex].classList.add("hidden");
    taskIndex++;
    tasks[taskIndex].classList.remove("hidden");
}

function finishTasks() {
    window.location.href = "tictactoe.html";
}

/* ========== TIC TAC TOE ========== */

let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let ai = "O";

const boardContainer = document.getElementById("board");
if (boardContainer) initBoard();

function initBoard() {
    boardContainer.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.onclick = () => playerMove(i, cell);
        boardContainer.appendChild(cell);
    }
}

function playerMove(index, cell) {
    if (board[index] !== "") return;

    board[index] = player;
    cell.innerText = "X";

    setTimeout(aiMove, 300);
}

function aiMove() {
    let empty = board.map((v, i) => (v === "" ? i : null)).filter(v => v !== null);
    let choice = empty[Math.floor(Math.random() * empty.length)];

    board[choice] = ai;
    boardContainer.children[choice].innerText = "O";
}

function restartTicTacToe() {
    board = ["","","","","","","","",""];
    initBoard();
}

function goToCertificate() {
    window.location.href = "certificate.html";
}

/* ========== FINAL PAGE ========== */

function goToWarning() {
    window.location.href = "warning.html";
}
