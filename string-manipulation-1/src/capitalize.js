/* exported capitalize */
function capitalize(word) {
  const upper = word[0].toUpperCase();
  const lower = word.slice(1).toLowerCase();
  return upper + lower;
}
