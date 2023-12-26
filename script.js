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

function cleanup() {
    mainContainer.innerHTML = '';
}

function playRound(computerChoice, playerChoice) {

    if ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        return ERROR_STATEMENT;
    }

    let event = (`Computer chose ${computerChoice} and Player chose ${playerChoice}...  `);

    if (computerChoice === playerChoice) {
        cleanup();
        return event + TIE_STATEMENT;
    }
    else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
        round++;
        computerPoints++;
        cleanup();
        return event + COMPUTER_WIN_STATEMENT;
    }
    else if ((computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissors") || (computerChoice === "scissors" && playerChoice === "rock")) {
        round++;
        playerPoints++;
        cleanup();
        return event + PLAYER_WIN_STATEMENT;
    }
}

function checkForWinner() {
    if (playerPoints > MAX_ROUNDS / 2) {
        cleanup();
        const playerWin = document.createElement('h1');
        playerWin.textContent = 'THE PLAYER HAS WON THE GAME!!!!';
        playerWin.className = 'winner';
        mainContainer.appendChild(playerWin);
        return;
    }

    if (computerPoints > MAX_ROUNDS / 2) {
        cleanup();
        const computerWin = document.createElement('h1');
        computerWin.textContent = 'THE COMPUTER HAS WON THE GAME!!!!';
        computerWin.className = 'winner';
        mainContainer.appendChild(computerWin);
        return;
    }
}

/*function game() {
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
*/

function buildWelcome() {
    const welcome = document.createElement('h1');
    welcome.className = 'welcome';
    welcome.textContent = 'Welcome to Rock, Paper, Scissors.';
    mainContainer.appendChild(welcome);

    const instruction = document.createElement ('h1');
    instruction.className = 'instruction';
    instruction.textContent = "To begin, click on the button below.";
    mainContainer.appendChild(instruction);

    const startButton = document.createElement('button');
    startButton.className = 'start-btn';
    startButton.textContent = 'Click to Play';
    startButton.addEventListener('click', () => {
        cleanup();
        buildGame();
    });
    mainContainer.appendChild(startButton);
}

function buildGame() {

    checkForWinner();
    
    const topContainer = document.createElement('div');
    topContainer.className = 'top';
    mainContainer.appendChild(topContainer);

        const roundDiv = document.createElement('div');
        roundDiv.className = 'round-container'
        topContainer.appendChild(roundDiv);

        const roundDisplay = document.createElement('h2');
        roundDisplay.className = 'round-display';
        roundDisplay.textContent = `Round ${round}`;
        roundDiv.appendChild(roundDisplay);

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

        const statusDiv = document.createElement('div');
        statusDiv.className = 'status-container';
        mainContainer.appendChild(statusDiv);

            const gameStatus = document.createElement('h1');
            gameStatus.className = 'status';
            gameStatus.textContent = "Waiting for Player to choose...";
            statusDiv.appendChild(gameStatus);

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom';
    mainContainer.appendChild(bottomContainer);

        const decisionDiv = document.createElement('div');
        decisionDiv.className = 'decision-container';
        bottomContainer.appendChild(decisionDiv);

            const decisionPrompt = document.createElement('h1');
            decisionPrompt.textContent = 'Click below your choice of Rock, Paper, or Scissors:';
            decisionDiv.appendChild(decisionPrompt);

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'button-container';
        bottomContainer.appendChild(buttonDiv);

            const rockButton = document.createElement('button');
            rockButton.className = 'rock-btn';
            rockButton.addEventListener('click', () => {
                gameStatus.textContent = (playRound(getComputerChoice(), 'rock'));
                setTimeout(buildGame(), 2500);
            });
            buttonDiv.appendChild(rockButton);

                const rockImage = document.createElement('img');
                rockImage.src = './rock.jpg';
                rockButton.appendChild(rockImage);

            const paperButton = document.createElement('button');
            paperButton.className = 'paper-btn';
            paperButton.addEventListener('click', () => {
                gameStatus.textContent = (playRound(getComputerChoice(), 'paper'));
                setTimeout(buildGame(), 2500);
            });
            buttonDiv.appendChild(paperButton);

                const paperImage = document.createElement('img');
                paperImage.src = './paper.jpg';
                paperButton.appendChild(paperImage);

            const scissorsButton = document.createElement('button');
            scissorsButton.className = 'scissors-btn';
            scissorsButton.addEventListener('click', () => {
                gameStatus.textContent = (playRound(getComputerChoice(), 'scissors'));
                setTimeout(buildGame(), 2500);
            });
            buttonDiv.appendChild(scissorsButton);

                const scissorsImage = document.createElement('img');
                scissorsImage.src = './scissors.jpg';
                scissorsButton.appendChild(scissorsImage);
}
    // Executable
buildWelcome();