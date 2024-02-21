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
    continueGame();
  }
  else {
    console.log('wrong');
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