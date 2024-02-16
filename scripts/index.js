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
function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground')
}