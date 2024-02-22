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
function handleButtonClick(e) {
    const computerSelection = getComputerSelection();
    const playerSelection = e.target.textContent;
    const playerRoundResult = playRound(playerSelection,
        computerSelection);
    switch (playerRoundResult) {
        case "win":
            scores.player++;
            break;
        case "lose":
            scores.computer++;
            break;
    };

    const roundResultAnnounced = {
        win: `You win! ${playerSelection} beats ${computerSelection}`,
        lose: `You lose! ${playerSelection} beats ${computerSelection}`,
        tie: `You tied!`
    };

    let roundDetails = {};
    roundDetails.playerSelectionAnnounced = `You played ${playerSelection}...`;
    roundDetails.computerSelectionAnnounced = `Computer played ${computerSelection}...`;
    roundDetails.resultsAnnounced = roundResultAnnounced[playerRoundResult];

    const roundsSection = document.querySelector(".rounds");
    const roundsHeading = document.querySelector(".rounds > h2");
    roundsHeading.removeAttribute("hidden");
    const roundNumber = document.createElement("h3");
    roundNumber.textContent = `Round ${round}`;

    const roundArticle = document.createElement("article");
    roundArticle.appendChild(roundNumber)
    for (const detail in roundDetails) {
        if (detail.includes("Selection")) {
            var roundDetailElement = document.createElement("ul");
            const roundListItem = document.createElement("li");
            roundListItem.textContent = roundDetails[detail];
            roundDetailElement.appendChild(roundListItem);
        } else {
            var roundDetailElement = document.createElement("strong");
            roundDetailElement.textContent = roundDetails[detail];
        };

        roundArticle.appendChild(roundDetailElement);
    };
    roundsSection.prepend(roundArticle);

    const playerScoreElement = document.querySelector(".player-score");
    const computerScoreElement = document.querySelector(".computer-score");
    playerScoreElement.textContent = scores.player;
    computerScoreElement.textContent = scores.computer;

    if (scores.player === 5 || scores.computer === 5) {
        buttons.forEach(btn => {
            btn.removeEventListener("click", handleButtonClick);
            btn.setAttribute("disabled", true);
        });

        const finalResultsAnnounced = document.querySelector(".final-result-announced");
        finalResultsAnnounced.textContent = scores.player > scores.computer ?
            "You win! 🏆" : "You lose! ☹️";

        const playAgainButton = document.querySelector(".play-again");
        playAgainButton.removeAttribute("hidden");
        playAgainButton.addEventListener("click", () => location.reload());
    };

    round++;
};

const buttons = document.querySelectorAll(".player-options > button")
buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

//TODO: add styling so it isn't so ugly
//TODO: consider doing reverse chronological order of rounds