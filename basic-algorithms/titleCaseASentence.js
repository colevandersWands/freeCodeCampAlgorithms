function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

titleCase("I'm a little tea pot");