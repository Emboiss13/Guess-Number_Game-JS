'use strict';

/*
REFACTORING CODE
-------------------------------------------------------------------------
The aim is to create code that follows the DRY principle
So we do this by making sure that when we need to make changes in our code it only needs to be done once. Not on multiple areas of our code. 
-------------------------------------------------------------------------

STEPS TO FOLLOW

1- Identify Areas for Improvement:
    • Look for specific parts of the code that need improvement. Common areas include:

    • Code duplication: Look for repeated code that you can replace with a function or a loop.
    
    • Long functions: Break down large functions into smaller, more manageable ones.

    • Complex conditionals: Simplify complex if statements and consider using lookup tables or replacing them with polymorphism if applicable.
    
    • Poor readability: Improve variable and function names to be more descriptive.

2- Refactor Incrementally
   Make small, incremental changes and test frequently:

    • Extract functions: Turn chunks of code that do one thing into separate functions.
    
    • Rename variables and functions: Use names that clearly describe their purpose.
   
    • Simplify conditionals and loops: Reduce complexity by simplifying or breaking up complicated logic.
    
    • Remove dead code: Eliminate any code that isn't being used.
    
3- Run and Test
   After each change, run your tests to ensure your refactoring hasn’t broken anything. Make sure the code still meets all the requirements it did before.

4- Review and Simplify
   Look over your refactored code:

    • Ensure consistency: Coding style, naming conventions, and project structure should be consistent.
    
    • Optimize performance: Identify any new opportunities for improving performance, like reducing the complexity of loops or optimizing data structures.

*/


//_______________________________________________________________________________________________//


/* DEFINE A SECRET NUMBER

    • Math.Random will generate a value in range 0 <= x > 1
    • We need the SECRET NUMBER variabe to be in range 1 <= x => 20
    • By multiplying the random number by 20 and adding + 1 we achieve this 🔝
         → How? By adding +1 ... 
           → Because x < 1 so, x * 20 < 20, so x * 20 + 1 = 20

*/         let secretNumber = Math.trunc(Math.random() * 20) + 1; 



// Create variables to store SCORE and HIGHSCORE values in the global scope
let score = 20; 
let highestScore = 0; 

//Create function to update text content given a particular class
const updateText = function (className, contentUpdate) {
    document.querySelector(className).textContent = contentUpdate;
}


/* ADDING FUNCTIONALITY TO THE CHECK BUTTON

    • The HTML code for it is: <button class="btn check">Check!</button>
    • REMEMBER: The btn class is the general html class for buttons
    • So the class we are targeting is named = "check"

*/  

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        updateText('.message', '🚫 No Number!') ;

        // When guess is CORRECT - Player WINS
    } else if (guess === secretNumber) {
        updateText('.message', '🎉 Correct Number!');
        updateText('.number', secretNumber);

        // Changing the style of the page
        // To show the player a visual queue that they have won
        document.querySelector('body').style.backgroundColor = '#60b347';

        // We now want to increase the width of the winning number
        document.querySelector('.number').style.width = '30rem';

        //Set the new highest score
        if (highestScore <= score) {
            highestScore = score;
            updateText('.highscore', highestScore);
        } else {
            updateText('.highscore', highestScore);
        }

    
    // When guess is WRONG - Player Loses/Tries again
    } else if (guess !== secretNumber) {

        if (score > 1) {
        
            score--;
            updateText('.score', score);
            updateText('.message', guess > secretNumber ? '📈 Guess is too High!' : '📉 Guess is too Low!');

        }else {
            updateText('.message','😥OHH no, You lost the game');
            updateText('.score', 0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    
    // Restore original values
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Restore condition of text
    updateText('.message', 'Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    updateText('.score', score);
    document.querySelector('.guess').value = '';
    updateText('.number', '?');

});