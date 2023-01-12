        // THIS IS A ROCK, PAPER, SCISSORS MATCH BETWEEN player AND COMPUTER OPPONENT; ROUNDS WILL BE CHOSEN AT THE START

    // create variables for computer wins, player wins, computer choice, player choice, and rounds
let compWins = 0; let playerWins = 0; let computerSelection; let playerSelection; let rounds = 0;

function playRound() {

    function getComputerChoice() {
            // create while loop to ensure that choice 0 is not accepted
        let keepGoing = 0;
        while (keepGoing === 0) {
            keepGoing = Math.floor(Math.random() * 10);
        }

            // assign values to computerSelection based on value of keepGoing
        if (1 <= keepGoing && keepGoing <= 3) {return "rock";}
        else if (4 <= keepGoing && keepGoing <= 6) {return "paper"}
        else if (7 <= keepGoing && keepGoing <= 9) {return "scissors"}
        else {console.log("Error in computerSelection");}
    }

    function getPlayerChoice() {
            // convert to lowercase and check player input for legality
        let legal = false;
        while (legal === false) {
        string = prompt("Please choose. Rock, Paper, or Scissors?")
        string = string.toLowerCase();
        if (string === "rock" || string === "paper" || string === "scissors") {legal = true; return string;}
        else {alert("Invalid Choice");}
        }
    }

        // assign variables for both players' choice
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    function getResult(comp, player) {
            if (comp === player) {
                return `Both players picked ${comp}! Tie!`; }
            else if (comp === "rock" && player === "paper") {
                playerWins++;
                return `Player picked ${player} and Computer picked ${comp}! Player wins!`; }
            else if (comp === "rock" && player === "scissors") {
                compWins++;
                return `Player picked ${player} and Computer picked ${comp}! Computer wins!`; }
            else if (comp === "paper" && player === "rock") {
                compWins++;
                return `Player picked ${player} and Computer picked ${comp}! Computer wins!`; }
            else if (comp === "paper" && player === "scissors") {
                playerWins++;
                return `Player picked ${player} and Computer picked ${comp}! Player wins!`; }
            else if (comp === "scissors" && player === "rock") {
                playerWins++;
                return `Player picked ${player} and Computer picked ${comp}! Player wins!`; }
            else if (comp === "scissors" && player === "paper") {
                compWins++;
                return `Player picked ${player} and Computer picked ${comp}! Computer wins!`; }
            else {return "getWinner error";}
    }

    let result = getResult(computerSelection, playerSelection);
    return result;
}

    // plays a number of rounds and returns results of each round.
function game(rounds = 5) {
    let winner;
    while ((playerWins < rounds / 2) && (compWins < rounds / 2)) {
    let thisRound = playRound();
    console.log(thisRound);
    }
    if (playerWins > rounds / 2) {winner = "Player";}
    else if (compWins > rounds / 2) {winner = "Computer";}
    console.log("The winner is: " + winner);
}

game();
