function palindrome(str) {
 
    str = str.toLowerCase();
    str = str.replace(/_|\W/g, "");
    
    strArray = str.split("");
    reversedStrArray = strArray.reverse();
    reversedStr = reversedStrArray.join("");
    
    if (reversedStr == str) {
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("eye");