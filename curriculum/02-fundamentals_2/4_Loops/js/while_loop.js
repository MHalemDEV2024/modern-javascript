/* ============================================================
    While Loops
   ------------------------------------------------------------
   Demonstrates:
   - Basic while loop
   - Looping until a condition is met
   - Random number generation
============================================================ */

/* -------------------------
   Simple while loop example
------------------------- */
// Initialize repetition counter
let rep = 1;

// Loop 10 times to simulate lifting weights
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++; // Increment counter to avoid infinite loop
}

/* -------------------------
   Random dice roll simulation
------------------------- */
// Roll a dice until we get a 6
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`); // Output current dice roll
  dice = Math.trunc(Math.random() * 6) + 1; // Roll again

  // Notify when loop is about to end
  if (dice === 6) console.log('Loop is about to end...');
}

/* 
Notes:
- `while` loops continue executing as long as the condition is TRUE.
- Always update variables used in the condition to prevent infinite loops.
- `Math.trunc(Math.random() * 6) + 1` simulates a dice roll (1 to 6).
- Useful for repeating tasks until a certain condition is met.
*/
