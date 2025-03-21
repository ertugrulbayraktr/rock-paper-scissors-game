// ROCK, PAPER, SCISSORS
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if(playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    
    playerDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
    
    // Update classes for styling
    resultDisplay.className = "";
    if(result === "YOU WIN!") {
        resultDisplay.classList.add("win");
        playerScore++;
    } else if(result === "YOU LOSE!") {
        resultDisplay.classList.add("lose");
        computerScore++;
    } else {
        resultDisplay.classList.add("tie");
    }
    
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Add event listeners to each choice
document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
});