function sumFibs(num) {
  const fibonacciNums = [1];

  for (let i = 1; i <= num;) {
    fibonacciNums.push(i);
    i = fibonacciNums[fibonacciNums.length - 1] + fibonacciNums[fibonacciNums.length - 2];
  }

  return fibonacciNums.filter(num => num % 2 !== 0).reduce((sum, currentValue) => sum += currentValue);
}

sumFibs(4);