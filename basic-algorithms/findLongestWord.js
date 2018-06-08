function findLongestWordLength(str) {
  const words = str.split(' ');

  const wordLengths = words.map(word => word.length).sort((a, b) => a - b);

  return wordLengths.pop();
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");