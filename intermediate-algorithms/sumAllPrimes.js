function sumPrimes(num) {
  const primes = [];

  for (let i = 1; i <= num; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }

  return primes.reduce((sum, currentNum) => sum += currentNum);
}

function checkPrime(numberToCheck) {
  for (let i = 2; i < numberToCheck; i++) {
    if (numberToCheck % i === 0) {
      return false;
    }
  }
  return numberToCheck > 1;
}

sumPrimes(10);