/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  if (first.length === 0 && second.length === 0) {
    return true;
  }

  const arrayLength = first.length;
  for (let i = 0; i < arrayLength; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
