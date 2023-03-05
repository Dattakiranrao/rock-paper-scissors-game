// Rock Paper Scissors 🚀🔥

function getComputerChoice() {
    const c = ["Rock", "Paper", "Scissors"];
    cChoice = Math.floor(Math.random() * c.length);
    return (c[cChoice]);
}

function getResult(playerChoice, computerChoice) {
    let score;

    if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice == 'Paper')) {
        score = 1;
    }
    else if (playerChoice == computerChoice) {
        score = 0;
    }
    else {
        score = -1;
    }

    return score
}

function showResult(score, playerChoice, computerChoice) {
    let playerScore = document.getElementById("player-score");
    playerScore.innerText = `${Number(playerScore.innerText) + score}`

    result = document.getElementById("result")
    if (score == 1) {
        result.innerText = "You Win!";
    }
    else if (score == 0) {
        result.innerText = `It's a Draw!`;
    }
    else if (score == -1) {
        result.innerText = `You Lose!`;
    }

    hands = document.getElementById("hands");
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice();
    let score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}

function playGame() {

    const buttons = document.querySelectorAll('.rpsButton')

    buttons.forEach(button => {
        button.onclick = () => onClickRPS(button);
    })

    let endgame = document.getElementById('endGameButton');
    endgame.onclick = () => endGame()
}

function endGame() {
    let playerScore = document.getElementById("player-score");
    let result = document.getElementById("result");
    let hands = document.getElementById("hands");

    playerScore.innerHTML = " ";
    result.innerHTML = " ";
    hands.innerHTML = " ";
}

playGame()