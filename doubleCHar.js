function doubleChar(str) {
    return str.split('').map(function(char) {
        return char + char;
    }).join('');
  }
  console.log(doubleChar('The'));



