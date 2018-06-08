function chunkArrayInGroups(arr, size) {
  const splitArr = [];
    
  for (let i = 0; i < arr.length; i += size) {
    splitArr.push(arr.slice(i, size + i));
  }
  
  return splitArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);