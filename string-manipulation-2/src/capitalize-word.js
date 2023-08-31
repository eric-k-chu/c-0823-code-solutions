/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  const upper = word[0].toUpperCase();
  const lower = word.slice(1).toLowerCase();
  return upper + lower;
}
