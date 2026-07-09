let humanScore = 0;
let computerScore = 0;

const lastRoundResult = document.querySelector("#lastRoundResult");

const humanScoreLabel = document.querySelector("#human-score");
const computerScoreLabel = document.querySelector("#computer-score");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function getComputerChoice() {
    let randVal = Math.random();

    if(randVal < (1.0/3)) {
        return "rock"
    } else if (randVal < (2.0/3)) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ");
    return choice.toLowerCase(); 
}

function playRound(humanChoice, computerChoice) {
    // increment score of player that won
    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            computerScore++;
        } else if (computerChoice === "scissors") {
            humanScore++;
        }
    } else if (humanChoice === "scissors") {
        if(computerChoice === "rock") {
            computerScore++;
        } else if (computerChoice === "paper") {
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if(computerChoice === "rock") {
            humanScore++;
        } else if (computerChoice === "scissors") {
            computerScore++;
        }
    }

    // update score labels
    humanScoreLabel.textContent = humanScore;
    computerScoreLabel.textContent = computerScore;

    // display the move that user/computer made
    const humanAction = document.createElement("p");
    const computerAction = document.createElement("p");
    humanAction.textContent = "You played " + humanChoice;
    computerAction.textContent = "Computer played " + computerChoice;
    lastRoundResult.replaceChildren();
    lastRoundResult.appendChild(humanAction);
    lastRoundResult.appendChild(computerAction);

    // check if someone won
    if(humanScore == 5 || computerScore == 5) {
        const winnerMessage = document.createElement("h3");
        if(humanScore == 5) {
            winnerMessage.textContent = "You win!";
        } else {
            winnerMessage.textContent = "Computer wins!";
        }
        document.body.replaceChildren();
        document.body.appendChild(winnerMessage);
    } 
}

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});



