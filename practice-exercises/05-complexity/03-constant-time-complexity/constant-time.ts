/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function add(a: number, b: number): number {
  return a + b;
}

console.log('Example of constant time: ', add(1, 2));
