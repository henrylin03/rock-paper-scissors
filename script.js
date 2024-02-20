function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    const choice = choicesArray[randomIndex];
    return choice;
};

function playRound(playerSelection, computerSelection) {
    let userResult = "";

    //TODO: add function that returns error if user input, even after cleaning, isn't rock, paper or scissors

    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "Rock":
                userResult = "tie";
                break;
            case "Scissors":
                userResult = "win";
                break;
            case "Paper":
                userResult = "lose";
                break;
        }
    } else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "Rock":
                userResult = "win";
                break;
            case "Scissors":
                userResult = "lose";
                break;
            case "Paper":
                userResult = "tie";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "Rock":
                userResult = "lose";
                break;
            case "Scissors":
                userResult = "tie";
                break;
            case "Paper":
                userResult = "win";
                break
        }
    }

    // object that returns string of userResult

    return userResult;
}

const playerSelection = "rock"; //TODO: convert to user input, trim string, remove spaces, lowercase etc
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));