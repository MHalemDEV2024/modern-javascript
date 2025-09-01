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
