/* exported isPalindromic */
function reverse(word) {
  return word.split('').reverse().join('');
}

function isPalindromic(string) {
  // remove spaces
  const normalizedString = string.replace(/ /g, '');
  const reversed = reverse(normalizedString);

  for (let i = 0; i < string.length; i++) {
    if (normalizedString[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}
