function addTogether() {
  const args = Array.from(arguments);
  const num1 = args[0];
  const num2 = args[1];

  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 + num2;
  } else if (Number.isInteger(num1) && num2 === undefined) {
    return num2 => {
      if (Number.isInteger(num2)) {
         return num1 + num2
      }
    };
  } 
    return undefined;
  }

addTogether(2,3);