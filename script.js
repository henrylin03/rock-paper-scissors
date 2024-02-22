function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    const choice = choicesArray[randomIndex];
    return choice;
};

function getPlayerChoice() {
    const validChoices = ["rock", "paper", "scissors"];

    let choice = "";
    let choiceCleaned = "";
    while (true) {
        choice = prompt("Please enter your choice: Rock, Paper, or Scissors: ");
        choiceCleaned = choice.replace(/\s/g, "").toLowerCase();

        if (validChoices.includes(choiceCleaned)) { break };
        if (!choiceCleaned) { continue };

        alert("⚠️ ERROR: please enter Rock, Paper, or Scissors.\n\nPlease click OK to continue.");
        continue;
    };
    const choiceTitleCased = choiceCleaned.charAt(0).toUpperCase() + choiceCleaned.slice(1);
    return choiceTitleCased;
}

function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}...`);
    console.log(`Computer selected ${computerSelection}...`);

    let playerResult = "";
    if (playerSelection === "Rock") {
        switch (computerSelection) {
            case "Rock":
                playerResult = "tie";
                break;
            case "Scissors":
                playerResult = "win";
                break;
            case "Paper":
                playerResult = "lose";
                break;
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Rock":
                playerResult = "win";
                break;
            case "Scissors":
                playerResult = "lose";
                break;
            case "Paper":
                playerResult = "tie";
                break;
        }
    } else if (playerSelection === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                playerResult = "lose";
                break;
            case "Scissors":
                playerResult = "tie";
                break;
            case "Paper":
                playerResult = "win";
                break
        }
    }

    const resultStringHashmap = {
        win: `You win! ${playerSelection} beats ${computerSelection}`,
        lose: `You lose! ${computerSelection} beats ${playerSelection}`,
        tie: `You tied! Both you and the computer selected ${computerSelection}`
    }
    console.log(resultStringHashmap[playerResult])

    return playerResult;
}

const playerOptions = document.querySelector(".player-options")
const playerOptionsButtons = playerOptions.querySelectorAll("button");
playerOptionsButtons.forEach(btn => {
    btn.addEventListener("click", () => console.log(btn.textContent));
})