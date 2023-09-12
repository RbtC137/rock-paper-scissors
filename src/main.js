let playerMove = '';
let computerMove = '';

//
const moves = ['rock', 'paper', 'scissors'];

let moveButtons = document.querySelectorAll('.player-move');
moveButtons.forEach((buttonElement) =>{ 
  buttonElement.addEventListener('click',() => {
    playerMove = buttonElement.getAttribute('class').split(" ")[0];
    computerMove = computerMoveRand();
    judgeGame(playerMove, computerMove);
  })
})

function computerMoveRand() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33 && randomNumber > 0) {
    return 'rock'
  }else if (randomNumber < 0.66 && randomNumber >= 0.33) {
    return 'paper'
  }else if (randomNumber < 1 && randomNumber >= 0.66) {
    return 'scissors'
  }
}

function judgeGame(playerMove, computerMove) {
  let result = '';
  let score = moves.indexOf(playerMove) - moves.indexOf(computerMove);
  if (score === 0){
    result = 'Tie!';
  } else if (score === 1 || score === -2){
    result = 'Win!';
  } else {
    result = 'Lose!';
  }
  
  document.querySelector('.result').innerHTML = `playerMove => ${playerMove};<br> computerMove => ${computerMove}; <br> Player ${result}`;
}