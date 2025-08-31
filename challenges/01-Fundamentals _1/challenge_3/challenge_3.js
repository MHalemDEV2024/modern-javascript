/* ============================================================
   CHALLENGE #1: Dolphins vs Koalas - Average Score
   ------------------------------------------------------------
   Task: Calculate the average score of each team and determine
   the winner or if it's a draw.
   Bonus: Apply rule that a team only wins if its score is >= 100
   Author: Mohamed Saeed
   Date: 2025-08-31
   ============================================================ */

// ============================================================
// Test Data
// ============================================================
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas   = (88 + 91 + 110) / 3;

// ============================================================
// Results
// ============================================================
console.log("Dolphins Average Score:", scoreDolphins.toFixed(2));
console.log("Koalas Average Score:", scoreKoalas.toFixed(2));

// ============================================================
// Winner Check (basic version)
// ============================================================
if (scoreDolphins > scoreKoalas) {
  console.log("🏆 Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("🏆 Koalas win the trophy!");
} else {
  console.log("🤝 Both win the trophy!");
}

console.log("\n--- Bonus Rule Applied ---");

// ============================================================
// Winner Check (bonus version: only if score >= 100)
// ============================================================
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("🏆 Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("🏆 Koalas win the trophy!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("🤝 Both win the trophy!");
} else {
  console.log("❌ No one wins the trophy!");
}
