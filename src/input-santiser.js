checkNumberBoundary = (number) => {
  return number >= 1 && number <= 3999;
};
  
checkIsNaN = (number) => {
  return isNaN(number);
};

isInteger = (number) => {
  return (typeof number === Number);
};

module.exports = {
  checkNumberBoundary,
  checkIsNaN,
  isInteger
};