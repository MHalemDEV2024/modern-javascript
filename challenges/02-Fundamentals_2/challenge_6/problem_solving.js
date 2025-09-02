// ============================================================
// Weather Forecast - Print Temperatures
// ------------------------------------------------------------
// PROBLEM 1
// Given an array of forecasted maximum temperatures, print a
// string showing each temperature with the number of days ahead.
//
// Example:
//   Input:  [17, 21, 23]
//   Output: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
// ============================================================

/* ------------------------------------------------------------
   Problem-Solving Steps
   ------------------------------------------------------------
   1) Understand the problem:
      - Convert an array of numbers into a formatted string.
      - "X days" → index + 1.
      - Separate values with "...".
   
   2) Break the problem into sub-problems:
      - Loop through array elements.
      - Convert each element into a formatted string.
      - Append "... " between values.
      - Wrap result with leading "..." at the start.
      - Print final string to the console.
-------------------------------------------------------------*/

// Test Data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

/**
 * Prints a formatted weather forecast string from an array of temperatures.
 *
 * @param {number[]} arr - Array of forecasted maximum temperatures.
 */
const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log('... ' + str);
};

// Run tests
printForecast(data1);
printForecast(data2);
