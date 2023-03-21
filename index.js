function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection;
let computerSelection;

let playerScore = 0;
let compScore = 0;
let battle = 0;

function playRound(player, comp) {
  if (player == "rock") {
    if (comp == "paper") {
      console.log(
        `You lose.. You chose ${player} and the computer choose ${comp}`
      );
      compScore++;
    } else if (comp == "scissor") {
      console.log(
        `You Win.. You chose ${player} and the computer choose ${comp}`
      );
      playerScore++;
    } else {
      console.log(
        `It's a draw you choose ${player} and computer choose ${comp}`
      );
    }
  }

  if (player == "scissor") {
    if (comp == "rock") {
      console.log(
        `You lose.. You chose ${player} and the computer choose ${comp}`
      );
      compScore++;
    } else if (comp == "paper") {
      console.log(
        `You Win.. You chose ${player} and the computer choose ${comp}`
      );
      playerScore++;
    } else {
      console.log(
        `It's a draw you choose ${player} and computer choose ${comp}`
      );
    }
  }

  if (player == "paper") {
    if (comp == "scissor") {
      console.log(
        `You lose.. You chose $ {player} and the computer choose ${comp}`
      );
      compScore++;
    } else if (comp == "rock") {
      console.log(
        `You Win.. You chose ${player} and the computer choose ${comp}`
      );
      playerScore++;
    } else {
      console.log(
        `It's a draw you choose ${player} and computer choose ${comp}`
      );
    }
  }
}

function game() {
  while (battle <= 5) {
    playerSelection = prompt("Please select rock, paper, or scissor");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    battle++;

    if (playerScore > compScore) {
      console.log(
        `You win with a score of ${playerScore} while the computer only had a score of ${compScore}`
      );
    } else if (compScore > playerScore) {
      console.log(
        `The computer wins with a score of ${compScore} while you only had a score of ${playerScore}`
      );
    }
  }
}

game();
