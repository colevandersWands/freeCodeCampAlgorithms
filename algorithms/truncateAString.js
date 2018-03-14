function truncateString(str, num) {
    var truncatedString = str;
    
    if (str.length > num) {
      truncatedString = str.slice(0, num - 3) + "...";
    } 
    
    if (num <= 2) {
      truncatedString = str.slice(0, num) + "...";
    } 
    console.log(truncatedString);
    return truncatedString;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);