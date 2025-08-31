// ✅ Strict vs Loose Equality in JavaScript

const age = 18;

// Strict equality (===) checks both value AND type
if (age === 18) console.log('You just became an adult 🎉 (strict check)');
// 👉 true because both are number 18

console.log(18 === 18); // true

// Loose equality (==) checks value only, allows type coercion
if (age == 18) console.log('You just became an adult 🙂 (loose check)');
// 👉 true because "18" == 18 after coercion

console.log('18' == 18); // true (string '18' is converted to number 18)


// ✅ Prompt Example (always returns a string, so we convert to Number)
const favourite = Number(prompt("What's your favourite number?")); 
// Conversion ensures we compare numbers correctly
console.log(favourite);
console.log(typeof favourite); // number


// ✅ Using strict equality for safety
if (favourite === 23) {
  console.log('Cool! 23 is an amazing number! 🚀');
} else if (favourite === 7) {
  console.log('7 is also a cool number 🍀');
} else if (favourite === 9) {
  console.log('9 is also a cool number 🔥');
} else {
  console.log('Number is not 23, 7, or 9 ❌');
}


// ✅ Using strict inequality (!==)
if (favourite !== 23) {
  console.log('Why not 23? 🤔');
}
