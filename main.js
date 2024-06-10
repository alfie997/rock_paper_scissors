console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    console.log(number);
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
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose either 'rock' or 'paper' or 'scissors'");
    choice = choice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return choice;
    } else {
        alert("Not one of the choices")
    }
}
// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'paper') ||
        (humanChoice == 'scissors' && computerChoice == 'scissors')) {
            // console.log(`You picked ${humanChoice}`);
            // console.log(`PC picked ${computerChoice}`);
            console.log(`You both picked ${humanChoice}. It's a draw!`);
        } else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
                (humanChoice == 'paper' && computerChoice == 'rock') ||
                (humanChoice == 'scissors' && computerChoice == 'paper')) {
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
                (humanChoice == 'paper' && computerChoice == 'scissors') ||
                (humanChoice == 'scissors' && computerChoice == 'rock')) {
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);