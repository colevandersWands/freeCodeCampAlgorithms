function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) {
    return a - b;
  });
  
  if (arr[arr.length - 1] < num) {
    return arr.length;
  }
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      return arr.indexOf(arr[i]);
    } else if (arr[i] === num) {
      return arr.indexOf(arr[i]);
    } 
  }
  
  
}

getIndexToIns([40, 60], 50);