/* ------------------------------
   Expressions vs Statements
-------------------------------*/

// 🔹 Expressions → produce a value
3 + 4;          // 7
2025 - 1991;    // 34
"Hello";        // "Hello"
true && false;  // false

// You can use expressions inside other code
console.log(3 + 4);  // Expression inside console.log()

// 🔹 Statements → perform an action
if (3 + 4 > 5) {           // "if" is a statement
  console.log("Yes!");     // Statement that runs if condition is true
}

const age = 30;  // Variable declaration is a statement
let name = "Ali"; // Another statement

// ✅ Rule of thumb:
// If you can assign it to a variable → it's an Expression
let result = 3 + 4; // 3+4 is an expression, whole line is a statement
