/* exported capitalizeWords */
function capitalize(word) {
  const upper = word[0].toUpperCase();
  const lower = word.slice(1).toLowerCase();
  return upper + lower;
}

function capitalizeWords(string) {
  const words = string.split(' ');
  let capitalizeWords = '';

  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      capitalizeWords += capitalize(words[i]);
    } else {
      capitalizeWords += capitalize(words[i]) + ' ';
    }
  }
  return capitalizeWords;
}
