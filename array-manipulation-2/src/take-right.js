/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else if (count === 1) {
    return [array[array.length - 1]];
  } else {
    const arr = [];
    for (let i = array.length - count; i < array.length; i++) {
      arr.push(array[i]);
    }
    return arr;
  }
}
