console.log("Hello World");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

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
    console.log(`Round ${round}`);

    if ((humanChoice == 'rock' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'paper') ||
        (humanChoice == 'scissors' && computerChoice == 'scissors')) {
            console.log(`You both picked ${humanChoice}. It's a draw!`);

    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;

    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
    }
    console.log(`Player score ${humanScore}`);
    console.log(`PC score ${computerScore}`);
    round++;

    if (round == 6) {
        if (humanScore > computerScore) {
            console.log("Player wins!");
        } else if (humanScore < computerScore) {
            console.log("PC wins!");
        } else if (humanScore == computerScore) {
            console.log("Neither wins.")
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
