let humanScore = 0;
let computerScore = 0;
let roundNo = 0;

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
  return userChoice;
}

function playRound(humanChoice, computerChoice){
  winMsg = `You Win! ${humanChoice} beats ${computerChoice}`;
  loseMsg = `You Lose! ${computerChoice} beats ${humanChoice}`;
  cleanHC = humanChoice.toLowerCase();

  if (computerChoice === 'rock'){
    if (cleanHC === 'paper'){
      ++humanScore;
      console.log('You win');
    }
    else (cleanHC === 'scissors'){
      ++computerScore;
      console.log('Computer wins');
    }}
  else if (computerChoice === 'paper'){
    if (cleanHC === 'rock'){
      ++computerScore;
      console.log('Computer Wins');
    }
    else if (cleanHC === 'scissors'){
      ++humanScore;
      console.log('You win');
    }}
  else if(computerChoice === 'scissors'){
    if (cleanHC === 'rock'){
      ++computerScore;
      console.log('Computer Wins');
    }
    else if (cleanHC === 'paper'){
      ++humanScore;
      console.log('You win');
    }}
  else{
    console.log('Draw!!');
  }

}

const compChoice = getComputerChoice();
console.log(compChoice);

const userChoice = getUserChoice;
console.log(userChoice);

playRound(userChoice, humanChoice);
