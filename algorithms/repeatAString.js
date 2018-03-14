function repeatStringNumTimes(str, num) {
    var repeatedStr = [];
    if (num == 1) {
      return str;
    }
    
    for (var i = 1; i <= num; i++) {
      repeatedStr.push(str);
    }
    return repeatedStr.join("");
  }
  
  repeatStringNumTimes("abc", 3);
  
