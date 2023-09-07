/* exported union */

function union(first, second) {
  const union = [];

  for (const element of first) {
    if (!union.includes(element)) {
      union.push(element);
    }
  }

  for (const element of second) {
    if (!union.includes(element)) {
      union.push(element);
    }
  }

  return union;
}
