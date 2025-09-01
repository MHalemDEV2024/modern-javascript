'use strict'; // Safer code

/************************************************************
 * Functions Calling Other Functions
 * This keeps code modular, readable, and reusable.
 ************************************************************/

// Helper function: cut fruit into pieces
function cutFruitPieces(fruit) {
  return fruit * 4; // assume each fruit = 4 pieces
}

// Main function: uses helper inside
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

// Calls
console.log(fruitProcessor(2, 3)); 
// Juice with 8 apple pieces and 12 orange pieces.

console.log(fruitProcessor(5, 1)); 
// Juice with 20 apple pieces and 4 orange pieces.


/************************************************************
 * Functions Calling Other Functions
 * Example: Retirement Calculator
 ************************************************************/

// 1️⃣ Helper function: Calculate age
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// 2️⃣ Main function: Calculate years until retirement
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear); // Call helper function
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement; // still working
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1; // already retired
  }
};

// 3️⃣ Function Calls
console.log(yearsUntilRetirement(1991, 'Jonas')); // Jonas retires in 19 years
console.log(yearsUntilRetirement(1950, 'Mike'));  // Mike has already retired 🎉