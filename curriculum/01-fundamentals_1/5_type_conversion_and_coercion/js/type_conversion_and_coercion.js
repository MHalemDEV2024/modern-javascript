// ================================
// Type Conversion and Type Coercion in JavaScript
// ================================



// ===============================================================================
// 📌 Type Conversion (explicitly changing a value from one type to another)
// ================================================================================

const inputYear = "1997"; 

console.log(inputYear + 18); 
// 👉 Here "1997" is a string, so JavaScript performs string concatenation
// Result: "199718" instead of doing math

console.log(Number(inputYear), inputYear); 
// 👉 Convert string to number (1997) while keeping original string

console.log(Number(inputYear) + 18); 
// 👉 Now 1997 + 18 = 2015 (real math, not concatenation)

console.log(Number("Jonas")); 
// 👉 Cannot convert "Jonas" to a number → NaN (Not a Number)

console.log(typeof NaN); 
// 👉 NaN is still of type "number" in JavaScript

console.log(String(23), 23); 
// 👉 Convert number 23 to string explicitly → "23"


// =====================================================================
// 📌 Type Coercion (JavaScript automatically converts types)
// =====================================================================
console.log("I am " + 23 + " years old"); 
// 👉 Number 23 is automatically converted to string → "I am 23 years old"

console.log("23" - "10" - 3); 
// 👉 Strings converted to numbers → 23 - 10 - 3 = 10

console.log("23" * "2"); 
// 👉 Multiplication converts both to numbers → 23 * 2 = 46

console.log("23" / "2"); 
// 👉 Division converts both to numbers → 23 / 2 = 11.5


// 📌 Example: tricky coercion cases
let n = "1" + 1;  
// 👉 "1" + 1 = "11" (string concatenation)
n = n - 1;  
// 👉 "11" (string) is coerced to number → 11 - 1 = 10
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); 
// 👉 2 + 3 + 4 = 9, then 9 + "5" = "95" (string)

console.log("10" - "4" - "3" - 2 + "5"); 
// 👉 "10" - "4" = 6 → 6 - "3" = 3 → 3 - 2 = 1 → 1 + "5" = "15"
