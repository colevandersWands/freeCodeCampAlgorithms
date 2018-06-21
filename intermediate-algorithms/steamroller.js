function steamrollArray(arr) {
  const flatterArr = [].concat(...arr);
  return flatterArr.some(Array.isArray) ? steamrollArray(flatterArr) : flatterArr;
}

steamrollArray([1, [2], [3, [[4]]]]);