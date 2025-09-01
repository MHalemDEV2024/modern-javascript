/* ============================================================
   OBJECT vs ARRAY Example
   ------------------------------------------------------------
   Purpose:
   - Demonstrate the difference between storing data in arrays 
     versus objects in JavaScript.
   - Objects provide more structure and readability compared to 
     arrays when dealing with multiple attributes.
============================================================ */

// Example using an array (less structured, harder to read)
// Each element's meaning must be remembered by index position
const saeedArray = [
  'saeed',                    // [0] First name
  'hossain',                  // [1] Last name
  2021 - 1991,                // [2] Age calculation (30)
  'student',                  // [3] Job
  ['Michael', 'Peter', 'Steven'] // [4] Friends list
];


// Example using an object (more structured, self-descriptive)
// Properties have names, making the code easier to maintain
const saeed = {
  firstName: 'Saeed',                     // String → First name
  lastName: 'Hossain',                    // String → Last name
  age: 2021 - 1991,                       // Number → Age (calculated)
  job: 'student',                         // String → Current job
  friends: ['Michael', 'Peter', 'Steven'] // Array → List of friends
};


// Notes:
// - Arrays are useful for ordered data where position matters (e.g., lists).
// - Objects are better for representing entities with key-value pairs.
// - Using objects improves readability and avoids "magic index" problems.


// Output to check both versions
console.log("Array representation:", saeedArray);
console.log("Object representation:", saeed);
