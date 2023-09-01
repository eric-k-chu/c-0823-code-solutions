/* exported flatten */

function flatten(array) {
  const flattenArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenArray.push(array[i][j]);
      }
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}
