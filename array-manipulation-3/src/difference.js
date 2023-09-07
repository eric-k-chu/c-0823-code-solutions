/* exported difference */

function difference(first, second) {
  const symDifference = [];

  for (const element of first) {
    if (!second.includes(element)) {
      symDifference.push(element);
    }
  }

  for (const element of second) {
    if (!first.includes(element)) {
      symDifference.push(element);
    }
  }

  return symDifference;
}
