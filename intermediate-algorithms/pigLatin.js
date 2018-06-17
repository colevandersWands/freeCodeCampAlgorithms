function translatePigLatin(str) {
  const firstVowel = str.search(/[aeiou]/);

  return firstVowel === 0 ? str.concat('way') 
       : firstVowel !== -1 ? `${str.substr(firstVowel)}${str.substr(0, firstVowel)}ay` 
       : str.concat('ay');
}

translatePigLatin('consonant');