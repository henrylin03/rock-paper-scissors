function getComputerSelection() {
    const selections = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * selections.length);
    return selections[randomIndex];
};

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

const buttons = document.querySelectorAll(".player-options > button")
const handleButtonClick = (e) => {
    const computerSelection = getComputerSelection();
    const playerSelection = e.target.textContent;
    playRound(playerSelection, computerSelection);
}

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
})