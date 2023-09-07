/* exported unique */
function unique(array) {
  const uniqueElements = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniqueElements.includes(array[i])) {
      uniqueElements.push(array[i]);
    }
  }
  return uniqueElements;
}
