/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  }

  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(array[i]);
  }
  return arr;
}
