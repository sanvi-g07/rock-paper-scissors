let humanScore = 0;
let computerScore = 0;

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
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(humanSelection);

playRound(humanSelection, computerSelection); 
console.log(computerScore);
console.log(humanScore);