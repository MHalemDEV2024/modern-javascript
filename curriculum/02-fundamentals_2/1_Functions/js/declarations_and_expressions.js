'use strict';

/************************************************************
 * 1. Function Declaration
 ************************************************************/
// ✅ You can call a declaration BEFORE it is defined (hoisting).
console.log(calcAgeDec(1995)); // Works!

function calcAgeDec(birthYear) {
  return 2025 - birthYear;
}

console.log(calcAgeDec(2000)); // 25


/************************************************************
 * 2. Function Expression
 ************************************************************/
// ❌ You CANNOT call an expression before it is defined.
// console.log(calcAgeExp(1995)); // Error: Cannot access before initialization

const calcAgeExp = function (birthYear) {
  return 2025 - birthYear;
};

console.log(calcAgeExp(1995)); // 30


/************************************************************
 * 3. Arrow Function (modern expression style)
 ************************************************************/
// Shorter syntax, especially good for one-liners.
const calcAgeArrow = birthYear => 2025 - birthYear;

console.log(calcAgeArrow(1990)); // 35

// Arrow function with multiple lines
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1990, "Saeed"));
console.log(yearsUntilRetirement(1980, "Bob"));


/************************************************************
 * 4. Professional Tip
 ************************************************************/
/*
- Use Function Declarations for utilities (hoisted).
- Use Expressions or Arrows for variables, objects, callbacks.
- Prefer Arrows when you need shorter syntax or lexical "this".
*/