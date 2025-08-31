/* CHALLENGE #1: BMI Calculator
   Formula: BMI = mass / (height * height)
   Author: Mohamed Saeed
   Date: 2025-8-30
   --------------------------------------
   Compare Mark's and John's BMI values.
*/

console.log("Welcome to the BMI Calculator");
console.log("================================\n");

// ================================
// Test Data 1
// ================================
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

// Calculate BMIs
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

// Log results
console.log("Test Data 1:");
console.log(`Mark's BMI: ${BMIMark.toFixed(2)}`);
console.log(`John's BMI: ${BMIJohn.toFixed(2)}`);

// Compare BMIs
let markHigherBMI = BMIMark > BMIJohn;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}\n`);

// ================================
// Test Data 2
// ================================
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

// Calculate BMIs
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

// Log results
console.log("Test Data 2:");
console.log(`Mark's BMI: ${BMIMark.toFixed(2)}`);
console.log(`John's BMI: ${BMIJohn.toFixed(2)}`);

// Compare BMIs
markHigherBMI = BMIMark > BMIJohn;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);
