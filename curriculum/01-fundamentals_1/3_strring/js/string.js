// Define constants for user details
const firstName = "Mohamed";
const job = "Engineering";
const birthYear = 1997;
const year = 2025;

// --- String Concatenation (Old Way) ---
const mohamed =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " year old, I'm a " +
  job +
  "!";
console.log(mohamed);
// Output: I'm Mohamed, a 28 year old, I'm a Engineering!

// --- Template Literals (Modern ES6 Way) ---
// Cleaner, easier to read, and supports interpolation
const mohamedNew = `I'm ${firstName}, a ${year - birthYear} year old, Iam a ${job}!`;
console.log(mohamedNew);
// Output: I'm Mohamed, a 28 year old, I'm a Engineering!

// Regular string without variables
console.log(`Just a regular string...`);

// --- Multi-line Strings ---
// Old way using escape characters (\n\)
console.log("String with \n\
multiple \n\
lines");

// Modern way using template literals (backticks ``)
console.log(`String
multiple
lines`);

// Note:
// ''  → single quotes
// ""  → double quotes
// ``  → backticks (used for template literals)
