let humanScore = 0;
let computerScore = 0;
let reasonForOutcome;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
        return "rock";
    }else if(randomNumber == 2){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter either rock, paper, or scissors", "invalid");
    //fix the bug that happens here when the player inputs nothing (null)
    let lowerCaseChoice = choice.toLowerCase(); 

    if(lowerCaseChoice === "rock" || 
        lowerCaseChoice === "paper" || 
        lowerCaseChoice === "scissors"){
        return lowerCaseChoice;
    }
    //what should I return when the user enters nothing?
    return choice;
}

function playerIsWinner(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ){
        return true;
    }
    return false;
}

function determineRoundWinner(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        reasonForOutcome = "You both made the same choice.";
        return "You tied this round!"
    }else if(playerIsWinner(humanChoice, computerChoice)){
        reasonForOutcome = humanChoice + " beats " + computerChoice + ".";
        humanScore++;
        return "You won this round!";
    }
    reasonForOutcome = computerChoice + " beats " + humanChoice + ".";
    computerScore++;
    return "You lose this round!";
}

function playRound(humanChoice, computerChoice){
    const outcome = determineRoundWinner(humanChoice, computerChoice);
    const displayContainer = document.querySelector("#result");
    const scoreContainer = document.querySelector("#score");
    const winnerContainer = document.querySelector("#game-winner");

    if(humanScore === 5){
        displayContainer.textContent = "";
        winnerContainer.textContent = "You won the game!";
    }else if(computerScore === 5){
        displayContainer.textContent = "";
        winnerContainer.textContent = "The computer has won the game!";
    }else {
        displayContainer.textContent = outcome + " " + reasonForOutcome;
    }
    scoreContainer.textContent = "player's score: " + humanScore + " computer's score: " + computerScore;
}

function determineGameWinner(humanScore, computerScore){
    if(humanScore > computerScore){
        return "You have won the entire game!";
    }else if(humanScore < computerScore){
        return "The computer has won the entire game!";
    }
    return "No one won; You & the computer both have the same score.";
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});
