let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 || computerScore < 5) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    winLoss(playerScore, computerScore);
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let playerChoice = prompt("Please, choose rock, paper or scissor: ");
    let playerChoiceNum;
    if (playerChoice == "scissor") {
        playerChoiceNum = 2;
    } else if (playerChoice == "paper") {
        playerChoiceNum = 1;
    } else {
        playerChoiceNum = 0;
    }

    return playerChoiceNum;
}

function playRound (playerSelection, computerSelection) {
    let win_array = [[0, 2, 1], 
                     [1, 0, 2], 
                     [2, 1, 0]];

    let result = win_array[playerSelection][computerSelection];
    console.log("result: " + result);

    if (result == 0) {
        console.log("Draw! The player selected: " 
        + playerSelection 
        + ", the computer selected " 
        + computerSelection);
    } else if (result == 1) {
        console.log("You won! The player selected: " 
        + playerSelection 
        + ", the computer selected " 
        + computerSelection);
        playerScore++;
    } else if (result == 2) {
        console.log("You lost! The player selected: " 
        + playerSelection 
        + ", the computer selected " 
        + computerSelection);
        computerScore++;
    }
}

function winLoss(playerScore, computerScore) {

    if (playerScore == 5) {
        console.log("You won!")
        playerScore = 0;
        computerScore = 0;
    }

    if (computerScore == 5) {
        console.log("You lost!")
        playerScore = 0;
        computerScore = 0;
    }
}