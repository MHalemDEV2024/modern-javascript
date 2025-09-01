/* ============================================================
   CHALLENGE #1: Dolphins vs Koalas - Average Score
   ------------------------------------------------------------
   Task:
   - Calculate average scores for both teams.
   - A team only wins if its average is at least double the other.
   - Otherwise, no team wins.

   Author: Mohamed Saeed
   Date: 2025-09-01
   ============================================================ */

'use strict';

/************************************************************
 * 1. Helper Function: Calculate Average
 ************************************************************/
const calcAverage = (score1, score2, score3) => 
  (score1 + score2 + score3) / 3;

/************************************************************
 * 2. Winner Check Function
 ************************************************************/
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`🐬 Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`🐨 Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("⚖️ No team wins...");
  }
}

/************************************************************
 * 3. TEST DATA 1
 ************************************************************/
console.log("=== TEST DATA 1 ===");
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);
console.log("Dolphins:", scoreDolphins1, "Koalas:", scoreKoalas1);
checkWinner(scoreDolphins1, scoreKoalas1);

/************************************************************
 * 4. TEST DATA 2
 ************************************************************/
console.log("\n=== TEST DATA 2 ===");
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);
console.log("Dolphins:", scoreDolphins2, "Koalas:", scoreKoalas2);
checkWinner(scoreDolphins2, scoreKoalas2);
