# 📅 Task: Calculate Year of Birth

## Objective

Write a Node.js program that asks the user for their **name** and **age**, then calculates the year they were born.

---

## Instructions

1. **Prompt the user** for their name using `readline`.
2. **Prompt the user** for their age.
3. **Convert the input age** into a number.
4. **Get the current year** using:
   ```js
   new Date().getFullYear();
   ```
5. **Subtract the age from** the current year to calculate the year of birth.

6. **Print a message like**:
   ```
   Hello [Name]! You were born in [Year].
   ```

## Example Run

```
What is your name? Sara
How old are you? 21
Hello Sara! You were born in 2004.
```
