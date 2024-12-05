/*
Day 9: Rock Paper Scissors Game - Mini Project

Step-by-Step Process:
1. Define variables for user and computer scores.
2. Select all DOM elements needed for interaction, such as buttons for choices and areas to display messages and scores.
3. Create a function to generate a random choice for the computer.
4. Build the main game logic that compares the user's choice with the computer's choice.
5. Create functions to handle scenarios like a draw, a user win, or a computer win.
6. Update the score dynamically and display appropriate messages after each round.
7. Add event listeners to the buttons to trigger the game logic on user interaction.
*/

// Initialize scores for user and computer
let userScore = 0;
let compScore = 0;

// Select all game-related DOM elements
const choices = document.querySelectorAll(".choice"); // Buttons for rock, paper, scissors
const msg = document.querySelector("#msg"); // Message display area

const userScorePara = document.querySelector("#user-score"); // User's score display
const compScorePara = document.querySelector("#comp-score"); // Computer's score display

// Function to randomly generate the computer's choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; // Possible choices
  const randomIndex = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
  return options[randomIndex]; // Return the computer's choice
};

// Function to handle a draw scenario
const drawGame = () => {
  console.log("game was draw"); // Log the draw to the console
};

// Main game logic
const playGame = (userChoice) => {
  // Generate the computer's choice
  const compChoice = genCompChoice();

  // Check if the game is a draw
  if (userChoice === compChoice) {
    msg.innerText = "Game was Draw, Play Game.."; // Update message for draw
    drawGame(); // Call the draw handler function
    msg.style.backgroundColor = "#855A5C"; // Change message background color
  } else {
    // Determine if the user wins
    let userWin = true;

    // Check all possible outcomes
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    // Show the winner based on the result
    showWinner(userWin, userChoice, compChoice);
  }
};

// Function to display the winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; // Increment user score
    userScorePara.innerText = userScore; // Update the score display
    msg.innerText = `You Win!!! Your ${userChoice} beats ${compChoice}`; // Display winning message
    msg.style.backgroundColor = "green"; // Highlight winning message
  } else {
    compScore++; // Increment computer score
    compScorePara.innerText = compScore; // Update the score display
    msg.innerText = `You Lose!!! Computer's ${compChoice} beats ${userChoice}`; // Display losing message
    msg.style.backgroundColor = "red"; // Highlight losing message
  }
};

// Add event listeners to each choice button
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Get the user's choice based on button ID
    playGame(userChoice); // Trigger the game logic with the user's choice
  });
});
