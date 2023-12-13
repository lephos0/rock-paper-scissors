let playerPoints = 0;
let computerPoints = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors:");
    playerChoice = playerChoice.toLowerCase();
    switch(playerChoice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            alert("You must choose Rock, Paper, or Scissors!");
            playRound();
    }
}

function playRound(computerChoice, playerChoice) {
    let computer = getComputerChoice();
    let player = getPlayerChoice();
    console.log(`Computer chose ${computer} and Player chose ${player}`);

    if (computer === player) {
        return "Round is a tie! No points awarded.";
    }
    else if ((computer === "rock" && player === "scissors") || (computer === "paper" && player === "rock") || (computer === "scissors" && player === "paper")) {
        return "Computer wins this round!";
    }
    else if ((computer === "rock" && player === "paper") || (computer === "paper" && player === "scissors") || (computer === "scissors" && player === "rock")) {
        return "Player wins this round!";
    }
}
