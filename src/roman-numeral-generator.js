const romanNumeralMap = require('../mappings/roman-numeral-mappings');
const { checkNumberBoundary, checkIsNaN } = require('./input-santiser');

const romanNumeralGenerator = (number) => {
  if (checkNumberBoundary(number) && !checkIsNaN(number)) {
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
    throw new Error('\nAn error occurred with user input. Please check your input is a number is between 1 and 3999');
  }
}

module.exports = {
  romanNumeralGenerator
};