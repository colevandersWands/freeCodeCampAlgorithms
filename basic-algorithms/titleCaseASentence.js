function titleCase(str) {
    str = str.toLowerCase();
    var words = str.split(/ /g);
    var capLetters = [];
    var wordsNoFirstLetter = [];
    var titleCaseWords = [];
    
    for (var i = 0; i < words.length; i++) {
      capLetters.push(words[i][0].toUpperCase());
      wordsNoFirstLetter.push(words[i].slice(1));
      titleCaseWords.push(capLetters[i] + wordsNoFirstLetter[i]);
    }
    
    var titleCaseSentence = titleCaseWords.join(" ");
    
    return titleCaseSentence;
  }
  
  titleCase("I'm a little tea pot");
  