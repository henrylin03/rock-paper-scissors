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
        return "ERROR: Please enter a valid selection: Rock, Paper or Scissors";
    }

    const playerSelectionTitlecased = playerSelectionCleaned.charAt(0).toUpperCase() + playerSelectionCleaned.slice(1);

    console.log(`You selected ${playerSelectionTitlecased}...`);
    console.log(`Computer selected ${computerSelection}...`);

    let userResult = "";
    if (playerSelectionCleaned === "rock") {
        switch (computerSelection) {
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
    } else if (playerSelectionCleaned === "paper") {
        switch (computerSelection) {
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
    } else if (playerSelectionCleaned === "scissors") {
        switch (computerSelection) {
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

function playGame() {
    let scores = { player: 0, computer: 0 }

    for (let i = 1; i <= 5; i++) {
        console.log(`--ROUND ${i}--`);
        const playerSelection = prompt("Please enter your choice: Rock, Paper, or Scissors: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    };

    return;
}

//TODO: suggest that in playRound, you use console.log _group_ (see notes on most useful console methods) for each round...
//TODO: manage error - when user puts in a random text, it shouldn't just proceed to next round

playGame();