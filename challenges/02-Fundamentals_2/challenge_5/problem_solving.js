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

// ============================================================
// Debugging with the Console and Breakpoints in JavaScript
// ------------------------------------------------------------
// This example demonstrates:
//   1) Using console methods to inspect variables.
//   2) Leveraging console.table for structured data.
//   3) Identifying, finding, and fixing bugs step by step.
// ============================================================

// Test Problem 2 (Amplitude from two arrays)
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log('Amplitude (two arrays):', amplitudeNew);

/**
 * Prompt the user for a Celsius temperature and convert it to Kelvin.
 * Demonstrates how to debug with console methods.
 *
 * @returns {number} Temperature in Kelvin
 */
const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',

    // C) Fixed: Convert input string to a number
    value: Number(prompt('Degrees Celsius:')),
  };

  // B) Find issues using different console methods
  console.table(measurement); // Nicely formatted object output

  // Additional debugging options (uncomment as needed):
  // console.log(measurement.value);   // Standard log
  // console.warn(measurement.value);  // Warning
  // console.error(measurement.value); // Error
  // console.info(measurement.value);  // Info message

  // Convert Celsius to Kelvin
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the problem
// Run function
console.log('Temperature in Kelvin:', measureKelvin());
