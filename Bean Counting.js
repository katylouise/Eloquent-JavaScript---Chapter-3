function countChar(string, ch) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if (string.charAt(i) == ch) {
      count += 1;
    }
  }
  return count;
}
function countBs(string) {
 return countChar(string, "B");
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));