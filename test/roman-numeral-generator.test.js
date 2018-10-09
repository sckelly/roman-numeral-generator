const { romanNumeralGenerator } = require('../src/roman-numeral-generator');

describe('Number Generator', () => {

  test('Roman Numeral should throw an error on out of bounds number below 1', () => {
    try {
      romanNumeralGenerator(0);
    } catch(error) {
      expect(error).toBeTruthy();
    }
  });

  test('Roman Numeral should throw an error on out of bounds number above 3999', () => {
    try {
      romanNumeralGenerator(4001);
    } catch(error) {
      expect(error).toBeTruthy();
    }
  });

  test('Roman Numeral should throw an error on invalid input', () => {
    try {
      romanNumeralGenerator('hello');
    } catch(error) {
      expect(error).toBeTruthy();
    }
  });

  test('Roman Numeral should convert 1 to I', () => {
    expect(romanNumeralGenerator(1)).toEqual('I');
  });

  test('Roman Numeral should convert 2 to II', () => {
    expect(romanNumeralGenerator(2)).toEqual('II');
  });

  test('Roman Numeral should convert 4 to IV', () => {
    expect(romanNumeralGenerator(4)).toEqual('IV');
  });

  test('Roman Numeral should convert 5 to V', () => {
    expect(romanNumeralGenerator(5)).toEqual('V');
  });

  test('Roman Numeral should convert 9 to IX', () => {
    expect(romanNumeralGenerator(9)).toEqual('IX');
  });

  test('Roman Numeral should convert 10 to X', () => {
    expect(romanNumeralGenerator(10)).toEqual('X');
  });

  test('Roman Numeral should convert 40 to XL', () => {
    expect(romanNumeralGenerator(40)).toEqual('XL');
  });

  test('Roman Numeral should convert 87 to LXXXVII', () => {
    expect(romanNumeralGenerator(87)).toEqual('LXXXVII');
  });

  test('Roman Numeral should convert 99 to XCIX', () => {
    expect(romanNumeralGenerator(99)).toEqual('XCIX');
  });

  test('Roman Numeral should convert 218 to CCXVIII', () => {
    expect(romanNumeralGenerator(218)).toEqual('CCXVIII');
  });

  test('Roman Numeral should convert 1337 to MCCCXXXVII', () => {
    expect(romanNumeralGenerator(1337)).toEqual('MCCCXXXVII');
  });

  test('Roman Numeral should convert 3999 to XCIX', () => {
    expect(romanNumeralGenerator(3999)).toEqual('MMMCMXCIX');
  });
});