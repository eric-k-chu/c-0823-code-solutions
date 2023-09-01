/* exported reverseWords */
function reverse(word) {
  return word.split('').reverse().join('');
}

function reverseWords(string) {
  const words = string.split(' ');
  let reverseWords = '';

  for (let i = 0; i < words.length; i++) {
    reverseWords += reverse(words[i]) + ' ';
  }
  return reverseWords.trim();
}
