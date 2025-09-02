/* ============================================================
   Loops and Arrays
   ------------------------------------------------------------
   Demonstrates:
   - for loops
   - array iteration
   - typeof operator
   - continue and break
   - nested loops
============================================================ */

/* -------------------------
   Simple for loop example
------------------------- */
// Loop 10 times to simulate lifting weights
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

/* -------------------------
   Array example
------------------------- */
const saeed = [
  'saeed',                     // [0] First name
  'hossain',                   // [1] Last name
  2021 - 1991,                 // [2] Age (30)
  'student',                   // [3] Job
  ['Michael', 'Peter', 'Steven'] // [4] Friends list
];

// Loop through array and log value with its type
for (let i = 0; i < saeed.length; i++) {
  console.log(saeed[i], typeof saeed[i]);
}

/* -------------------------
   Using typeof operator
------------------------- */
const types = []; // Array to store types of elements

for (let i = 0; i < saeed.length; i++) {
  console.log(saeed[i], typeof saeed[i]); // Log value and type
  types.push(typeof saeed[i]);           // Store type in types array
}

console.log('Types array:', types); // Output: ['string', 'string', 'number', 'string', 'object']

/* -------------------------
   Calculate ages from birth years
------------------------- */
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log('Ages:', ages); // Output: [46, 30, 52, 17]

/* -------------------------
   Continue and break examples
------------------------- */
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < saeed.length; i++) {
  if (typeof saeed[i] !== 'string') continue; // Skip non-strings
  console.log(saeed[i], typeof saeed[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < saeed.length; i++) {
  if (typeof saeed[i] === 'number') break; // Stop loop when number found
  console.log(saeed[i], typeof saeed[i]);
}

/* -------------------------
   Looping backward
------------------------- */
console.log('--- BACKWARD LOOP ---');
for (let i = saeed.length - 1; i >= 0; i--) {
  console.log(i, saeed[i]);
}

/* -------------------------
   Nested loops example
------------------------- */
console.log('--- LOOP IN LOOP ---');
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

/* 
Notes:
- `continue` skips current iteration and moves to next.
- `break` exits the loop immediately.
- Nested loops are useful for multi-level iteration (e.g., exercises and repetitions).
- Always use `let` or `const` to declare loop variables to avoid scope issues.
*/
