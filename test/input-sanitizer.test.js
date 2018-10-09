const inputSanitizer = require('../src/input-santiser');

describe('Input Sanitizer', () => {
  const checkNumberBoundary = inputSanitizer.checkNumberBoundary;
  const checkNumberIsNaN = inputSanitizer.checkNumberIsNaN;
  const checkTypeOfIsInteger = inputSanitizer.checkTypeOfIsInteger;

  describe('for number boundaries', () => {
    test('should return false to out of bounds numbers (below 1)', () => {
      expect(checkNumberBoundary(0)).toBe(false);
    });
    
    test('should return false to out of bounds numbers (above 3999)', () => {
    expect(checkNumberBoundary(4001)).toBe(false);
    });
      
    test('should return true to numbers between 1 and 3999', () => {
      expect(checkNumberBoundary(4)).toBe(true);
    });
    
    test('should return true to numbers between 1 and 3999', () => {
      expect(checkNumberBoundary(600)).toBe(true);
    });

  });

  describe('for invalid inputs', () => {
    test('should return false to strings', () => {
      expect(checkTypeOfIsInteger('hello')).toBe(false);
    });

    test('should return false to objects', () => {
      expect(checkTypeOfIsInteger({'key': 'value'})).toBe(false);
    })

    test('should return false to arrays', () => {
      expect(checkTypeOfIsInteger([1, 2, 3, 4, 5])).toBe(false);
    })
  });

});