    // Constant variables
const ERROR_STATEMENT = "Invalid selection. Choose Rock, Paper, or Scissors";
const TIE_STATEMENT = "Round is a tie! No points awarded.";
const COMPUTER_WIN_STATEMENT = "Computer wins this round!"
const PLAYER_WIN_STATEMENT = "Player wins this round!";
const MAX_ROUNDS = 9;
const mainContainer = document.querySelector('.main-container');

let playerPoints = 0;
let computerPoints = 0;
let round = 1;
let playerChoice;
let computerChoice;

    // Arrays to represent each screen
const welcomeArray = [

]

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
    for (i = 1; i <= MAX_ROUNDS; i++) {

        if (playerPoints === 3) {
            return "PLAYER WINS!"
        }
        if (computerPoints === 3) {
            return "COMPUTER WINS!"
        }
    
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

function buildWelcome() {
    const welcome = document.createElement('h1');
    welcome.className = 'welcome';
    welcome.textContent = "Welcome to Rock, Paper, Scissors. To begin, click on the button below.";
    mainContainer.appendChild(welcome);

    const startButton = document.createElement('button');
    startButton.className = 'start-btn';
    startButton.textContent = 'Click to Play';
    startButton.addEventListener('click', () => {
        mainContainer.removeChild(startButton);
        mainContainer.removeChild(welcome);
        buildGame();
    });
    mainContainer.appendChild(startButton);
}

function buildGame() {
    
    const topContainer = document.createElement('div');
    topContainer.className = 'top';
    mainContainer.appendChild(topContainer);

    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    topContainer.appendChild(scoreboard);

    const playerScore = document.createElement('h2');
    playerScore.className = 'player-score';
    playerScore.textContent = `Player Score: ${playerPoints}`;
    scoreboard.appendChild(playerScore);

    const computerScore = document.createElement('h2');
    computerScore.className = 'computer-score';
    computerScore.textContent = `Computer Score: ${computerPoints}`;
    scoreboard.appendChild(computerScore);

    const roundDisplay = document.createElement('h2');
    roundDisplay.textContent = `Round ${round}`;
    topContainer.appendChild(roundDisplay);

    const gameStatus = document.createElement('h1');
    gameStatus.textContent = "Waiting for Player to choose...";
    topContainer.appendChild(gameStatus);

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom';
    mainContainer.appendChild(bottomContainer);

    const decisionPrompt = document.createElement('h1');
    decisionPrompt.textContent = 'Click below your choice of Rock, Paper, or Scissors:';
    bottomContainer.appendChild(decisionPrompt);

    const rockButton = document.createElement('button');
    rockButton.className = 'rock-btn';
    rockButton.addEventListener('click', () => {
        console.log(playRound(getComputerChoice(), 'rock'));
    });
    bottomContainer.appendChild(rockButton);

    const rockImage = document.createElement('img');
    rockImage.src = './rock.jpg';
    rockButton.appendChild(rockImage);

    const paperButton = document.createElement('button');
    paperButton.className = 'paper-btn';
    paperButton.addEventListener('click', () => {
        console.log(playRound(getComputerChoice(), 'paper'));
    });
    bottomContainer.appendChild(paperButton);

    const paperImage = document.createElement('img');
    paperImage.src = './paper.jpg';
    paperButton.appendChild(paperImage);

    const scissorsButton = document.createElement('button');
    scissorsButton.className = 'scissors-btn';
    scissorsButton.addEventListener('click', () => {
        console.log(playRound(getComputerChoice(), 'scissors'));
    });
    bottomContainer.appendChild(scissorsButton);

    const scissorsImage = document.createElement('img');
    scissorsImage.src = './scissors.jpg';
    scissorsButton.appendChild(scissorsImage);
}
    // Executable
buildWelcome();