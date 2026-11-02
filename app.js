const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('#rock, #paper, #scissors')
let userChoice
let computerChoice
let result

let playerScore = 0
let computerScore = 0
let drawScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a tie!"
    drawScore++
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!'
    playerScore++
  } else {
    result = 'You lose!'
    computerScore++
  }

  resultDisplay.textContent = result

  document.getElementById('player-score').textContent = playerScore
  document.getElementById('computer-score').textContent = computerScore
  document.getElementById('draw-score').textContent = drawScore
}

document.getElementById('reset').addEventListener('click', () => {
  playerScore = 0
  computerScore = 0
  drawScore = 0

  document.getElementById('player-score').textContent = playerScore
  document.getElementById('computer-score').textContent = computerScore
  document.getElementById('draw-score').textContent = drawScore

  userChoiceDisplay.textContent = ''
  computerChoiceDisplay.textContent = ''
  resultDisplay.textContent = 'Scores reset! Play again.'
})