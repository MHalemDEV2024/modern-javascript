'use strict'; // Enable strict mode

// Select the element with class "message"
const messageElement = document.querySelector('.message');

// Save the original styles (so we can restore them later)
const originalStyles = {
  color: messageElement.style.color || 'darkblue',
  backgroundColor: messageElement.style.backgroundColor || 'transparent',
  borderColor: messageElement.style.borderColor || 'darkblue',
  fontSize: messageElement.style.fontSize || '20px',
};

// Select buttons
const textBtn = document.getElementById('changeTextBtn');
const styleBtn = document.getElementById('changeStyleBtn');

// Track toggle state
let isStyled = false;

// 1️⃣ Change the text when clicking the "Change Message" button
textBtn.addEventListener('click', function () {
  messageElement.textContent = messageElement.textContent.includes('changed')
    ? 'Hello, this is the original message!'
    : '🎉 The message has been changed!';
});

// 2️⃣ Toggle the style when clicking the "Change Style" button
styleBtn.addEventListener('click', function () {
  if (!isStyled) {
    // Apply new style
    messageElement.style.color = 'white';
    messageElement.style.backgroundColor = 'crimson';
    messageElement.style.borderColor = 'black';
    messageElement.style.fontSize = '24px';
    isStyled = true;
  } else {
    // Restore original style
    messageElement.style.color = originalStyles.color;
    messageElement.style.backgroundColor = originalStyles.backgroundColor;
    messageElement.style.borderColor = originalStyles.borderColor;
    messageElement.style.fontSize = originalStyles.fontSize;
    isStyled = false;
  }
});
