function repeatStringNumTimes(str, num) {
  let repeatedStr = '';
  
  if (num < 1) {
    return '';
  }

  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

repeatStringNumTimes("abc", 3);
