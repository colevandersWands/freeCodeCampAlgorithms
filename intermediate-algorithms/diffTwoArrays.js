function diffArray(arr1, arr2) {
  return arr1.filter(value => !arr2.includes(value))
          .concat(arr2.filter(value => !arr1.includes(value)));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);