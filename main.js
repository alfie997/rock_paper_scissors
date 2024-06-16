
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const results = document.querySelector(".results");


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (number == 1) {
        choice = 'rock';
    } else if (number == 2) {
        choice = 'paper';
    } else if (number == 3) {
        choice = 'scissors';
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

let round = 1;

function playRound(humanChoice, computerChoice) {
    const game = document.createElement("p");
    const score = document.createElement("p");
    const result = document.createElement("p");

    if ((humanChoice == 'rock' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'paper') ||
        (humanChoice == 'scissors' && computerChoice == 'scissors')) {
            game.textContent = `You both picked ${humanChoice}. It's a draw!`;
            results.appendChild(game);

    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            game.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            results.appendChild(game);
            humanScore++;

    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')) {
            game.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            results.appendChild(game);
            computerScore++;
    }
    score.innerText = `Player score ${humanScore}
                        PC score ${computerScore}`;
    results.appendChild(score);

    round++;

    if (round == 6) {
        if (humanScore > computerScore) {
            result.textContent = "Player wins!";
            results.appendChild(result);
        } else if (humanScore < computerScore) {
            result.textContent = "PC wins!";
            results.appendChild(result);
        } else if (humanScore == computerScore) {
            result.textContent = "Neither wins.";
            results.appendChild(result);
        }
    }
}

rock.addEventListener("click", () => {
    if (round <= 5) playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    if (round <= 5) playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    if (round <= 5) playRound("scissors", getComputerChoice());
});
