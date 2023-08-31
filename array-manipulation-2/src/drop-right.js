/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  } else {
    const arr = [];
    for (let i = 0; i < array.length - count; i++) {
      arr.push(array[i]);
    }
    return arr;
  }
}
