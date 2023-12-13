    // Constant variables
const ERROR_STATEMENT = "Invalid selection. Choose Rock, Paper, or Scissors";
const TIE_STATEMENT = "Round is a tie! No points awarded.";
const COMPUTER_WIN_STATEMENT = "Computer wins this round!"
const PLAYER_WIN_STATEMENT = "Player wins this round!";
const MAX_ROUNDS = 5;

    // Functions
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
    }
}

function playRound(computerChoice, playerChoice) {

    if ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        return ERROR_STATEMENT;
    }

    console.log(`Computer chose ${computerChoice} and Player chose ${playerChoice}`);

    if (computerChoice === playerChoice) {
        return TIE_STATEMENT;
    }
    else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
        return COMPUTER_WIN_STATEMENT;
    }
    else if ((computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissors") || (computerChoice === "scissors" && playerChoice === "rock")) {
        return PLAYER_WIN_STATEMENT;
    }
}

function game() {

    let playerPoints = 0;
    let computerPoints = 0;

    for (i = 1; i <= MAX_ROUNDS; i++) {

        if (playerPoints === 3) {
            return "PLAYER WINS!"
        }
        if (computerPoints === 3) {
            return "COMPUTER WINS!"
        }

        console.log(`Round: ${i}`);
    
        let roundResult = playRound(getComputerChoice(), getPlayerChoice());

        if (roundResult === ERROR_STATEMENT || roundResult === TIE_STATEMENT) {
            console.log(roundResult);
            i--;
        }

        if (roundResult === COMPUTER_WIN_STATEMENT) {
            console.log(roundResult);
            computerPoints++;
        }

        if (roundResult === PLAYER_WIN_STATEMENT) {
            console.log(roundResult);
            playerPoints++;
        }

    }
}

    // Executable
console.log(game());