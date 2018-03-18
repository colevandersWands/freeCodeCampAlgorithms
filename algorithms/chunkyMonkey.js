function chunkArrayInGroups(arr, size) {
    var splitArr = [];
    
    for (var i = 0; i < arr.length; i += size) {
      var splitElements = arr.slice(i, size + i);
      splitArr.push(splitElements);
    }
    
    return splitArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);