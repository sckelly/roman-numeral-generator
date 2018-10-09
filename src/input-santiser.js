checkNumberBoundary = (number) => {
  return number >= 1 && number <= 3999;
};
  
checkNumberIsNaN = (number) => {
  return isNaN(number);
};

checkTypeOfIsInteger = (number) => {
  return (typeof number === Number);
};

module.exports = {
  checkNumberBoundary,
  checkNumberIsNaN,
  checkTypeOfIsInteger
};