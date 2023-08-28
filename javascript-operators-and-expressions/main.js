const width = 3;
const height = 4;
const area = width * height;
console.log('value of area: ', area);
console.log('type of area: ', typeof area);

const bill = 49;
const payment = 50;
const change = payment - bill;
console.log('value of change: ', change);
console.log('type of change: ', typeof change);

const quizzes = 90;
const midterm = 90;
const final = 90;
const grade = (quizzes + midterm + final) / 3;
console.log('value of grade: ', grade);
console.log('type of grade: ', typeof grade);

const firstName = 'Eric';
const lastName = 'Chu';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName: ', fullName);
console.log('type of fullName: ', typeof fullName);

const pH = 5;
const isAcidic = pH < 7;
console.log('value of isAcidic: ', isAcidic);
console.log('type of isAcidic: ', typeof isAcidic);

const headCount = 300;
const isSparta = headCount === 300;
console.log('value of isSparta: ', isSparta);
console.log('type of isSparta: ', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('value of motto: ', motto);
console.log('type of motto: ', typeof motto);
