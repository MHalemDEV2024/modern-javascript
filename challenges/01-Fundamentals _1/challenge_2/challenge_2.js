/* ============================================================
   CHALLENGE #2: BMI Calculator
   ------------------------------------------------------------
   Formula: BMI = mass / (height * height)
   Description: Compare Mark's and John's BMI values.
   Author: Mohamed Saeed
   Date: 2025-08-31
   ============================================================ */

console.log("Welcome to the BMI Calculator");
console.log("================================\n");

// ============================================================
// Test Data
// ============================================================
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

// ============================================================
// BMI Calculations
// ============================================================
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

// ============================================================
// Comparison & Result (basic output)
// ============================================================
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else if (BMIJohn > BMIMark) {
  console.log("John's BMI is higher than Mark's!");
} else {
  console.log("Both have the same BMI!");
}

// ============================================================
// Comparison & Result (detailed with values and template literals)
// ============================================================
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
} else {
  console.log(`Both have the same BMI (${BMIMark.toFixed(2)})!`);
}
