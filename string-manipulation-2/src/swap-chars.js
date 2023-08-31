/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const arr = [];
  let swappedString = '';

  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;

  for (const elements of arr) {
    swappedString += elements;
  }
  return swappedString;
}
