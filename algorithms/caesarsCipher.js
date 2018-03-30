function rot13(str) {
  var rot13Str = [];
  
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) >= 65) {
       rot13Str.push(String.fromCharCode(str.charCodeAt(i) + 13));
     } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
       rot13Str.push(String.fromCharCode(str.charCodeAt(i) - 13));
     } else {
      rot13Str.push(String.fromCharCode(str.charCodeAt(i)));
     }
  }
  
str = rot13Str.join('');
  
  return str;
}

rot13("SERR PBQR PNZC");
