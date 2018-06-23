function convertToRoman(num) {
  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeralRepresentations = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let romanNumeral = '';

  decimalValues.forEach((decimal, index) => {
      while (decimal <= num) {
          romanNumeral += romanNumeralRepresentations[index];
          num -= decimal;
      }
  });

  return romanNumeral;
}

convertToRoman(36);