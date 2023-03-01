'use strict'
// document.querySelector('.message').textContent = 'correct answer!';
const number = Math.trunc(Math.random()*20 +1);
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener( 'click', function(){
    score = 20;
        document.querySelector('.message').textContent = 'start guessing ...'
    
       document.querySelector('.score').textContent=score
        document.querySelector('.highscore').textContent = 0;
        document.querySelector('body').style.backgroundColor='#222'
        document.querySelector('.number').style.width='15rem'
        document.querySelector('.guess').value='';
        document.querySelector('.number').textContent='?'
        
        
    })

document.querySelector('.check') .addEventListener(
    'click', function(){
const guess = Number(document.querySelector('.guess').value)
if(!guess) {
    document.querySelector('.message').textContent = 'No number!'
}
else if(guess===number){
    document.querySelector('.message').textContent = 'correct answer!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent = number;
    
}
else if( guess !== number){
    if(score >1){
        document.querySelector('.message').textContent = guess > number ? 'guess is too high!' : 'guess is too low'; 
        document.querySelector('.score').textContent = score--;
    }   
}
// else if(guess> number){
//     if(score >1){
//         document.querySelector('.message').textContent = 'guess is too high!'; 
//         document.querySelector('.score').textContent = score--;
//     }
//    else{
//     document.querySelector('.message').textContent = 'you lost!';
//     document.querySelector('.score') .textContent=0
//    }
// }
// else if(guess < number){
//     if(score >1){
//         document.querySelector('.message').textContent = 'guess is too low!'; 
//         document.querySelector('.score').textContent = score--; 
//     }
//     else{
//         document.querySelector('.message').textContent = 'you lost!';
//         document.querySelector('.score') .textContent=0
//        }
// }
if (score > highScore){
    highScore=score;
    
}
    }
)