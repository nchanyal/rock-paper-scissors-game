let humanScore = 0;
let computerScore = 0;

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
    let choice = prompt("Choose either 'rock,' 'paper,' or 'scissors'", "");

    if(choice === "rock" || 
        choice === "paper" || 
        choice === "scissors"){
        return choice;
    }
    return "invalid";
}

console.log(getHumanChoice());