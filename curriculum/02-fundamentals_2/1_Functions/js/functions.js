'use strict'; // Strict mode: safer coding, prevents silent errors

// Function Declaration (no parameters)
function logger() {
  // This code runs every time we call logger()
  console.log("My name is Saeed");
}

// Calling (invoking) the function 3 times
logger(); // Output: My name is Saeed
logger(); // Output: My name is Saeed
logger(); // Output: My name is Saeed

// Function with parameters (apples, oranges)
function fruitProcessor(apples, oranges) {
  // Build a string using the inputs
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  // Return the result to the caller
  return juice;
}

// Call the function and store the result in a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Output: Juice with 5 apples and 0 oranges.

// Call function directly inside console.log (no variable needed)
console.log(fruitProcessor(5, 0)); // Same output as above

// Another call with different arguments
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Output: Juice with 2 apples and 4 oranges.

// Example of a built-in JavaScript function
const num = Number('23'); // Converts string "23" to number 23
console.log(num); // Output: 23
