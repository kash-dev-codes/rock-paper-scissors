console.log('Hello, I\'m working');

function getComputerChoice(){
  const R = 'rock';
  const P = 'paper';
  const S = 'scissors';

  rand = Math.floor(Math.random()* 3);

  if (rand === 0){
    return R;
  }
  else if (rand === 1){
    return P;
  }
  else if (rand === 2){
    return S;
  }
}

function getUserChoice(){
  userChoice = prompt('Rock, Paper, or Scissors?');
  console.log(userChoice);
}


console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

getUserChoice();
