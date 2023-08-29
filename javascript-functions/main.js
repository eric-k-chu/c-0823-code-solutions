function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(10) = ', convertMinutesToSeconds(10));

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
console.log("greet('Earthlings') = ", greet('Earthlings'));

function getArea(width, height) {
  return width * height;
}
console.log('getArea(5,6) = ', getArea(5, 6));

function getFirstName(person) {
  return person.firstName;
}
console.log(
  "getFirstName({ firstName: 'Bob', lastName: 'Tot' }) = ",
  getFirstName({ firstName: 'Bob', lastName: 'Tot' })
);

function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  "getLastElement(['a', 'b', 'c']) = ",
  getLastElement(['a', 'b', 'c'])
);
