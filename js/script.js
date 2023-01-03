{    // THIS IS A ROCK, PAPER, SCISSORS MATCH BETWEEN USER AND COMPUTER OPPONENT; ROUNDS WILL BE CHOSEN AT THE START

// create variables for computer wins, user wins, computer choice, user choice, and rounds
let compWins = 0; let userWins = 0; let compChoice; let userChoice; let rounds = 0;

// prompt user for number of rounds to play in match (must be an odd number)
while (rounds === 0) {
    rounds = prompt("How many rounds of Rock, Paper, Scissors would you like to play? (odd number only");
    if (rounds % 2 === 0) {
        alert ("Please enter an odd number only.");
        rounds = 0;
    }
}

for (i = 0; i <= rounds; i++) {
    // create while loop to ensure that choice 0 is not accepted
    let keepGoing = 0;
    while (keepGoing === 0) {
        keepGoing = Math.floor(Math.random() * 10);
        }

    // assign values to compChoice based on value of keepGoing
    if (1 <= keepGoing && keepGoing <= 3) {compChoice = "rock";}
    else if (4 <= keepGoing && keepGoing <= 6) {compChoice = "paper"}
    else if (7 <= keepGoing && keepGoing <= 9) {compChoice = "scissors"}
    else {console.log("Error in compChoice");}

    console.log(compChoice);

    // message user asking which they would like to pick and assign input to userChoice
    while (userChoice === undefined) {
    userChoice = prompt("Please choose Rock, Paper, or Scissors.");

    // check user input for legality
    userChoice = userChoice.toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {userChoice = undefined;}
    }
    console.log("comp: " + compChoice + "user: " + userChoice);

    // determine winner or tie and award points
    switch (compChoice, userChoice) {
        case (compChoice === userChoice):
            alert("It's a tie! No points awarded.");
            break;
        case (compChoice === "rock" && userChoice === "paper"):
            userWins++;
            alert("Paper covers Rock! User wins!");
            break;
        case (compChoice === "rock" && userChoice === "scissors"):
            compWins++;
            alert("Rock breaks Scissors! Computer wins!")
            break;
        case (compChoice === "paper" && userChoice === "rock"):
            compWins++;
            alert("Paper covers Rock! Computer wins!")
            break;
        case (compChoice === "paper" && userChoice === "scissors"):
            userWins++;
            alert("Scissors cut Paper! User wins!");
            break;
        case (compChoice === "scissors" && userChoice === "rock"):
            userWins++;
            alert("Rock breaks Scissors! User wins!");
            break;
        case (compChoice === "scissors" && userChoice === "paper"):
            compWins++;
            alert("Scissors cut Paper! Computer wins!")
            break;
        }
        
    // check if there is a winner for the match
    if (compWins >= rounds / 2) {
        alert("COMPUTER HAS WON THE MATCH!!! HAHA!! BETTER LUCK NEXT TIME...");
        break;
}   
    if (userWins >= rounds / 2) {
        alert("WOW! THE PITIFUL HUMAN HAS WON THE MATCH! GOOD JOB, I GUESS...");
        break;
    }
    i++;
}
}

