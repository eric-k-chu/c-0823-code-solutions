// Math Object

const x = 5;
const y = 3;
const z = 2;
const maximumValue = Math.max(x, y, z);
console.log('max value of 5, 3, 2: ', maximumValue);

const heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random Hero from heroes: ', randomHero);

// Array Methods

const library = [
  {
    title: 'Book 1',
    author: 'John Doe',
  },
  {
    title: 'Book 2',
    author: 'Jane Doe',
  },
  {
    title: 'Book 3',
    author: 'Bobby Bobin',
  },
];

const lastBook = library.pop();
console.log('Last book in library: ', lastBook);
const firstBook = library.shift();
console.log('First book in library: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('New library: ', library);

// String Methods

const fullName = 'Eric Chu';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
