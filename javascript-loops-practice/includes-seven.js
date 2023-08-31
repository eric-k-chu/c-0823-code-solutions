/* exported includesSeven */
function includesSeven(array) {
  for (const elements of array) {
    if (elements === 7) {
      return true;
    }
  }
  return false;
}
