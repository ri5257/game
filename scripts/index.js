// Way-1 
//........................
// function play(){
//     // step-1 hide
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     //step-2 show
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden') 
// }

// Another Way: Same Work
//........................

function handleKeyButtonPress(event) {
  const playerPressedKey = event.key;
  // console.log('player pressed', playerPressedKey);

  const currentAlphabet = document.getElementById('current-alphabet');
  const currentAlphabetText = currentAlphabet.innerText;
  const expectedAlphabet = currentAlphabetText.toLowerCase();
  // console.log(playerPressedKey, expectedAlphabet);
  
  if (playerPressedKey === expectedAlphabet) {
    console.log('correct');
    removeBackgroundColor(expectedAlphabet);
    const currentScore = document.getElementById('current-score');
    const currentScoreText = currentScore.innerText;
    const currentScoreNumber = parseInt(currentScoreText);
    const newScore = currentScoreNumber + 1;
    currentScore.innerText = newScore;
    continueGame();
  }
  else {
    console.log('wrong');
    const currentLife = document.getElementById('current-life');
    const currentLifeText = currentLife.innerText;
    const currentLifeNumber = parseInt(currentLifeText);
    const newLife = currentLifeNumber - 1;
    currentLife.innerText = newLife;
    if (newLife === 0) {
      alert('Game Over');
      location.reload();
    }
  }
}



document.addEventListener('keyup', handleKeyButtonPress)

function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log('your random number is', alphabet);

  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  setBackgroundColor(alphabet);
}


function play() {
  hideElementByID('home-screen');
  showElementByID('play-ground');
  continueGame();
}