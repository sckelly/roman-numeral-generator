const inputSanitizer = require('../src/input-santiser');

describe('Input Sanitizer', () => {
  const { checkNumberBoundary, checkIsNaN, isInteger } = inputSanitizer;

  describe('Check Number Boundary', () => {
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

  describe('Check Type Is Integer', () => {
    test('should return false to strings', () => {
      expect(isInteger('hello')).toBe(false);
    });

    test('should return false to objects', () => {
      expect(isInteger({'key': 'value'})).toBe(false);
    })

    test('should return false to arrays', () => {
      expect(isInteger([1, 2, 3, 4, 5])).toBe(false);
    })
  });

  describe('Check Number Is NaN', () => {
    test('should return true if param is Not a Number', () => {
      expect(checkIsNaN('Not a number')).toBe(true);
    });

    test('should return false if param is a number', () => {
      expect(checkIsNaN(20)).toBe(false);
    });
  });

});