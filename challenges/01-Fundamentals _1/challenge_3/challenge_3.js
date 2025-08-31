/* ============================================================
   CHALLENGE #1: Dolphins vs Koalas - Average Score
   ------------------------------------------------------------
   Task: Calculate the average score of each team and determine
   the winner or if it's a draw.
   Author: Mohamed Saeed
   Date: 2025-08-31
   ============================================================ */

// Test Data
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas   = (88 + 91 + 110) / 3;

// Results
console.log("Dolphins Average Score:", scoreDolphins.toFixed(2));
console.log("Koalas Average Score:", scoreKoalas.toFixed(2));

// Winner Check
if (scoreDolphins > scoreKoalas) {
  console.log("🏆 Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("🏆 Koalas win the trophy!");
} else {
  console.log("🤝 Both win the trophy!");
}
