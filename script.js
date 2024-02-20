function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    const choice = choicesArray[randomIndex];
    return choice;
};

function playRound(playerSelection, computerSelection) {
    const validPlayerSelections = ["rock", "paper", "scissors"];
    const playerSelectionCleaned = playerSelection.replace(/\s/g, "").toLowerCase();

    if (!validPlayerSelections.includes(playerSelectionCleaned)) {
        throw new Error ("Please enter a valid selection: Rock, Paper or Scissors");
    }

    const playerSelectionTitlecased = playerSelectionCleaned.charAt(0).toUpperCase() + playerSelectionCleaned.slice(1);

    console.log(`You selected ${playerSelectionTitlecased}...`);
    console.log(`The computer selected ${computerSelection}...`);

    let userResult = "";
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

    const resultStringHashmap = {
        win: `You win! ${playerSelectionTitlecased} beats ${computerSelection}`,
        lose: `You lose! ${computerSelection} beats ${playerSelectionTitlecased}`,
        tie: `You tied! Both you and the computer selected ${computerSelection}`
    }

    return resultStringHashmap[userResult];
}

const playerSelection = "rock"; //TODO: convert to user input
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));