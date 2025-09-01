/* ============================================================
   OBJECT vs ARRAY Example
   ------------------------------------------------------------
   Purpose:
   - Demonstrate the difference between storing data in arrays 
     versus objects in JavaScript.
   - Objects provide more structure and readability compared to 
     arrays when dealing with multiple attributes.
   - Show how to access and manipulate object properties using
     dot (.) and bracket ([]) notation.
   - Add new properties dynamically and use template literals.
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


// ============================================================
// DOT vs BRACKET Notation
// ============================================================

// Dot notation (most common, simple, but static)
console.log(saeed.firstName);   // Saeed
console.log(saeed.lastName);    // Hossain

// Bracket notation (allows dynamic property names)
console.log(saeed['lastName']); // Hossain

const nameKey = 'Name';
console.log(saeed['first' + nameKey]); // Saeed
console.log(saeed['last' + nameKey]);  // Hossain

// ❌ Wrong example (invalid syntax, cannot mix dot with string concatenation)
// console.log(saeed.firs.'last' + nameKey);


// ============================================================
// Dynamic Property Access with User Input
// ============================================================

// Prompt the user for a property name
const interestedIn = prompt(
  'What do you want to know about Saeed? Choose between firstName, lastName, age, job, and friends'
);

// Always logs what user typed
console.log("User asked for:", interestedIn);

// Access property dynamically using []
if (saeed[interestedIn]) {
  console.log(saeed[interestedIn]);
} else {
  console.log('❌ Wrong request! Choose between firstName, lastName, age, job, and friends');
}


// ============================================================
// Adding New Properties Dynamically
// ============================================================
saeed.location = 'Egypt';          // Dot notation
saeed['twitter'] = '@saeedhossain'; // Bracket notation
console.log("Updated object:", saeed);


// ============================================================
// Example: Using Template Literals with Object Properties
// ============================================================
console.log(
  `${saeed.firstName} has ${saeed.friends.length} friends, and his best friend is called ${saeed.friends[0]}.`
);



// ============================================================
// Operator Precedence with Objects and Arrays
// ============================================================

console.log(saeed.friends.length); 
// Step 1: saeed.friends → ['Michael', 'Peter', 'Steven']
// Step 2: .length → 3

console.log(saeed.friends[0]); 
// Step 1: saeed.friends → ['Michael', 'Peter', 'Steven']
// Step 2: [0] → 'Michael'
