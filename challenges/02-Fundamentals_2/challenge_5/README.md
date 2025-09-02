# 🌡️ Smart Home Thermometer - Temperature Amplitude

This project calculates the **temperature amplitude** (difference between the highest and lowest readings) from arrays of daily temperature data.

Sometimes, sensors record invalid values (e.g., `"error"`). These should be ignored when calculating the amplitude.

---

## **CHALLENGE #5**

Let's build a **smart home thermometer** that calculates the **temperature amplitude**.

### **Your tasks:**

- Create an array called `temperatures` with test data that includes some sensor errors.
- Write a function `calcTempAmplitude` that takes an array of temperatures as input.
- Inside the function:
  - Ignore any non-numeric values (sensor errors).
  - Find the maximum temperature.
  - Find the minimum temperature.
  - Return the amplitude (`max − min`).
- Log the result to the console.

---

### **TEST DATA (Problem 1):**

```js
[3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
```

## BONUS (Problem 2):

- Extend your solution to handle **two arrays of temperatures.**

- Do not duplicate the logic — merge the two arrays into one.

- Reuse your `calcTempAmplitude` function on the merged array.

### **TEST DATA (Problem 2):**

```js
[3, 5, 1] and [9, 0, 5]
```
