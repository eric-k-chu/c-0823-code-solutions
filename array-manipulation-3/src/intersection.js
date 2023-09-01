/* exported intersection */

function intersection(first, second) {
  const intersection = [];

  for (const element of first) {
    if (second.includes(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}
