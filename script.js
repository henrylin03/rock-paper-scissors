function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    const choice = choicesArray[randomIndex];
    return choice;
};

function playRound(playerSelection, computerSelection) {
    return "hello";
}

const playerSelection = "rock"; //TODO: convert to user input
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));