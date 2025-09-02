// ============================================================
// Smart Home Thermometer - Temperature Amplitude Calculator
// ------------------------------------------------------------
// Description:
//   This script calculates the temperature amplitude (difference
//   between the maximum and minimum temperature values) from
//   one or more arrays of temperature readings.
//   Sensor errors (non-numeric values) are ignored.
// ============================================================

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:

/* 
  We work for a company building a smart home thermometer. Our most recent task is this:
  "Given an array of temperatures of one day, calculate the temperature amplitude.
  Keep in mind that sometimes there might be a sensor error."

*/

/* ============================================================
   Solve PROBLEM 1 Steps:
   ------------------------------------------------------------
    1) understand the problem
    - what is temp amplitude? answer: difference between highest and lowest temp
    - how to compute max and min temperatures?
    - what's a sensor error? and what to do?

    2) breaking up into sub-problems
    - how to ignore errors?
    - find max value in temp array
    - find min value in temp array
    - subtract min from max (amplitude) and return it

=============================================================*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// Test Problem 1
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/* ============================================================
   Solve PROBLEM 2 Steps:
   ------------------------------------------------------------

  Function should now receive 2 arrays of temps

  1) Understanding the problem
  - With 2 arrays, should we implement functionality twice? 
    NO! Just merge two arrays

  2) Breaking up into sub-problems
  - Merge 2 arrays
=============================================================*/

const calcTempAmplitudeNew = function (t1, t2) {
  const mergedTemps = t1.concat(t2);
  console.log('Merged temperatures:', mergedTemps);

  return calcTempAmplitude(mergedTemps);
};

// Test Problem 2
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log('Amplitude (two arrays):', amplitudeNew);
