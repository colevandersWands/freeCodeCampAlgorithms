function dropElements(arr, func) {
  const matchIndex = arr.findIndex(func);
  return matchIndex === -1 ? [] : arr.slice(matchIndex);
}

dropElements([1, 2, 3], function(n) {return n < 3; });