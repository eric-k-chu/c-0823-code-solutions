/* exported includes */
function includes(array, value) {
  for (const elements of array) {
    if (elements === value) {
      return true;
    }
  }
  return false;
}
