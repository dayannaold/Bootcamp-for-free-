let player_score = 0;
let computer_score= 0;

function getComputerChoice(choices) {
  choices = ["rock", "paper", "scissor"];    
  const words = Math.floor(Math.random() * choices.length)
  const final = choices[words];
  return final;
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log('It is a tie');
  } else if (
      (playerSelection == "rock" && computerSelection == "scissor") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissor" && computerSelection == "paper")) 
  {
    player_score++;
  } else { 
    computer_score++;
  }; 
};

function game() {
  let buttons = document.getElementsByClassName('btn2');
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      playRound(this.id);
    });
  }
  for (i = 1; i <= 5; i++) {
    console.log(`round ${i}`);
  }
  if(player_score > computer_score) {
    console.log(`Player: ${player_score}, computer: ${computer_score}. Player wins!`);
  } else if (player_score < computer_score){
    console.log(`Player: ${player_score}, computer: ${computer_score}. computer wins!`);
  } else if (player_score === computer_score){
    console.log('It is a tie');
  }
};

game();
