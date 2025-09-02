/* ============================================================
   CHALLENGE #4: Tip Calculator with Arrays
   ------------------------------------------------------------
   Rules:
   - Tip 15% if bill is between 50 and 300
   - Otherwise, tip 20%
   - Create arrays for tips and totals
   - Calculate averages of tips and totals
   ------------------------------------------------------------
   Author: Mohamed Saeed
   Date: 2025-09-02
============================================================ */

/* 
  Array of bills to process
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/* 
  Empty arrays to store calculated tips and totals
*/
const tips = [];
const totals = [];

/* 
  Function to calculate tip based on bill amount
  - bill: number → bill amount
  - returns: number → calculated tip
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* 
  Loop through all bills, calculate tips and totals, and store in arrays
*/
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // Calculate tip
  tips.push(tip); // Add tip to tips array
  totals.push(bills[i] + tip); // Add total (bill + tip) to totals array
}

// Output bills, tips, and totals
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

/* 
  Function to calculate average of an array of numbers
  - arr: array of numbers
  - returns: number → average value
*/
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Sum all array elements
  }
  return sum / arr.length; // Divide sum by number of elements
};

// Calculate and log averages
console.log('Average of totals:', calcAverage(totals));
console.log('Average of tips:', calcAverage(tips));

/* 
  Notes:
  - `tips` and `totals` arrays are filled dynamically using a for loop.
  - `calcTip` function uses a ternary operator for concise conditional logic.
  - `calcAverage` function loops through any numeric array to compute the mean.
  - This structure allows easy extension for more bills or different tipping rules.
*/
