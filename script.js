function getComputerSelection() {
    const selections = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * selections.length);
    return selections[randomIndex];
};

function playRound(playerSelection, computerSelection) {
    //TODO: FOR REMOVAL
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
    console.log(resultStringHashmap[playerResult]) //TODO: for removal

    return playerResult;
}

let round = 1;
let scores = { player: 0, computer: 0 };

// need to add articles for each round

const buttons = document.querySelectorAll(".player-options > button")
function handleButtonClick(e) {
    const computerSelection = getComputerSelection();
    const playerSelection = e.target.textContent;
    const playerRoundResult = playRound(playerSelection, computerSelection);
    switch (playerRoundResult) {
        case "tie":
            scores.player++;
            scores.computer++;
            break;
        case "win":
            scores.player++;
            break;
        case "lose":
            scores.computer++;
            break;
    };
    alert(scores);
}
buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
})

//todo: remove event listener (click) on all of the buttons once the game is over (someone hits 5 points) until user wants to restart or refreshes page