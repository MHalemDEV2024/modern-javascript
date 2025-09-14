// calculate_year_of_birth.js

const readline = require('readline');

// create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ask for name
rl.question('What is your name? ', function (userName) {
  rl.question('How old are you? ', function (userAge) {
    userAge = Number(userAge);
    let currentYear = new Date().getFullYear();
    let yearOfBirth = currentYear - userAge;

    console.log(`Hello ${userName}! You were born in ${yearOfBirth}.`);

    rl.close();
  });
});
