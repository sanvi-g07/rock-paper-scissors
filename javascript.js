let humanScore = 0;
let computerScore = 0;

const lastRoundResult = document.querySelector("#lastRoundResult");
const humanScoreLabel = document.querySelector("#human-score");
const computerScoreLabel = document.querySelector("#computer-score");
const playButton = document.querySelector("#play-button");

console.log(humanScoreLabel);
console.log(playButton);

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

    humanScoreLabel.textContent = humanScore;
    computerScoreLabel.textContent = computerScore;

    const humanAction = document.createElement("p");
    const computerAction = document.createElement("p");
    humanAction.textContent = "You played " + humanChoice;
    computerAction.textContent = "Computer played " + computerChoice;
    lastRoundResult.replaceChildren();
    lastRoundResult.appendChild(humanAction);
    lastRoundResult.appendChild(computerAction);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection); 
    }
}

//playGame();
playButton.addEventListener("click", () => {
    playRound(getHumanChoice(), getComputerChoice());
});

console.log(computerScore);
console.log(humanScore);