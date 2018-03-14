function mutation(arr) {
    var checkWord = arr[0].toLowerCase();
    var doesContainWord = arr[1].toLowerCase();
    var checkLetter = [];
    
    for(var i = 0; i < doesContainWord.length; i++) {
      checkLetter.push(checkWord.indexOf(doesContainWord[i]));
    }
    
    for (var j = 0; j < checkLetter.length; j++) {
      if (checkLetter[j] == -1) {
        return false;
      }
      
    } 
      return true;
  }
  
  mutation(["hello", "hey"]);