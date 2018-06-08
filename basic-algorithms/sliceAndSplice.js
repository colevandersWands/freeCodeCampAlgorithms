function frankenSplice(arr1, arr2, n) {
  const arr2Copy = arr2.slice();
  arr2Copy.splice(n, 0, ...arr1);
  
  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);