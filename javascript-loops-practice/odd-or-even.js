/* exported oddOrEven */
function oddOrEven(numbers) {
  const arr = [];
  for (const elements of numbers) {
    if (elements % 2 === 0) {
      arr.push('even');
    } else {
      arr.push('odd');
    }
  }
  return arr;
}
