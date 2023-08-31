/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arr = [];
  for (const elements of words) {
    arr.push(elements + suffix);
  }
  return arr;
}
