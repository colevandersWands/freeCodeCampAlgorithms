function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      var index =  arr.indexOf(arr[i]);
    }
  }
  
  return num;
}

getIndexToIns([40, 60], 50);
