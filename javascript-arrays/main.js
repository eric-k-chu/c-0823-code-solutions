const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

const america =
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(america);
colors[2] = 'green';
const mexico =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexico);
console.log('value of colors: ', colors);

const students = ['Gnar', 'Azir', 'Lulu', 'Jhin'];
const numberOfStudents = students.length;
console.log('value of numberOfStudents: ', numberOfStudents);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('value of lastStudent: ', lastStudent);
console.log('value of students: ', students);
