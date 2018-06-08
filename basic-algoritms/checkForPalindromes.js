function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/_|\W/g, "");
    
    var strArray = str.split("");
    var reversedStrArray = strArray.reverse();
    var reversedStr = reversedStrArray.join("");
    
    if (reversedStr == str) {
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("eye");