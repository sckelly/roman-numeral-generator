const prompt = require('prompt');

const inputSanitiser = require('./input-santiser');
const numberGenerator = require('./number-generator');

;const takeUserInput = (() => {
  prompt.start();
  console.log('  Please enter the number you would like converted to Roman Numerals. \n  Your number must be between 1 and 3999.');
  prompt.get(['number'], (error, input) => {
    const { number } = parseInt(input);
    if (inputSanitiser.checkNumberBoundary(number) && !inputSanitiser.checkNumberIsNaN(number)) {
      try {
        console.log(`The number you entered: ${number} is equal to ${numberGenerator.romanNumeralGenerator(number)} in Roman Numerals.`);
      } catch(err) {
        console.error(err.message);
      }
    } else {
      console.log(`The number you entered: ${number} is incorrect; please try another number.`);
    }
  });
})();
