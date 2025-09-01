/************************************************************
 * Example 1: Without Strict Mode
 ************************************************************/

// No "use strict" here ❌
// JavaScript will silently create new variables on typos.

let hasDriversLicense = false;
const passTest = true;

// Typo here: "hasDriverLicens" instead of "hasDriversLicense"
// In non-strict mode, JS creates a NEW global variable automatically
if (passTest) hasDriverLicens = true; 

// This checks the CORRECT variable (still false), so nothing prints
if (hasDriversLicense) console.log("I can drive 🚗");

console.log("Without strict mode, typo did NOT throw an error!");
console.log("hasDriversLicense =", hasDriversLicense); // false
console.log("hasDriverLicens =", hasDriverLicens);     // true (but unwanted)


/************************************************************
 * Example 2: With Strict Mode
 ************************************************************/
'use strict';  // ✅ Strict Mode ON

let hasDrivensLicenens = false;
const passTest2 = true;

// Typo will now cause an ERROR instead of silently creating a variable
// Uncommenting the line below will throw: ReferenceError
// if (passTest2) hasDrivenLicenens = true;

if (passTest2) hasDrivensLicenens = true;

if (hasDrivensLicenens) console.log("I can drive :D");

// ❌ Reserved words are not allowed in strict mode
// const interface = 'Audio';
// const private = 534;
// const if = 23;

/* 

🔎 What Happens?

* Without strict mode

    hasDriverLicens (typo) gets created silently.

    Bug goes unnoticed, making debugging harder.

* With strict mode

    The typo line throws:

        ReferenceError: hasDrivenLicenens is not defined

    Helps you catch mistakes immediately.
    Reserved words like interface, private, if cannot be used as variable names.

*/