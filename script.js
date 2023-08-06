const buttons = document.querySelectorAll("button");
const roundResult = document.getElementById("round-result");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  const roundResultElement = document.getElementById("round-result");

  if (playerChoice === computerChoice) {
    roundResultElement.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    roundResultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
    setTimeout(() => {
      roundResult.textContent = "Choose your weapon";
    }, 2000);
  });
});
