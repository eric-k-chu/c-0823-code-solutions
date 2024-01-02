/*
Quadratic Time O(n^2)

Quadratic time means that the time required to complete a function
is proportional to the square of the input data set.
*/

function circle(radius: number): void {
  const centerX = radius;
  const centerY = radius;

  for (let y = 0; y <= 2 * radius; y++) {
    let row = '';
    for (let x = 0; x <= 2 * radius; x++) {
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      row += Math.abs(distance - radius) < 0.5 ? '*' : ' ';
    }
    console.log(row);
  }
}

console.log('Example of quadratic time:');
circle(20);
