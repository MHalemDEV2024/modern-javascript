// =======================
// JavaScript Operators Demo
// =======================

// Current year
const now = 2037;

// Math Operators
const ageSaeed = now - 1997; // Saeed's age
const ageSarah = now - 2018; // Sarah's age

console.log("Ages:", ageSaeed, ageSarah);

// Arithmetic operations
console.log("Double Saeed's age:", ageSaeed * 2);
console.log("Saeed's age divided by 10:", ageSaeed / 10);
console.log("2 to the power of 3:", 2 ** 3); // 2^3 = 2 * 2 * 2

// String Concatenation
const firstName = "Saeed";
const lastName = "Khan";
console.log("Full Name:", firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // Initial value: 15
x += 10;        // x = x + 10 → 25
x *= 4;         // x = x * 4 → 100
x++;            // x = x + 1 → 101
x--;            // x = x - 1 → 100

console.log("Final value of x:", x);

// Comparison Operators
console.log("Is Saeed older than Sarah?", ageSaeed > ageSarah);   // true
console.log("Is Sarah an adult (18+)?", ageSarah >= 18);          // false

const isFullAge = ageSarah >= 18; // boolean result
console.log("Sarah is full age:", isFullAge);

console.log(
  "Is someone born in 1991 older than someone born in 2018?",
  now - 1991 > now - 2018
); // true
