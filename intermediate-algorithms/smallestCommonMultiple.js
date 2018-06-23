function smallestCommons(arr) {
  const smallestNum = Math.min(...arr);
  const largestNum = Math.max(...arr);
  const range = [];

  for (let i = smallestNum; i <= largestNum; i++) {
    range.push(i);
  }

  return  range.reduce((lcm, num) => {
    const GCD = gcd(lcm, num);
    return (lcm * num) / GCD;
  });
}

function gcd(num1, num2) {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2);
}


smallestCommons([1,5]);