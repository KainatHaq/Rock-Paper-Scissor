function play(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie! Both chose Same " + userChoice;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = " Congratulations You win! " + userChoice + " beats " + computerChoice;
    } else {
        result = "Computer wins! " + computerChoice + " beats " + userChoice;
    }

    document.getElementById('result').innerText = result;
    document.getElementById('restart').style.display = 'inline';
  
}

function restartGame() {
    document.getElementById('result').innerText = '';
    document.getElementById('restart').style.display = 'none';
}