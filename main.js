let humanScore = 0;
let computerScore = 0;
let draws = 0;
let roundNo = 0;


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
  let choice = prompt('Rock, Paper, or Scissors?');
  return choice;
}

function playRound( humanChoice, computerChoice){
  winMsg = `You Win! ${humanChoice} beats ${computerChoice}`;
  loseMsg = `You Lose! ${computerChoice} beats ${humanChoice}`;
  cleanHC = String(humanChoice).toLowerCase();

  // ROUND Begin
  // user vs computer score
  // words played

  let roundString = `You play: ${cleanHC.toUpperCase()}\nComputer plays: ${String(computerChoice).toUpperCase()}`;
  console.log(roundString);

  if(computerChoice === cleanHC){
    console.log('Draw!!');
    ++draws;
  }
  else if (computerChoice === 'rock'){
    if (cleanHC === 'paper'){
      ++humanScore;
      console.log(winMsg);
    }
    else if (cleanHC === 'scissors'){
      ++computerScore;
      console.log(loseMsg);
    }}
  else if (computerChoice === 'paper'){
    if (cleanHC === 'rock'){
      ++computerScore;
      console.log(loseMsg);
    }
    else if (cleanHC === 'scissors'){
      ++humanScore;
      console.log(winMsg);
    }}
  else if(computerChoice === 'scissors'){
    if (cleanHC === 'rock'){
      ++computerScore;
      console.log(loseMsg);
    }
    else if (cleanHC === 'paper'){
      ++humanScore;
      console.log(winMsg);
    }}

}

function playGame(){
  let compChoice = 0;
  let userChoice = 0;

  for (let round = 1; round <=5; round++){
    console.log(`Round ${round}`);
    compChoice = getComputerChoice();
    userChoice = getUserChoice();
    playRound(userChoice, compChoice);
    
  }
  console.log('Final score');
  console.log(`You: ${humanScore}\nComputer: ${computerScore}\nDraws: ${draws}`);
}

playGame();
