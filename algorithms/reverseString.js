function reverseString(str) {
  
    strArray = str.split("");
    reversedArray = strArray.reverse();
    str = reversedArray.join("");
    return str;
  }
  
  reverseString("hello");