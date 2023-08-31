/* exported numVowels */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const elements of vowels) {
    if (char.toLowerCase() === elements) {
      return true;
    }
  }
  return false;
}

function numVowels(string) {
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
