function xo(str) {
  var jum1 = str.split('x').length-1;
  var jum2 = str.split('o').length-1;
  if (jum1 == jum2) {
    return ("true")
  } else {
    return ("false")
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true