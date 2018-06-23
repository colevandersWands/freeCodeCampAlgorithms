function uniteUnique(arr) {
  const arrs = Array.from(arguments).reduce((arrs, currentEl) => arrs.concat(currentEl))
  return arrs.filter((num, index) => arrs.indexOf(num) === index);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);