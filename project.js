// project.js

// Get elements
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countLabel = document.getElementById("count");

// Initial count value
let count = 0;

// Event listeners for buttons
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countLabel.textContent = count;
    }
});

incrementButton.addEventListener("click", () => {
    count++;
    countLabel.textContent = count;
});
// project.js

// Get elements
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countLabel = document.getElementById("count");
const priceLabel = document.getElementById("price"); // Added line
const totalLabel = document.getElementById("total"); // Added line

// Initial count and price values
let count = 0;
let price = parseFloat(priceLabel.textContent); // Convert price to a number

// Function to update total price
function updateTotalPrice() {
    totalLabel.textContent = (count * price) + " DTN";
}

// Event listeners for buttons
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countLabel.textContent = count;
        updateTotalPrice();
    }
});

incrementButton.addEventListener("click", () => {
    count++;
    countLabel.textContent = count;
    updateTotalPrice();
});

// Initial update of total price
updateTotalPrice();



