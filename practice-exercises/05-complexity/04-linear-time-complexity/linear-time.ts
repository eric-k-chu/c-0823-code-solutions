/*
  Linear Time O(n)

  Linear time means that the time required to complete a function
  is directly proportional to the size of the input data set.
*/

function getLength(arr: unknown[]): number {
  let length = 0;
  arr.forEach(() => length++);
  return length;
}

console.log('Example of linear time: ', getLength([1, 2, 3, 4, 5]));
