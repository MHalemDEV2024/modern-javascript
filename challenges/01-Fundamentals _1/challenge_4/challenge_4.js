/* ============================================================
   CHALLENGE #4: Tip Calculator
   ------------------------------------------------------------
   Formula: Tip = 15% if bill is between 50 and 300, else 20%
   Description: Calculate the tip and total bill using ternary.
   Author: Mohamed Saeed
   Date: 2025-08-31
   ============================================================ */

console.log("Welcome to the Tip Calculator");
console.log("================================\n");

// ============================================================
// Test Data
// ============================================================
const bill = 275; // You can change this value for testing

// ============================================================
// Tip Calculation (using ternary operator)
// ============================================================
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// ============================================================
// Final Output
// ============================================================
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);
