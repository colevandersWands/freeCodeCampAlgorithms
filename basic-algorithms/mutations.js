function mutation(arr) {
  const targetWord = arr[0].toLowerCase();
  const testWord = arr[1].toLowerCase();
  
  for (let i = 0; i < testWord.length; i++) {
    if (targetWord.indexOf(testWord[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);