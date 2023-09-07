/* exported zip */

function zip(first, second) {
  const zippedArray = [];
  // zippedLength will be the smaller of first.length and second.length
  const zippedLength =
    first.length < second.length ? first.length : second.length;

  for (let i = 0; i < zippedLength; i++) {
    const pair = [];
    pair.push(first[i], second[i]);
    zippedArray.push(pair);
  }
  return zippedArray;
}
