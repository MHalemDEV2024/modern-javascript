// -----------------------------
// Example: Ternary Operator vs if/else
// -----------------------------

const age = 23;

// 🔹 Using the ternary operator directly
age >= 18 
  ? console.log("I like to drink coffee") 
  : console.log("I like to drink water");
// 👉 Outputs: "I like to drink coffee"


// 🔹 Using ternary to assign a value (Expression)
const drink = age >= 18 ? "coffee" : "water";
console.log(drink);
// 👉 "coffee"


// 🔹 Same logic with if/else (Statement)
let drink2;
if (age >= 18) {
  drink2 = "coffee";
} else {
  drink2 = "water";
}
console.log(drink2);
// 👉 "coffee"


// 🔹 Using ternary inside a template literal (Expression)
console.log(`I like to drink ${age >= 18 ? "coffee" : "water"}`);
// 👉 "I like to drink coffee"



//⚡ Key Point:
// ternary operator → expression (produces a value, can be inside template literals, assignments, etc.)
// if/else → statement (controls flow, cannot directly produce a value).