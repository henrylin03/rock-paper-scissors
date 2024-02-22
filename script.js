function getComputerSelection() {
    const selections = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * selections.length);
    return selections[randomIndex];
};

function playRound(playerSelection, computerSelection) {
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
    return playerResult;
}
let round = 1;
let scores = { player: 0, computer: 0 };

const roundsSection = document.querySelector(".rounds");
function handleButtonClick(e) {
    let roundDetails = {};
    roundDetails.computerSelection = getComputerSelection();
    roundDetails.playerSelection = e.target.textContent;

    const playerRoundResult = playRound(roundDetails.playerSelection,
        roundDetails.computerSelection);
    switch (playerRoundResult) {
        case "win":
            scores.player++;
            break;
        case "lose":
            scores.computer++;
            break;
    };
    const roundResultAnnounced = {
        win: `You win! ${roundDetails.playerSelection} beats ${roundDetails.computerSelection}`,
        lose: `You lose! ${roundDetails.playerSelection} beats ${roundDetails.computerSelection}`,
        tie: `You tied! Both you and the computer selected ${roundDetails.computerSelection}`
    };

    roundDetails.results = roundResultAnnounced[playerRoundResult];

    const roundList = document.createElement("ul");
    for (const detail in roundDetails) {
        const roundDetailElement = document.createElement("li")
        roundDetailElement.textContent = roundDetails[detail];
        roundList.appendChild(roundDetailElement);
    };

    roundsSection.appendChild(roundList);

}

const buttons = document.querySelectorAll(".player-options > button")
buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
})

//todo: remove event listener (click) on all of the buttons once the game is over (someone hits 5 points) until user wants to restart or refreshes page
//todo: end game and announce winner once someone hits 5 points