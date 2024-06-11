'use strict';
/*
EXAMPLE
// Loging the text content of our HTML to the console
console.log(document.querySelector('.message').textContent); 

// Using DOM manipulation to change the text content of our HTML page
document.querySelector('.message').textContent = '🎉 Correct Number!'; 
document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 29;

// Using DOM manipulation to retrieve the value of an HTML element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


// Define a secret number
// Math.Random will generate a value in range 0 <= x >1 
// We make it so that the number variable is ib range 1 <= x => 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
//document.querySelector('.number').textContent = secretNumber;

// We need to create a variable to keep a score
// This is known as a state variable
let score = 20; 
let highestScore = 0; 

// We want to give funcitonality to our check button
// The HTML code for it is: <button class="btn check">Check!</button>
// So the class we are targeting is named = "check"
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';

    // When the player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber; 

        // Changing the style of the page
        // To show the player a visual queue that they have won
        document.querySelector('body').style.backgroundColor = '#60b347'; 

        // We now want to increase the with of the winning number
        document.querySelector('.number').style.width = '30rem';

        //Set the new highest score
        if (highestScore <= score) {
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        } else {
            document.querySelector('.highscore').textContent = highestScore;
        }

    // When the guess is too big
    } else if (guess > secretNumber) {
        
        if (score > 1) {

            document.querySelector('.message').textContent = '🙈 Guess is too High!';
            score--;
            document.querySelector('.score').textContent = score;
            
        } else {
            document.querySelector('.message').textContent = '😥OHH no, You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        
    // When the guess is too small
    } else if (guess < secretNumber) {
        
        if (score > 1) {

            document.querySelector('.message').textContent = '🙈 Guess is too Low!';
            score--;
            document.querySelector('.score').textContent = score;
            
        } else {
            document.querySelector('.message').textContent = '😥OHH no, You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        
    }

});

document.querySelector('.again').addEventListener('click', function () {
    
    // Restore original values
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Restore condition of text
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

});