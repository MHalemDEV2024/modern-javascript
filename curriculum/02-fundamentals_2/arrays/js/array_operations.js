/* ============================================================
   Array Operations in JavaScript
   ------------------------------------------------------------
   Demonstrating how to add, remove, search, and check elements
   in an array using different built-in methods.
   ============================================================ */

// Initial Array
const friends = ['Ali', 'Saeed', 'Mohamed'];
console.log("Initial Friends:", friends);

/* -------------------------------
   Adding Elements
--------------------------------*/
// push() → adds element(s) to the END of the array
friends.push('Hamza');
console.log("After push('Hamza'):", friends);

// push() also returns the new length of the array
const newLength = friends.push('Hassan');
console.log("After push('Hassan'), New Length:", newLength);

// unshift() → adds element(s) to the BEGINNING of the array
friends.unshift('Ahmed');
console.log("After unshift('Ahmed'):", friends);


/* -------------------------------
   Removing Elements
--------------------------------*/
// pop() → removes the LAST element
const popped = friends.pop();
console.log("Removed with pop():", popped);
console.log("After pop():", friends);

// shift() → removes the FIRST element
const shifted = friends.shift();
console.log("Removed with shift():", shifted);
console.log("After shift():", friends);


/* -------------------------------
   Searching Elements
--------------------------------*/
// indexOf() → gives index of an element (-1 if not found)
console.log("Index of 'Ali':", friends.indexOf('Ali'));
console.log("Index of 'Hassan':", friends.indexOf('Hassan'));

// includes() → checks if array contains a value (true/false)
console.log("Includes 'Ali'?", friends.includes('Ali'));
console.log("Includes 'Hassan'?", friends.includes('Hassan'));

// ⚠️ Note: includes() uses strict equality (===)
friends.push(23);
console.log("After push(23):", friends);
console.log("Includes '23' (string)?", friends.includes('23')); // false
console.log("Includes 23 (number)?", friends.includes(23));     // true

// Example Use Case
if (friends.includes('Ali')) {
  console.log("✅ You have a friend called 'Ali'!");
}
