/* ============================================================
   CHALLENGE #3: BMI Calculator
   ------------------------------------------------------------
   Rules:
   - Calculate BMI for each person: BMI = mass / height^2
   - Compare BMI values
   - Output results to console
   ------------------------------------------------------------
   Author: Mohamed Saeed
   Date: 2025-09-02
============================================================ */

/* 
  Object representing Mark:
  - fullName: string → Person's full name
  - mass: number → Weight in kilograms
  - height: number → Height in meters
  - calcBMI: function → Calculates BMI and stores it in the object
*/
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    // BMI formula: mass / (height^2)
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

/* 
  Object representing John:
  - fullName: string → Person's full name
  - mass: number → Weight in kilograms
  - height: number → Height in meters
  - calcBMI: function → Calculates BMI and stores it in the object
*/
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    // BMI formula: mass / (height^2)
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

// Calculate BMI for Mark and John, store in object properties
console.log(mark.calcBMI()); // Logs Mark's BMI
console.log(john.calcBMI()); // Logs John's BMI

// Log the stored BMI values directly from the objects
console.log(mark.bmi, john.bmi);

/* 
  Compare BMI values:
  - If Mark's BMI is higher, output a message
  - If John's BMI is higher, output a message
  - If both BMIs are equal, output a tie message
*/
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(2)})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(2)})!`);
} else {
  console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(2)})!`);
}

/* 
  Notes:
  - `this.bmi` adds a new property to the object dynamically.
  - `**` operator is used for squaring the height (height^2).
  - `.toFixed(2)` is used to round BMI to 2 decimal places for readability.
  - This approach keeps calculation logic inside each object, following object-oriented principles.
*/
