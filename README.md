# 🔢 Guess My Number Game 👩🏽‍💻

## Overview

"Guess My Number!" is a simple web-based game where players guess a secret number between 1 and 20. The player starts with a score of 20, and each incorrect guess reduces the score by 1. If the player guesses the number correctly, the game congratulates them and updates the high score. Players can restart the game anytime using the "Again!" button.

It is important to note that even though I coded the logic for this game myself using JavaScript, the template HTML and CSS starter was provided to me as part of my [Udemy Course](https://www.udemy.com/course/the-complete-javascript-course/) by [Jonas Sschmedtmann](https://www.udemy.com/user/jonasschmedtmann/).

## 📃 Features

- User-friendly interface with clear instructions.
- Responsive design suitable for different screen sizes.
- Dynamic feedback for player guesses.
- Persistent high score tracking across game sessions.
- Easy-to-use reset functionality to start a new game.

## ⌨️ Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the web page.
- **JavaScript**: For adding interactivity and game logic.

## 🛝 How to Play

1. Open the game in your web browser.
2. Enter a guess between 1 and 20 in the input field.
3. Click the "Check!" button to see if your guess is correct.
4. Follow the feedback provided to adjust your guesses.
5. The game ends when you guess the correct number or your score reaches 0.
6. Click the "Again!" button to restart the game.

## 🗃️ Files in the Repository

- `index.html`: The HTML file that structures the game.
- `style.css`: The CSS file that styles the game.
- `script.js`: The JavaScript file that contains the game logic.

## Refactoring Details

### Original JavaScript

The original JavaScript file provided basic functionality for the game. Key aspects include:

- Defining the secret number using `Math.random`.
- Implementing a scoring system with an initial score of 20.
- Adding event listeners for the "Check!" and "Again!" buttons.
- Providing feedback for various game states (no input, correct guess, too high, too low).
- Updating the DOM directly within the event listener callbacks.

### Refactored JavaScript

The refactored JavaScript file improves upon the original by:

1. **Modularizing Code**:
   - Introduced an `updateText` function to reduce code duplication when updating the DOM.

2. **Simplifying Conditionals**:
   - Combined the logic for handling incorrect guesses (both too high and too low) into a single conditional.

3. **Enhancing Readability**:
   - Improved variable names and added comments to explain the purpose of each part of the code.
   - Removed redundant checks and streamlined the code to be more concise and easier to read.

4. **Consistent Styling**:
   - Ensured consistent styling and formatting across the codebase.
