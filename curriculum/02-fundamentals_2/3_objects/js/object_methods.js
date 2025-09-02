/* ============================================================
   Example: Working with Objects in JavaScript
   ------------------------------------------------------------
   - Objects group related data (properties) and behavior (methods).
   - Properties: variables attached to the object.
   - Methods: functions attached to the object.
============================================================ */


// Creating an object named "saeed"
const saeed = {

   // ---------- Properties ----------

  firstName: 'Saeed',                     // String → First name
  lastName: 'Hossain',                    // String → Last name
  birthYear: 1991,                        // Number → Year of birth
  job: 'student',                         // String → Current job
  friends: ['Michael', 'Peter', 'Steven'],// Array → List of friends
  hasDriversLicense: true,                // Boolean → Driver's license status

   // ---------- Methods ----------

  // Method #1 (commented out): Calculate age using a parameter
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // Method #2 (commented out): Uses "this" to access object's birthYear
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  // Method #3 (active): Calculates age and stores it as a new property
  calcAge: function () {
    this.age = 2037 - this.birthYear;  // Store calculated age inside the object
    return this.age;                   // Return the calculated age
  },
};

// Call method and log results
console.log(saeed.calcAge());  // Output: Age in 2037
console.log(saeed.age);        // Output: Stored age property
console.log(saeed.age);        // Same as above (shows persistence)

// Alternative function call styles (commented examples)
// console.log(saeed.calcAge(1991));
// console.log(saeed );
// console.log(saeed.calcAge(saeed.birthYear));
// console.log(saeed['calcAge'](saeed.birthYear));

/* ============================================================
   Example : Object with Summary Method
============================================================ */

const saeedObject = {
  // ---------- Properties ----------
  firstName: 'Saeed',
  lastName: 'Hossain',
  birthYear: 1991,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // ---------- Methods ----------
  // Calculate and store age
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Return a formatted description of the person
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }
};

// Using the method
console.log(saeedObject.getSummary());