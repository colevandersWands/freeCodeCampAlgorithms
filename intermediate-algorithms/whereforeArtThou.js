function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(element => sourceKeys
          .every(key => element.hasOwnProperty(key) && element[key] === source[key]));
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });