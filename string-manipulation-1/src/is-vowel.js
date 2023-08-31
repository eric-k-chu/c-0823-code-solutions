/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const elements of vowels) {
    if (char.toLowerCase() === elements) {
      return true;
    }
  }
  return false;
}
