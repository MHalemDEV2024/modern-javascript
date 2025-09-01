/* ============================================================
   CHALLENGE #2: Tip Calculator with Arrays
   ------------------------------------------------------------
   Rules:
   - Tip 15% if bill is between 50 and 300.
   - Otherwise, tip 20%.
   - Create an array of tips.
   - Create an array of totals (bill + tip).
   - Output results to console.
   ------------------------------------------------------------
   Author: Mohamed Saeed
   Date: 2025-09-2
============================================================ */

// Function to calculate tip
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};

// Test function with a single bill
console.log("Tip for bill 100:", calcTip(100));

// Bills array
const bills = [125, 555, 44];

// Tips array (calculated individually without map)
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2])
];

// Totals array (bill + tip)
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

// Output results
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
