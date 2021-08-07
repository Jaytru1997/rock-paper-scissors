function computerPlay(){
    let options = ["", "Rock", "Paper", "Scissors"];
    let randomiser = Math.floor(Math.random() * 3 + 1);
    if (randomiser === 0){
        return options[randomiser+1];
    }
    else{
        return options[randomiser];
    }
}
//computerPlay();

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === computerSelection){
        return "Draw! There is a tie";
    }
    else{
        return "Invalid Selection";
    }
}

// const playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
// const computerSelection = computerPlay().toLowerCase();
// console.log(playRound(playerSelection,computerSelection));

/*
start each player at zero score
initiate a counter
loop for five times with the counter
if player wins increase player score
if computer wins increase computer score
if there is a tie don't increase anybody's score
*/
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    for (i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        const gameRound = playRound(playerSelection,computerSelection);
        if (gameRound === "You Win! Rock beats Scissors" || gameRound === "You Win! Paper beats Rock" || gameRound === "You Win! Scissors beats Paper"){
            alert(gameRound);
            playerScore += 1;
            computerScore = computerScore;
            roundCount += 1;
        }
        else if (gameRound === "You Lose! Paper beats Rock" || gameRound === "You Lose! Scissors beats Paper" || gameRound === "You Lose! Rock beats Scissors"){
            alert(gameRound);
            computerScore += 1;
            playerScore = playerScore;
            roundCount += 1;
        }
        else if (gameRound === "Draw! There is a tie"){
            alert(gameRound);
            playerScore = playerScore;
            computerScore = computerScore;
            roundCount += 1;
        }
        else if (gameRound === "Invalid Selection"){
            alert(gameRound);
            computerScore += 1;
            playerScore = playerScore;
            roundCount += 1;
        }
        
    }
    if (roundCount === 5 && playerScore > computerScore){
            return "Player Wins! with a total of " + playerScore + " points";
    }
    else if (roundCount === 5 && playerScore < computerScore){
            return "Computer Wins! with a total of " + computerScore + " points";
    }
    else if (roundCount === 5 && playerScore === computerScore){
            return "It's a tie!";
    }
    else{
            return "there is an error" + roundCount;
    }
}

console.log(game());