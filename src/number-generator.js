const inputSanitzer = require('./input-santiser');
const romanNumeralMap = require('../mappings/roman-numeral-mappings');

const romanNumeralGenerator = (number) => {
  if (inputSanitzer.checkNumberBoundary(number) && !inputSanitzer.checkNumberIsNaN(number)) {
    let romanNumeral = '';
    const mappingKeys = Object.keys(romanNumeralMap).reverse();
  
    mappingKeys.forEach((key) => {
      while (number >= key) {
        number -= key
        romanNumeral += romanNumeralMap[key]
      }
    });
    return romanNumeral;
  } else {
    throw new Error('\nAn error occurred with user input.');
  }
}

const greekNumeralGenerator = (number) => {
  // ...
}

module.exports = {
  romanNumeralGenerator
};