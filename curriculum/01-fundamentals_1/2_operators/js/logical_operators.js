// Logical Operators Example 🚦

// A = Driving License Status
const hasDriverLicense = true;   

// B = Vision Check Status
const hasGoodVision = false;     

// Logical AND (both conditions must be true)
console.log("AND:", hasDriverLicense && hasGoodVision); 

// Logical OR (at least one condition must be true)
console.log("OR:", hasDriverLicense || hasGoodVision);  

// Logical NOT (inverts the condition)
console.log("NOT:", !hasDriverLicense);  


// Example with Driving Eligibility
const isTired = false;

// All three conditions must be true to drive safely
console.log(
  "Check All Conditions:",
  hasDriverLicense && hasGoodVision && !isTired
);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("✅ Saeed is able to drive!");
} else {
  console.log("❌ Someone else should drive...");
}
