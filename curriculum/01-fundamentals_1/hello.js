
// Original code using alert() — only works in a web browser

alert("Hello World") // Shows a popup message in the browser

let js = 'amazing'

if (js === 'amazing') alert('JavaScript is Fun') // Popup only in browser

js = 'boring'

if (js === 'amazing') alert('JavaScript is Fun') // Won't run because js !== 'amazing'

40 + 8 + 23 - 10 // Math operation (won't show output in alert)


// Node.js / VS Code version using console.log()
// console.log() works in both Node.js and browsers

// console.log("Hello World"); // Prints message to console

// let js = 'amazing'; // Declare variable

// if (js === 'amazing') console.log('JavaScript is Fun'); // Prints because js === 'amazing'

// js = 'boring'; // Change variable value

// if (js === 'amazing') console.log('JavaScript is Fun'); // Won't print because js !== 'amazing'

// console.log(40 + 8 + 23 - 10); // Prints result of math operation: 61
