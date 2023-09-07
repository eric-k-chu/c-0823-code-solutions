/* exported isAnagram */

function isAnagram(firstString, secondString) {
  // remove spaces
  const normalizedFirst = firstString.replace(/ /g, '');
  const normalizedSecond = secondString.replace(/ /g, '');

  const sortedFirst = normalizedFirst.split('').sort().join('');
  const sortedSecond = normalizedSecond.split('').sort().join('');

  if (sortedFirst === sortedSecond) {
    return true;
  } else {
    return false;
  }
}
