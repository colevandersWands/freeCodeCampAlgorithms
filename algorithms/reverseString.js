function reverseString(str) {
  
    var strArray = str.split("");
    var reversedArray = strArray.reverse();
    str = reversedArray.join("");
    return str;
  }
  
  reverseString("hello");