console.log("Hello World");

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    // console.log(number);
    let choice;
    if (number == 1) {
        choice = 'rock';
    } else if (number == 2) {
        choice = 'paper';
    } else if (number == 3) {
        choice = 'scissors';
    }
    console.log(choice);
    return choice;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose either 'rock' or 'paper' or 'scissors'");
    choice = choice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return choice;
    } else {
        alert("Not one of the choices");
        return getHumanChoice();
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
            return true;
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return false;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let computerSelection = '';
    let humanSelection = '';

    let result = 0;

    for (i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();

        result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result == true) {
            humanScore++;
        } else if (result == false){
            computerScore++;
        }

        console.log(`Player score is ${humanScore}`);
        console.log(`PC score is ${computerScore}`);
        
        // if (humanScore == 5) {
        //     console.log("Player wins!");
        // } else if (computerScore == 5) {
        //     console.log("PC wins!");
        // } else {
        //     console.log("Neither wins.")
        // }
    }

    if (humanScore > computerScore) {
        console.log("Player wins!");
    } else if (humanScore < computerScore) {
        console.log("PC wins!");
    } else if (humanScore == computerScore) {
        console.log("Neither wins.")
    }
}

playGame();
