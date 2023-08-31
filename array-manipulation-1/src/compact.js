/* exported compact */
function compact(array) {
  const arr = [];
  for (const elements of array) {
    if (elements) {
      arr.push(elements);
    }
  }
  return arr;
}
