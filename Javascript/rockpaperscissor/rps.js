let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound (playerSelection) {
    let computerSelection = getComputerChoice();
    let win_array = [[0, 2, 1], 
                     [1, 0, 2], 
                     [2, 1, 0]];

    let result = win_array[playerSelection][computerSelection];

    if (result == 0) {
        console.log("Draw! The player selected: " 
        + playerSelection 
        + ", the computer selected " 
        + computerSelection);
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    } else if (result == 1) {
        console.log("You won! The player selected: " 
        + playerSelection 
        + ", the computer selected " 
        + computerSelection);
        playerScore++;

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
        
    } else if (result == 2) {
        console.log("You lost! The player selected: " 
        + playerSelection 
        + ", the computer selected " 
        + computerSelection);
        computerScore++;

        if (computerScore == 5) {
            result += '<br><br>Computer won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result;
    return;

}

buttons.forEach(button => {button.addEventListener('click', function() {
        playRound(button.value)
    })
})

/* function winLoss(playerScore, computerScore) {

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
} */