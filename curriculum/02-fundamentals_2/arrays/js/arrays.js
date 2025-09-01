/* ============================================================
   ARRAYS IN JAVASCRIPT
   ------------------------------------------------------------
   Arrays allow us to store multiple values in a single variable.
   We can access, modify, and use them with powerful methods.
===============================================================*/

// ✅ Old way (not recommended: harder to manage with many values)
const friend1 = "Ali";
const friend2 = "Ahmed";
const friend3 = "Hassan";

// ✅ Modern way: using an Array
const friends = ["Ali", "Ahmed", "Hassan"];
console.log("Friends Array:", friends);

// Creating an array with the 'new Array' constructor
const years = new Array(1991, 1992, 1993, 1994);
console.log("Years Array:", years);

/* -------------------------------
   Accessing Array Elements
--------------------------------*/
console.log("First friend:", friends[0]);       // Ali
console.log("Second friend:", friends[1]);      // Ahmed
console.log("Third friend:", friends[2]);       // Hassan

// Array length
console.log("Number of friends:", friends.length);

// Accessing the last element
console.log("Last friend:", friends[friends.length - 1]);

/* -------------------------------
   Modifying Arrays
--------------------------------*/
friends[2] = "Hamza";  // Replace 'Hassan' with 'Hamza'
console.log("Updated friends:", friends);

/* -------------------------------
   Arrays can store different types
--------------------------------*/
const firstName = "Ali";
const ali = [
  firstName,
  "Hassan",
  2022 - 1991,   // Number
  "Student",     // String
  friends        // Another array (nested array)
];

console.log("Ali's Array:", ali);
console.log("Ali's Array Length:", ali.length);
console.log("Last Element:", ali[ali.length - 1]);
console.log("Age (index 2):", ali[2]);
console.log("First nested friend:", ali[4][0]);  // Ali
console.log("Third nested friend:", ali[4][2]);  // Hamza

/* ============================================================
   EXERCISE: Calculating Ages from Years Array
===============================================================*/

// Function to calculate age
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

// Using years array
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log("Individual ages:", age1, age2, age3);

// Store results directly in a new array
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];

console.log("Ages Array:", ages);
