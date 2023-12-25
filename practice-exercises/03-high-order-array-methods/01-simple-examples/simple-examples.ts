const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const squared = numbers.map((n) => n * n);
console.log('Squaring numbers with map:', squared);
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evens = numbers.map((n) => n % 2 === 0);
console.log('Getting evens from numbers with filter:', evens);
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum of numbers with reduce:', sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
console.log('Printing numbers with forEach:');
numbers.forEach((n) => console.log(n));
/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const four = numbers.find((n) => n === 4);
console.log('Finding 4 from numbers using find: ', four);
/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasOdds = numbers.some((n) => n % 2 !== 0);
console.log('Find if numbers has at least one odd number with some: ', hasOdds);
/**
 * every: Checks if all array elements satisfy a condition.
 */
const isPositive = numbers.every((n) => n > 0);
console.log(
  'Checking if all values of number is positive with every: ',
  isPositive
);
