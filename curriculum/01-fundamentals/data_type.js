// Declare a variable and assign a boolean value (true)
let javeScriptIsFun = true;

// Print the value of the variable to the console
console.log(javeScriptIsFun);

// typeof true → shows the data type of the literal 'true' (boolean)
console.log(typeof true);

// typeof javeScriptIsFun → shows the data type of the variable (currently boolean)
console.log(typeof javeScriptIsFun);

// typeof 23 → shows the data type of the number (number)
console.log(typeof 23);

// typeof "Saeed" → shows the data type of the string (string)
console.log(typeof "Saeed");

// Change the value of the variable to a string
javeScriptIsFun = "YES!";

// typeof javeScriptIsFun → now it’s a string, since we reassigned it
console.log(typeof javeScriptIsFun);

// Declare a variable without assigning a value → by default, it’s undefined
let year;

// Logs 'undefined' because no value was assigned
console.log(year);

// typeof year → returns "undefined"
console.log(typeof year);

// Assign a number to the variable 'year'
year = 1991;

// typeof year → now it's a number
console.log(typeof year);

// Special case: typeof null → returns "object" (this is a known bug in JavaScript)
console.log(typeof null);
