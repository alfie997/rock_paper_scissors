console.log("Hello World");

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    let choice;
    if (number == 0) {
        choice = "rock";
    } else if (number == 1) {
        choice = "paper";
    } else if (number == 2) {
        choice = "scissors";
    }
    return choice;
}

console.log(getComputerChoice());