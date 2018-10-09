const prompt = require('prompt');
const { romanNumeralGenerator } = require('./roman-numeral-generator');

;const takeUserInput = (() => {
  console.log('  Please enter the number you would like converted to Roman Numerals. \n  Note: Your number must be between 1 and 3999.');
  prompt.start();
  prompt.get(['number'], (error, input) => {
    const number = parseInt(input.number);
    try {
      console.log(`The number you entered: ${number} is equal to ${romanNumeralGenerator(number)} in Roman Numerals.`);
    } catch(err) {
      console.error(err.message);
    }
  });
})();
