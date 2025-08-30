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


// ==========================
// Operator Precedence in JS
// ==========================

// Example 1: Left-to-right subtraction
console.log("Precedence (25 - 10 - 5):", 25 - 10 - 5); // (15 - 5) = 10

// Example 2: Multiplication before addition
console.log("Precedence (2 + 3 * 4):", 2 + 3 * 4); // 2 + (12) = 14

// Example 3: Using parentheses to change precedence
console.log("Precedence ((2 + 3) * 4):", (2 + 3) * 4); // (5 * 4) = 20

// Example 4: Subtraction order
console.log("Precedence (10 - 3 - 4):", 10 - 3 - 4); // (7 - 4) = 3

// Example 5: Parentheses in subtraction
console.log("Precedence (10 - (3 + 4)):", 10 - (3 + 4)); // 10 - 7 = 3


// ==========================
// Assignment Precedence
// ==========================
let y, z;
y = z = 25 - 10 - 5; // Evaluated as: y = (z = 10)
console.log("y:", y, "| z:", z); // y = 10, z = 10


// ==========================
// Practical Example
// ==========================

const averageAge = (ageSaeed + ageSarah) / 2; 
console.log("Average Age:", averageAge); // (40 + 19) / 2 = 29.5
