// Example: Using switch and if/else statements to handle different days

const day = 'monday';

// ✅ Switch Statement
// Useful when you want to check one variable against multiple fixed values
// cleaner when checking one variable against multiple values.

switch (day) {
    case 'monday': // if day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // prevent "fall-through" to the next case

    case 'tuesday': // if day === 'tuesday'
        console.log('Prepare theory videos');
        break;

    case 'wednesday': // if day === 'wednesday'
    case 'thursday':  // or if day === 'thursday'
        console.log('Write code examples');
        break;

    case 'friday': // if day === 'friday'
        console.log('Record videos');
        break;

    case 'saturday': // if day === 'saturday'
    case 'sunday':   // or if day === 'sunday'
        console.log('Enjoy the weekend :D');
        break;

    default: // if no case matches
        console.log('Not a valid day!');
}

// ✅ Equivalent with If/Else If Statements
// More flexible than switch, allows complex conditions
// more powerful when you need to check ranges or complex conditions.

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
