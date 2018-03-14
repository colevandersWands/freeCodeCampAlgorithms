function findLongestWord(str) {
    words = str.split(/ /g);
    var wordNums =  [];
    
    for (var i = 0; i < words.length; i++) {
      var wordLength = words[i].length;
      wordNums.push(wordLength);
    }
    
    wordNums.sort(function compareNums (a, b) {
      return a - b;
    });
    
    str = wordNums.pop();
    return str;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");