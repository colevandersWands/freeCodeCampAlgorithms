function pairElement(str) {
  const map = {T: 'A', A: 'T', G: 'C', C: 'G'}

  const characters = str.split('');

  characters.forEach((character, index) => {
    characters[index] = [character, map[character]]; 
  });

  return characters;
}

pairElement("GCG");