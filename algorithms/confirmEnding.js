function confirmEnding(str, target) {
    var lastLetters = str.substr(-target.length, target.length);
   
    if (lastLetters == target) {
      return true;
    } else {
      return false;
    }
  }
  
  confirmEnding("He has to give me a new name", "name");
  