# Comprehensive CSS Syntax Guide

This guide covers the most commonly used **CSS syntax, selectors, properties, pseudo-classes, pseudo-elements, animations, and responsive design techniques**. It’s designed for frontend developers to quickly reference and learn.

---

## Table of Contents

1. [Selectors](#selectors)
2. [Properties](#properties)
3. [Box Model](#box-model)
4. [Flexbox](#flexbox)
5. [Grid](#grid)
6. [Positioning](#positioning)
7. [Overflow](#overflow)
8. [Display & Visibility](#display--visibility)
9. [Transitions & Animations](#transitions--animations)
10. [Media Queries](#media-queries)
11. [CSS Variables](#css-variables)

---

## Selectors

```css
/* Universal selector */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Type selector */
p {
  font-size: 16px;
  line-height: 1.5;
}

/* Class selector */
.container {
  width: 80%;
  margin: 0 auto;
}

/* ID selector */
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}

/* Grouping selectors */
h1,
h2,
h3 {
  font-family: 'Arial', sans-serif;
}

/* Descendant selector */
nav ul li {
  list-style: none;
}

/* Child selector */
div > p {
  color: red;
}

/* Adjacent sibling */
h1 + p {
  margin-top: 0;
}

/* General sibling */
h1 ~ p {
  color: blue;
}

/* Attribute selectors */
input[type='text'] {
  border: 1px solid #ccc;
}

/* Pseudo-classes */
a:hover {
  color: orange;
}

input:focus {
  outline: 2px solid #00f;
}

li:first-child {
  font-weight: bold;
}

li:last-child {
  font-style: italic;
}

/* Pseudo-elements */
p::first-letter {
  font-size: 2em;
  color: red;
}

p::after {
  content: ' ★';
}
```
