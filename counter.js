// get the increase, decrease, and reset buttons
const incrementButton = document.getElementById("increase-btn");
const decrementButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");

// get the counter board value
const counterBoard = document.getElementById("counter-board");

// variable holding the counter value
let counterValue = 0;

// function that increases the counter by 1
const increaseCounter = () => {
    counterBoard.innerHTML = ++counterValue;
};

// function that decreases the counter by 1
const decreaseCounter = () => {
    counterBoard.innerHTML = --counterValue;
};

// function that resets the counter to 0
const resetCounter = () => {
    counterValue = 0;
    counterBoard.innerHTML = counterValue;
};

// add event listeners to the buttons
incrementButton.addEventListener("click", increaseCounter);
decrementButton.addEventListener("click", decreaseCounter);
resetButton.addEventListener("click", resetCounter);
