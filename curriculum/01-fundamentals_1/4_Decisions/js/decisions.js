/**
 * Example: Control Structures and Conditional Logic 
 * Author: Mohamed saeed
 * Date: 2025-08-31
 * 
 * 
 * This example demonstrates:
 * 1. Conditional statements (if...else).
 * 2. Boolean expressions for decision-making.
 * 3. Variable assignments based on conditions.
 */

// ✅ Example 1: Driving License Eligibility
const age = 28;
const isOldEnough = age >= 18; // Checks if person is 18 or older

if (isOldEnough) {
  console.log(`✅ Yes, you can start driving license! 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`⛔ No, you are too young. Wait another ${yearsLeft} years 🙂`);
}

// Another way to write the same logic (direct condition inside if)
if (age >= 18) {
  console.log(`✅ Yes, you can start driving license! 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`⛔ No, you are too young. Wait another ${yearsLeft} years 🙂`);
}

// ℹ️ Control structure syntax: if (...) { ... } else { ... }

// ------------------------------------------------------------

// ✅ Example 2: Determining Century Based on Birth Year
const birthYear = 1997;
let century;

if (birthYear <= 2000) {
  century = 20; // 20th century
} else {
  century = 21; // 21st century
}

console.log(`📌 Birth Year: ${birthYear}, Century: ${century}`);
