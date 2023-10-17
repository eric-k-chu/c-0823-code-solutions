import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const operation = process.argv[3];
const a = Number(process.argv[2]);
const b = Number(process.argv[4]);

if (operation === 'plus') {
  console.log('result: ', add(a, b));
} else if (operation === 'minus') {
  console.log('result: ', subtract(a, b));
} else if (operation === 'times') {
  console.log('result: ', multiply(a, b));
} else if (operation === 'over') {
  console.log('result: ', divide(a, b));
} else {
  console.log('Invalid operation.');
}
