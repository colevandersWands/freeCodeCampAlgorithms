function confirmEnding(str, target) {
  const ending = str.substr(str.length - target.length);

  return ending === target;
}

confirmEnding("Bastian", "n");