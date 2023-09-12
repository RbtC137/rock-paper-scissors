let playerMove = '';
let computerMove = '';

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
  if (playerMove === 'rock' && computerMove === 'rock'){
    result = 'Tie!';
  }else if (playerMove === 'rock' && computerMove === 'paper'){
    result = 'Lose!';
  }else if (playerMove === 'rock' && computerMove === 'scissors'){
    result = 'Lose!';
  }else if (playerMove === 'paper' && computerMove === 'rock'){
    result = 'Win!';
  }else if (playerMove === 'paper' && computerMove === 'paper'){
    result = 'Tie!';
  }else if (playerMove === 'paper' && computerMove === 'scissors'){
    result = 'Lose!';
  }else if (playerMove === 'scissors' && computerMove === 'rock'){
    result = 'Lose!';
  }else if (playerMove === 'scissors' && computerMove === 'paper'){
    result = 'Win!';
  }else if (playerMove === 'scissors' && computerMove === 'scissors'){
    result = 'Tie!';
  }
  
  document.querySelector('.result').innerHTML = `playerMove => ${playerMove};<br> computerMove => ${computerMove}; <br> Player ${result}`;
}