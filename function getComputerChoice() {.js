function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}

console.log(getComputerChoice())

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
   let score;
  // All situations where human draws, set `score` to 0
   if (playerChoice === computerChoice) {
    score = 0
  // All situations where human wins, set `score` to 1
   } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
   score = 1
   }
   else if (playerChoice = 'Paper' && computerChoice == 'Rock') {
    score = 1
   } else if (playerChoice = 'Scissors' && computerChoice == 'Paper') {
    score = 1
  // Otherwise human loses (aka set score to -1)
   } else {
    score = -1
   }
  // return score
   return score
}
console.log(getResult('Rock', 'Scissors'))
