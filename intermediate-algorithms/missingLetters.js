function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const currentCharCode = str.charCodeAt(i);

    if (currentCharCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(currentCharCode - 1);
    }
  }

  return undefined;
}

fearNotLetter("abce");