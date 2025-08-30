// Using let → variable can be reassigned
let age = 30;
age = 31; // ✅ Reassigned successfully

// Always prefer const for values that should not change
const birthYear = 1991;
// birthYear = 1990; // ❌ Error: Cannot reassign a const

// const job; 
// ❌ Error: Const must be initialized when declared

// Avoid using var → it has function scope and can cause unexpected issues
var job = "programmer";
job = "teacher"; // ✅ Works, but not recommended (use let instead)

// Assigning without let/const/var automatically creates a global variable (bad practice!)
lastname = "Saeed"; 
console.log(lastname); // Outputs: Saeed
