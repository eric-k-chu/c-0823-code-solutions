/* exported truncate */
function truncate(length, string) {
  const newString = string.slice(0, length) + '...';
  return newString;
}
